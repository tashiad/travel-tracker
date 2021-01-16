import './css/index.scss'
import domUpdates from'./domUpdates.js'
import fetchApi from './fetchApi.js'
import Traveler from './Traveler.js'
import Destination from './Destination.js'
import Trip from './Trip.js'

// QUERY SELECTORS
const welcomeText = document.querySelector("#welcome-text")
const cardGrid = document.querySelector(".card-grid")
const buttonQuote = document.querySelector("#button-quote")
const buttonSubmit = document.querySelector("#button-submit")

// EVENT LISTENERS
// buttonQuote.addEventListener('click', tbd)
// buttonSubmit.addEventListener('click', tbd)

// GLOBAL VARIABLES
let currentTraveler
// const travelerTripDestinations = []

// FETCH API DATASETS
const fetchedTravelerData = fetchApi.getTravelerData()
const fetchedTripData = fetchApi.getTripData()
const fetchedDestinationData = fetchApi.getDestinationData()

Promise.all([fetchedTravelerData, fetchedTripData, fetchedDestinationData])
  .then(values => {
    generateTraveler(values[0])
    findTrips(values[1])
    // generateDestinations(values[2])
    // loadWebsite()
  }).catch(handleErrorMessages)

// function loadWebsite() {
//   createTripCards()
// }

function handleErrorMessages(error) {
  // window.alert('The server was not accessible at this time. Please reload the page or try again later.')
  console.log(error)
}

// POPULATE WEBSITE INFORMATION
function generateTraveler(travelerData) {
  currentTraveler = new Traveler(travelerData.travelers[Math.floor(Math.random() * travelerData.travelers.length)])
  let firstName = currentTraveler.name.split(' ')[0]
  domUpdates.addWelcomeMessage(firstName)
  // findTravelerTrips(currentTraveler.id)
}

function findTrips(tripData) {
  tripData.trips.forEach(trip => {
    let travelerTrip = new Trip(trip)
    if (travelerTrip.userId === currentTraveler.id) {
      currentTraveler.trips.push(travelerTrip)
    }
  })
}

// function generateDestinations(destinationData) {
//   destinationData.destinations.forEach(destination => {
//     let tripDestination = new Destination(destination)
//     if (trip.userID === currentTraveler.id) {
//       travelerTrips.push(trip)
//     }
//   })
//   console.log(travelerTrips);
// }

// function findTravelerTrips(travelerId) {
//   travelerTrips = fetchedTripData.trips.filter(trip => trip.userID === travelerId)
//   console.log(travelerTrips)
// }

// function createTripCards() {
//   fetchedTripData.forEach(trip => {
//     domUpdates.addCardToDom(trip)
//   })
// }
