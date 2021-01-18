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
const dateInput = document.querySelector('#trip-start')
const durationInput = document.querySelector('#trip-duration')
const travelersInput = document.querySelector('#trip-travelers')
const destinationDropdown = document.querySelector('#trip-destination')
const buttonQuote = document.querySelector('#button-quote')
const buttonSubmit = document.querySelector('#button-submit')
const requestMessage = document.querySelector('#trip-request-message')

buttonQuote.addEventListener('click', quoteTrip)
buttonSubmit.addEventListener('click', requestTrip)

const allDestinations = []
const allTrips = []
let currentTraveler

const fetchedTravelerData = fetchApi.getTravelerData()
const fetchedTripData = fetchApi.getTripData()
const fetchedDestinationData = fetchApi.getDestinationData()

Promise.all([fetchedTravelerData, fetchedTripData, fetchedDestinationData])
  .then(values => {
    generateTraveler(values[0])
    findTravelerTrips(values[1])
    generateTripDestinations(values[2])
    createTripCards()
  })
  .catch(handleErrorMessages)

function handleErrorMessages(error) {
  // window.alert('The server was not accessible at this time. Please reload the page or try again later.')
  console.log(error)
}

function generateTraveler(travelerData) {
  currentTraveler = new Traveler(travelerData.travelers[Math.floor(Math.random() * travelerData.travelers.length)])
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
  alphabetizeDestinations(destinationData) // SHOULD PROBABLY COME FROM GLOBAL INSTEAD
  destinationData.destinations.forEach(location => {
    let newDestination = new Destination(location)
    allDestinations.push(newDestination)
    domUpdates.addDestinationsToDropdown(newDestination)
    currentTraveler.addMatchingDestinations(newDestination)
  })
  domUpdates.displayTotalSpent(currentTraveler)
}

function alphabetizeDestinations(destinationData) {
  destinationData.destinations.sort((a, b) => { // CHANGE ARRAY TO GLOBAL
    return a.destination.localeCompare(b.destination)
  })
}

function createTripCards() {
  currentTraveler.trips.forEach(trip => {
    domUpdates.addCardToDom(trip)
  })
}

function findDestination() {
  return allDestinations.find(location => {
    return location.name === destinationDropdown.value
  })
}

function quoteTrip() {
  let tripEstimate = 0
  let totalEstimate = 0
  const matchingDest = findDestination()

  tripEstimate += durationInput.value * matchingDest.lodging
  tripEstimate += travelersInput.value * matchingDest.flights

  totalEstimate = tripEstimate + (tripEstimate * .1)

  domUpdates.addTripQuoteToDom(totalEstimate)
}

function createNewTripId() {
  const lastId = allTrips[allTrips.length - 1].id // MAKE SURE THIS UPDATES W/ EACH POST TO AVOID DUPLICATES. SORT FIRST?
  const newId = lastId + 1
  return newId
}

function formatDate(dateValue) {
  return dateValue.replace(/-/g, '/')
}

function requestTrip() {
  const matchingDest = findDestination()

  const tripRequest = {
    id: createNewTripId(),
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
