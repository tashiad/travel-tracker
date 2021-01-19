import './css/index.scss'
import './images/plane-banner.jpg'
import './images/undraw_travel_mode_7sf4.svg'
import domUpdates from './domUpdates.js'
import fetchApi from './fetchApi.js'
import Traveler from './Traveler.js'
import Destination from './Destination.js'
import Trip from './Trip.js'

const usernameInput = document.querySelector('#username-field')
const passwordInput = document.querySelector('#password-field')
const buttonSignIn = document.querySelector('#login-form-submit')
const signInErrorMessage = document.querySelector('#sign-in-error-message')
const dateInput = document.querySelector('#trip-start')
const durationInput = document.querySelector('#trip-duration')
const travelersInput = document.querySelector('#trip-travelers')
const destinationDropdown = document.querySelector('#trip-destination')
const buttonQuote = document.querySelector('#button-quote')
const buttonSubmit = document.querySelector('#button-submit')
const tripErrorMessage = document.querySelector('#trip-error-message')
const requestMessage = document.querySelector('#trip-request-message')
const noTripFilters = document.querySelector('#no-trip-filters')
const approvedTrips = document.querySelector('#approved-trips')
const pendingTrips = document.querySelector('#pending-trips')

buttonSignIn.addEventListener('click', evaluateSignInForm)
buttonQuote.addEventListener('click', evaluateTripForm)
buttonSubmit.addEventListener('click', requestTrip)
noTripFilters.addEventListener('click', function() {
  domUpdates.showAllTrips()
})
approvedTrips.addEventListener('click', function() {
  domUpdates.showApprovedTrips()
})
pendingTrips.addEventListener('click', function() {
  domUpdates.showPendingTrips()
})

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
    signInErrorMessage.innerText = ''
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
    .catch(handleServerMessages)
}

function handleServerMessages(error) {
  signInErrorMessage.innerText = `Something went wrong. Please refresh the page or try again later.`
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

function sortTripsByDate() {
  return currentTraveler.trips.sort((a, b) => {
    return new Date(b.date) - new Date(a.date)
  })
}

function createTripCards() {
  sortTripsByDate()
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

  totalEstimate = currentTraveler.formatCost(tripEstimate + (tripEstimate * .1))

  domUpdates.addTripQuoteToDom(totalEstimate)
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
    .then(() => {
      const newTrip = new Trip(tripRequest)
      currentTraveler.trips.push(newTrip)
      currentTraveler.addMatchingDestinations(matchingDest)
      domUpdates.clearTripCards()
      createTripCards()
      requestMessage.classList.remove('hidden')
      domUpdates.resetForm()
    }).catch(handleServerMessages)
}
