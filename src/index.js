import './css/index.scss'
import './images/plane-banner.jpg'
import './images/undraw_travel_mode_7sf4.svg'
import domUpdates from './domUpdates.js'
import fetchApi from './fetchApi.js'
import Traveler from './Traveler.js'
import Destination from './Destination.js'
import Trip from './Trip.js'

const welcomeText = document.querySelector('#welcome-text')
const cardGrid = document.querySelector('.card-grid')
const buttonSignIn = document.querySelector('#login-form-submit')
const usernameInput = document.querySelector('#username-field')
const passwordInput = document.querySelector('#password-field')
const signInErrorMessage = document.querySelector("#sign-in-error-message")
const dateInput = document.querySelector('#trip-start')
const durationInput = document.querySelector('#trip-duration')
const travelersInput = document.querySelector('#trip-travelers')
const destinationDropdown = document.querySelector('#trip-destination')
const tripCost = document.querySelector('#trip-cost')
const buttonQuote = document.querySelector('#button-quote')
const buttonSubmit = document.querySelector('#button-submit')
const tripErrorMessage = document.querySelector('#trip-error-message')
const requestMessage = document.querySelector('#trip-request-message')

buttonSignIn.addEventListener('click', evaluateSignInForm)
buttonQuote.addEventListener('click', evaluateTripForm)
buttonSubmit.addEventListener('click', requestTrip)

const allDestinations = []
const allTrips = []
let currentTraveler

const fetchedTripData = fetchApi.getTripData()
const fetchedDestinationData = fetchApi.getDestinationData()

function evaluateSignInForm(event) {
  event.preventDefault()
  const usernameValue = usernameInput.value.trim()
  const passwordValue = passwordInput.value.trim()
  const splitName = usernameValue.split('')
  const letters = splitName.slice(0, 8).join('')
  const numbers = splitName.slice(8, 10).join('')
  const currentUserId = parseInt(numbers)

  domUpdates.validateSignInInputs(usernameValue, letters, numbers, passwordValue)

  if (usernameInput.classList.contains('success') &&
      passwordInput.classList.contains('success')) {
        signInErrorMessage.classList.add('hidden')
        loadDashboard(currentUserId)
      }
}

function loadDashboard(currentUserId) {
  const fetchedSingleTraveler = fetchApi.getSingleTraveler(currentUserId)

  Promise.all([fetchedSingleTraveler, fetchedTripData, fetchedDestinationData])
    .then(values => {
      generateTraveler(values[0])
      findTravelerTrips(values[1])
      generateTripDestinations(values[2])
      createTripCards()
    })
    .catch(handleErrorMessages)
}

function handleErrorMessages(error) {
  window.alert('The server was not accessible at this time. Please reload the page or try again later.')
  console.log(error)
}

function generateTraveler(travelerData) {
  currentTraveler = new Traveler(travelerData)
  let firstName = currentTraveler.name.split(' ')[0]
  domUpdates.addWelcomeMessage(firstName)
}

function findTravelerTrips(tripData) {
  tripData.trips.forEach(trip => {
    let newTrip = new Trip(trip)
    allTrips.push(trip)
    currentTraveler.addMatchingTrips(newTrip)
  })
}

function generateTripDestinations(destinationData) {
  alphabetizeDestinations(destinationData)
  destinationData.destinations.forEach(location => {
    let newDestination = new Destination(location)
    allDestinations.push(newDestination)
    domUpdates.addDestinationsToDropdown(newDestination)
    currentTraveler.addMatchingDestinations(newDestination)
  })
  domUpdates.showStats(currentTraveler)
}

function alphabetizeDestinations(destinationData) {
  destinationData.destinations.sort((a, b) => {
    return a.destination.localeCompare(b.destination)
  })
}

function alphabetizeTrips() {
  currentTraveler.trips.sort((a, b) => {
    return a.destinationDetails.name.localeCompare(b.destinationDetails.name)
  })
}

function createTripCards() {
  alphabetizeTrips()
  currentTraveler.trips.forEach(trip => {
    domUpdates.addCardToDom(trip)
  })
}

function findDestination() {
  return allDestinations.find(location => {
    return location.name === destinationDropdown.value
  })
}

function evaluateTripForm(event) {
  event.preventDefault()

  domUpdates.validateTripInputs()

  if (dateInput.classList.contains('success') &&
      durationInput.classList.contains('success') &&
      travelersInput.classList.contains('success') &&
      destinationDropdown.classList.contains('success')) {
        quoteTrip()
        tripErrorMessage.classList.add('hidden')
      }
}

function quoteTrip() {
  let tripEstimate = 0
  let totalEstimate = 0
  const matchingDest = findDestination()

  tripEstimate += durationInput.value * matchingDest.lodging
  tripEstimate += travelersInput.value * matchingDest.flights

  totalEstimate = tripEstimate + (tripEstimate * .1)

  domUpdates.addTripQuoteToDom(totalEstimate.toFixed(2))
  domUpdates.removeTripValidation()
}

function formatDate(dateValue) {
  return dateValue.replace(/-/g, '/')
}

function requestTrip(event) {
  event.preventDefault()
  const matchingDest = findDestination()

  const tripRequest = {
    id: Date.now(),
    userID: currentTraveler.id,
    destinationID: matchingDest.id,
    travelers: parseInt(travelersInput.value),
    date: formatDate(dateInput.value),
    duration: parseInt(durationInput.value),
    status: 'pending',
    suggestedActivities: []
  }

  fetchApi.postTripRequest(tripRequest)
    .then(responses => {
      const newTrip = new Trip(tripRequest)
      currentTraveler.trips.push(newTrip)
      currentTraveler.addMatchingDestinations(matchingDest)
      domUpdates.clearTripCards()
      createTripCards()
      requestMessage.classList.remove('hidden')
      domUpdates.resetForm()
    }).catch(handleErrorMessages)
}
