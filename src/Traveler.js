class Traveler {
  constructor(traveler) {
    this.id = traveler.id
    this.name = traveler.name
    this.type = traveler.travelerType
    this.trips = []
  }

  addMatchingTrips(newTrip) {
    if ((newTrip.userId === this.id) && (!this.trips.includes(newTrip.id))) {
      this.trips.push(newTrip)
    }
  }

  addMatchingDestinations(newDestination) {
    this.trips.forEach(trip => {
      if (trip.destinationId === newDestination.id) {
        trip.destinationDetails = newDestination
      }
    })
  }

  formatCost(number) {
    return number.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  getCurrentYearApprovedTrips() {
    const today = Date.now()
    const currentYear = new Date(today).getFullYear()

    return this.trips.filter(trip => {
      return trip.date.includes(currentYear) && (trip.status === 'approved')
    })
  }

  getCurrentYearSpend() {
    let tripSpend = 0
    let totalSpent = 0
    const tripsThisYear = this.getCurrentYearApprovedTrips()

    tripsThisYear.forEach(trip => {
      tripSpend += trip.duration * trip.destinationDetails.lodging
      tripSpend += trip.travelers * trip.destinationDetails.flights
    })

    totalSpent = tripSpend + (tripSpend * .1)

    return this.formatCost(totalSpent)
  }

  getTripsTaken() {
    const approved = this.trips.filter(trip => trip.status === 'approved')

    return approved.length
  }

  getDaysTraveled() {
    const approved = this.trips.filter(trip => trip.status === 'approved')
    const totalDays = approved.reduce((total, trip) => {
      total += trip.duration
      return total
    }, 0)

    return totalDays
  }

}

module.exports = Traveler
