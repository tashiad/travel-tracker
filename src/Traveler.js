class Traveler {
  constructor(traveler) {
    this.id = traveler.id
    this.name = traveler.name
    this.type = traveler.travelerType
    this.trips = []
  }

  getTripsThisYear() {
    return this.trips.filter(trip => trip.date.includes('2021'))
  }

  calculateTotalSpent() {
    let tripSpend = 0
    let totalSpent = 0
    const tripsThisYear = this.getTripsThisYear()

    tripsThisYear.forEach(trip => {
      tripSpend += trip.duration * trip.destinationDetails.lodging
      tripSpend += trip.travelers * trip.destinationDetails.flights
    })

    totalSpent += tripSpend + (tripSpend * .1)
    return totalSpent.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

}

module.exports = Traveler
