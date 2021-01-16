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

// FETCH API DATASETS
const fetchedTravelerData = fetchApi.getTravelerData()
const fetchedTripData = fetchApi.getTripData()
const fetchedDestinationData = fetchApi.getDestinationData()

Promise.all([fetchedTravelerData, fetchedTripData, fetchedDestinationData])
  .then(values => {
    generateTraveler(values[0])
    // createRecipeDataset(values[1])
    // addRecipeNameAndCost(values[2])
    // loadWebsite()
  }).catch(handleErrorMessages)

// function loadWebsite() {
//   createTripCards()
// }

function handleErrorMessages(error) {
  window.alert('The server was not accessible at this time. Please reload the page or try again later.')
  console.log(error)
}

// POPULATE WEBSITE INFORMATION
function generateTraveler(travelerData) {
  currentTraveler = new Traveler(travelerData.travelers[Math.floor(Math.random() * travelerData.travelers.length)])
  let firstName = currentTraveler.name.split(' ')[0]
  domUpdates.addWelcomeMessage(firstName)
}

// function findRecipe(recipeID) {
//   return allRecipes.find(recipe => recipe.id === Number(recipeID))
// }
//
// function createTripCards() {
//   fetchedTripData.forEach(trip => {
//     domUpdates.addCardToDom(trip)
//   })
// }
