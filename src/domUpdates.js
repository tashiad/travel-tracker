const welcomeText = document.querySelector('#welcome-text')
const totalSpent = document.querySelector('#total-spent')
const dateInput = document.querySelector('#trip-start')
const durationInput = document.querySelector('#trip-duration')
const travelersInput = document.querySelector('#trip-travelers')
// const destinationInput = document.querySelector('.destination-input')
const destinationDropdown = document.querySelector('#trip-destination')
const tripCost = document.querySelector('#trip-cost')
const buttonSubmit = document.querySelector('#button-submit')
const cardGrid = document.querySelector('.card-grid')
const cardTemplate = document.querySelector('.template-card')

const domUpdates = {
  addWelcomeMessage(firstName) {
    welcomeText.innerText = `Welcome ${firstName}! Here are your trips.`
  },

  displayTotalSpent(currentTraveler) {
    totalSpent.innerHTML = `Total amount spent on trips in 2021: $${currentTraveler.calculateTotalSpent()}`
  },

  addDestinationsToDropdown(destination) {
    const newOption = document.createElement('option')
    newOption.innerText = destination.name
    newOption.value = destination.name
    destinationDropdown.appendChild(newOption)
  },

  addCardToDom(trip) {
    const newTripCard = cardTemplate.content.cloneNode(true)
    newTripCard.querySelector('h4.card-destination').innerText = trip.destinationDetails.name
    newTripCard.querySelector('img.card-image').src = trip.destinationDetails.image
    newTripCard.querySelector('img.card-image').alt = trip.destinationDetails.alt
    newTripCard.querySelector('p.card-travelers').innerHTML = `<strong>Travelers:</strong> ${trip.travelers}`
    newTripCard.querySelector('p.card-date').innerHTML = `<strong>Start Date:</strong> ${trip.date}`
    newTripCard.querySelector('p.card-duration').innerHTML = `<strong>Duration:</strong> ${trip.duration} days`
    newTripCard.querySelector('p.card-lodging').innerHTML = `<strong>Lodging:</strong> $${trip.destinationDetails.lodging} per night`
    newTripCard.querySelector('p.card-flights').innerHTML = `<strong>Flights:</strong> $${trip.destinationDetails.flights} per person`
    newTripCard.querySelector('p.card-status').innerHTML = `<strong>Status:</strong> ${trip.status}`

    cardGrid.appendChild(newTripCard)
  },

  addTripQuoteToDom(costEstimate) {
    const formattedCost = costEstimate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    buttonSubmit.classList.remove('hidden')
    tripCost.classList.remove('hidden')
    tripCost.innerHTML = `<strong>Estimated Trip Cost:</strong> $${formattedCost}`
  },

  clearTripCards() {
    cardGrid.querySelectorAll('article').forEach(article => article.remove())
  },

  clearInputs() {
    // const timeElapsed = Date.now()
    // const today = new Date(timeElapsed)
    dateInput.value = "";
    durationInput.value = "";
    travelersInput.value = "";
    destinationDropdown.value = "";
  }
}

export default domUpdates
