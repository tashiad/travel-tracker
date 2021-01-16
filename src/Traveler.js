class Traveler {
  constructor(traveler) {
    this.id = traveler.id
    this.name = traveler.name
    this.type = traveler.travelerType
    this.trips = []
  }

  calculateTotalSpent() {
    let tripSpend = 0
    let totalSpent = 0

    this.trips.forEach(trip => {
      tripSpend += trip.duration * trip.destinationDetails.lodging
      tripSpend += trip.travelers * trip.destinationDetails.flights
    })

    totalSpent += tripSpend + (tripSpend * .1)
    return totalSpent
  }

}

module.exports = Traveler
