const signInForm = document.querySelector('.sign-in-form')
const usernameInput = document.querySelector('#username-field')
const passwordInput = document.querySelector('#password-field')
const signInErrorMessage = document.querySelector('#sign-in-error-message')
const welcomeText = document.querySelector('#welcome-text')
const sidebar = document.querySelector('.sidebar')
const allTrips = document.querySelector('.all-trips')
const cardGrid = document.querySelector('.card-grid')
const cardTemplate = document.querySelector('.template-card')
const dateInput = document.querySelector('#trip-start')
const durationInput = document.querySelector('#trip-duration')
const travelersInput = document.querySelector('#trip-travelers')
const destinationDropdown = document.querySelector('#trip-destination')
const tripCost = document.querySelector('#trip-cost')
const buttonSubmit = document.querySelector('#button-submit')
const totalSpent = document.querySelector('#total-spent')
const tripsTaken = document.querySelector('#trips-taken')
const daysTraveled = document.querySelector('#days-traveled')
const tripErrorMessage = document.querySelector('#trip-error-message')
const requestMessage = document.querySelector('#trip-request-message')

const domUpdates = {

  validateSignInInputs(usernameValue, letters, numbers, passwordValue) {
    if ((letters !== 'traveler') ||
      (numbers === undefined) ||
      (numbers === '0') ||
      (numbers === '00') ||
      (parseInt(numbers) > 50)) {
      usernameInput.className = 'failure'
      signInErrorMessage.innerText = `Username or password does not match.`
    } else {
      usernameInput.className = 'success'
    }

    if (passwordValue !== 'travel2020') {
      passwordInput.className = 'failure'
      signInErrorMessage.innerText = `Username or password does not match.`
    } else {
      passwordInput.className = 'success'
    }
  },

  addWelcomeMessage(firstName) {
    welcomeText.classList.remove('hidden')
    sidebar.classList.remove('hidden')
    allTrips.classList.remove('hidden')
    signInForm.classList.add('hidden')
    welcomeText.innerText = `Welcome, ${firstName}!`
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

    if (trip.status === 'pending') {
      newTripCard.querySelector('article').classList.add('pending')
    } else if (trip.status === 'approved') {
      newTripCard.querySelector('article').classList.add('approved')
    }

    cardGrid.appendChild(newTripCard)
  },

  showApprovedTrips() {
    const cards = document.querySelectorAll('.card')
    cards.forEach(card => {
      if (card.classList.contains('pending')) {
        card.classList.add('hidden')
      } else if (card.classList.contains('approved')) {
        card.classList.remove('hidden')
      }
    })
  },

  showPendingTrips() {
    const cards = document.querySelectorAll('.card')
    cards.forEach(card => {
      if (card.classList.contains('approved')) {
        card.classList.add('hidden')
      } else if (card.classList.contains('pending')) {
        card.classList.remove('hidden')
      }
    })
  },

  showAllTrips() {
    const cards = document.querySelectorAll('.card')
    cards.forEach(card => {
      if (card.classList.contains('hidden')) {
        card.classList.remove('hidden')
      }
    })
  },

  showStats(currentTraveler) {
    totalSpent.innerText = `$${currentTraveler.getCurrentYearSpend()}`
    tripsTaken.innerText = `${currentTraveler.getCurrentYearApprovedTrips().length}`
    daysTraveled.innerText = `${currentTraveler.getDaysTraveled()}`
  },

  validateTripInputs() {
    const dateValue = dateInput.value.trim()
    const durationValue = durationInput.value.trim()
    const travelersValue = travelersInput.value.trim()
    const destValue = destinationDropdown.value.trim()

    const currentDate = new Date()
    const inputDate = new Date(dateValue)

    if ((dateValue === '') || (inputDate < currentDate)) {
      dateInput.className = 'failure'
      this.setTripErrors()
    } else {
      dateInput.className = 'success'
    }

    if ((durationValue === '') || (durationValue === '0')) {
      durationInput.className = 'failure'
      this.setTripErrors()
    } else {
      durationInput.className = 'success'
    }

    if ((travelersValue === '') || (travelersValue === '0')) {
      travelersInput.className = 'failure'
      this.setTripErrors()
    } else {
      travelersInput.className = 'success'
    }

    if (destValue === '') {
      destinationDropdown.className = 'failure'
      this.setTripErrors()
    } else {
      destinationDropdown.className = 'success'
    }
  },

  setTripErrors() {
    tripErrorMessage.innerText = 'Be sure to fill out all fields above and check to make sure the date is in the future before submitting.'
    tripCost.classList.add('hidden')
    buttonSubmit.classList.add('hidden')
  },

  removeTripValidation() {
    dateInput.classList.remove('success')
    durationInput.classList.remove('success')
    travelersInput.classList.remove('success')
    destinationDropdown.classList.remove('success')
  },

  addTripQuoteToDom(costEstimate) {
    tripCost.classList.remove('hidden')
    tripCost.innerHTML = `<strong>Estimated Cost:</strong> $${costEstimate}`
    buttonSubmit.classList.remove('hidden')
  },

  resetForm() {
    tripCost.classList.add('hidden')
    buttonSubmit.classList.add('hidden')
    dateInput.value = ''
    durationInput.value = ''
    travelersInput.value = ''
    destinationDropdown.value = ''
    setTimeout(function() {
      requestMessage.classList.add('hidden')
    }, 3000)
  },

  clearTripCards() {
    cardGrid.querySelectorAll('article').forEach(article => article.remove())
  }
}

export default domUpdates
