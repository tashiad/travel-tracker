const welcomeText = document.querySelector('#welcome-text')
const totalSpent = document.querySelector('#total-spent')
const dateInput = document.querySelector('#trip-start')
const durationInput = document.querySelector('#trip-duration')
const travelersInput = document.querySelector('#trip-travelers')
const destinationDropdown = document.querySelector('#trip-destination')
const tripCost = document.querySelector('#trip-cost')
const buttonSubmit = document.querySelector('#button-submit')
const cardGrid = document.querySelector('.card-grid')
const cardTemplate = document.querySelector('.template-card')
const tripErrorMessage = document.querySelector('#trip-error-message')

const domUpdates = {
  addWelcomeMessage(firstName) {
    welcomeText.innerText = `Welcome, ${firstName}!`
  },

  displayTotalSpent(currentTraveler) {
    totalSpent.innerText = `$${currentTraveler.calculateTotalSpent()}`
  },

  addDestinationsToDropdown(destination) {
    const newOption = document.createElement('option')
    newOption.innerText = destination.name
    newOption.value = destination.name
    destinationDropdown.appendChild(newOption)
  },

  addCardToDom(trip) {
    const newTripCard = cardTemplate.content.cloneNode(true)
    newTripCard.querySelector('h3.card-destination').innerText = trip.destinationDetails.name
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

  validateInputs() {
    const dateValue = dateInput.value.trim()
    const durationValue = durationInput.value.trim()
    const travelersValue = travelersInput.value.trim()
    const destValue = destinationDropdown.value.trim()

    const currentDate = new Date();
    const inputDate = new Date(dateValue);

    if ((dateValue === '') || (inputDate < currentDate)) {
      dateInput.className = 'failure'
      this.setErrors()
    } else {
      dateInput.className = 'success'
    }

    if ((durationValue === '') || (durationValue === '0')) {
      durationInput.className = 'failure'
      this.setErrors()
    } else {
      durationInput.className = 'success'
    }

    if ((travelersValue === '') || (travelersValue === '0')) {
      travelersInput.className = 'failure'
      this.setErrors()
    } else {
      travelersInput.className = 'success'
    }

    if (destValue === '') {
      destinationDropdown.className = 'failure'
      this.setErrors()
    } else {
      destinationDropdown.className = 'success'
    }
  },

  setErrors() {
    tripErrorMessage.classList.remove('hidden')
    tripCost.classList.add('hidden')
    buttonSubmit.classList.add('hidden')
  },

  addTripQuoteToDom(costEstimate) {
    const formattedCost = costEstimate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    tripCost.classList.remove('hidden')
    tripCost.innerHTML = `<strong>Estimated Trip Cost:</strong> $${formattedCost}`
    buttonSubmit.classList.remove('hidden')
  },

  resetForm() {
    tripCost.classList.add('hidden')
    buttonSubmit.classList.add('hidden')
    dateInput.value = "";
    durationInput.value = "";
    travelersInput.value = "";
    destinationDropdown.value = "";
  },

  clearTripCards() {
    cardGrid.querySelectorAll('article').forEach(article => article.remove())
  }
}

export default domUpdates
