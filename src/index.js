import './css/index.scss'
import domUpdates from'./domUpdates.js'
import fetchApi from './fetchApi.js'
import Traveler from './Traveler.js'
import Destination from './Destination.js'
import Trip from './Trip.js'

const welcomeText = document.querySelector('#welcome-text')
const cardGrid = document.querySelector('.card-grid')
const buttonQuote = document.querySelector('#button-quote')
const buttonSubmit = document.querySelector('#button-submit')

// buttonQuote.addEventListener('click', tbd)
// buttonSubmit.addEventListener('click', tbd)

let currentTraveler

const fetchedTravelerData = fetchApi.getTravelerData()
const fetchedTripData = fetchApi.getTripData()
const fetchedDestinationData = fetchApi.getDestinationData()

Promise.all([fetchedTravelerData, fetchedTripData, fetchedDestinationData])
  .then(values => {
    generateTraveler(values[0])
    findTravelerTrips(values[1])
    matchTripDestinations(values[2])
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
    let travelerTrip = new Trip(trip)

    if (travelerTrip.userId === currentTraveler.id) {
      currentTraveler.trips.push(travelerTrip)
    }
  })
}

function matchTripDestinations(destinationData) {
  destinationData.destinations.forEach(location => {
    let tripDestination = new Destination(location)

    currentTraveler.trips.forEach(trip => {
      if (trip.destinationId === tripDestination.id) {
        trip.destinationDetails = tripDestination
      }
    })
  })
  domUpdates.displayTotalSpent(currentTraveler)
}

function createTripCards() {
  currentTraveler.trips.forEach(trip => {
    domUpdates.addCardToDom(trip)
  })
}
