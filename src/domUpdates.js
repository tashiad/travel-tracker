const welcomeText = document.querySelector('#welcome-text')
const totalSpent = document.querySelector('#total-spent')
const destinationDropdown = document.querySelector('#trip-destination')
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
  }
}

export default domUpdates
