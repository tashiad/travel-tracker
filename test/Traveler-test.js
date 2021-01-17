import chai from 'chai';
const expect = chai.expect;
import Traveler from '../src/Traveler'
import travelerData from '../src/data/Traveler-data'
import Trip from '../src/Trip'
import tripData from '../src/data/Trip-data'
import Destination from '../src/Destination'
import destinationData from '../src/data/Destination-data'

describe('Traveler', function() {
  let traveler1
  let traveler1Info
  let traveler2
  let traveler2Info

  function matchTrips(traveler) {
    tripData.forEach(trip => {
      let travelerTrip = new Trip(trip)

      if (travelerTrip.userId === traveler.id) {
        traveler.trips.push(travelerTrip)
      }
    })
  }

  function matchDestinations(traveler) {
    destinationData.forEach(location => {
      let tripDestination = new Destination(location)

      traveler.trips.forEach(trip => {
        if (trip.destinationId === tripDestination.id) {
          trip.destinationDetails = tripDestination
        }
      })
    })
  }

  beforeEach(function() {
    traveler1Info = travelerData[0]
    traveler1 = new Traveler(traveler1Info)
    traveler2Info = travelerData[1]
    traveler2 = new Traveler(traveler2Info)
  })

  it('should be a function', function() {
    expect(Traveler).to.be.a('function')
  })

  it('should have an id', function() {
    expect(traveler1.id).to.eq(1)
    expect(traveler2.id).to.eq(2)
  })

  it('should have a name', function() {
    expect(traveler1.name).to.eq('Ham Leadbeater')
    expect(traveler2.name).to.eq('Rachael Vaughten')
  })

  it('should have a type', function() {
    expect(traveler1.type).to.eq('relaxer')
    expect(traveler2.type).to.eq('thrill-seeker')
  })

  it('should start out with an empty array of trips', function() {
    expect(traveler1.trips).to.deep.equal([])
    expect(traveler2.trips).to.deep.equal([])
  })

  it('should filter trips by current year (2021)', function() {
    matchTrips(traveler1)
    matchTrips(traveler2)

    expect(traveler1.getTripsThisYear()).to.deep.equal([{
      "id": 117,
      "userId": 1,
      "destinationId": 28,
      "travelers": 3,
      "date": "2021/01/09",
      "duration": 15,
      "status": "approved",
      "suggestedActivities": []
    }])
    expect(traveler2.getTripsThisYear()).to.deep.equal([])
  })

  it('should calculate total spent for a trip in 2021, including 10% agent fee', function() {
    matchTrips(traveler1)
    matchTrips(traveler2)

    matchDestinations(traveler1)
    matchDestinations(traveler2)

    traveler1.getTripsThisYear()
    traveler2.getTripsThisYear()

    expect(traveler1.calculateTotalSpent()).to.eq('4,125')
    expect(traveler2.calculateTotalSpent()).to.eq('0')
  })
})
