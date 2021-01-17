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

  function findTravelerTrips(traveler) {
    tripData.forEach(trip => {
      let newTrip = new Trip(trip)
      traveler.addMatchingTrips(newTrip)
    })
  }

  function matchTripDestinations(traveler) {
    destinationData.forEach(location => {
      let newDestination = new Destination(location)
      traveler.addMatchingDestinations(newDestination)
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

  it('should add matching traveler trips', function() {
    findTravelerTrips(traveler1)
    findTravelerTrips(traveler2)

    expect(traveler1.trips).to.deep.equal([{
      "id": 117,
      "userId": 1,
      "destinationId": 28,
      "travelers": 3,
      "date": "2021/01/09",
      "duration": 15,
      "status": "approved",
      "suggestedActivities": []
    }])
    expect(traveler2.trips[0]).to.deep.equal({
      "id": 89,
      "userId": 2,
      "destinationId": 10,
      "travelers": 5,
      "date": "2019/09/27",
      "duration": 13,
      "status": "approved",
      "suggestedActivities": []
    })
  })

  it('should add a matching destination to each traveler trip', function() {
    findTravelerTrips(traveler1)
    findTravelerTrips(traveler2)

    matchTripDestinations(traveler1)
    matchTripDestinations(traveler2)

    expect(traveler1.trips).to.deep.equal([{
      "id": 117,
      "userId": 1,
      "destinationId": 28,
      "travelers": 3,
      "date": "2021/01/09",
      "duration": 15,
      "status": "approved",
      "suggestedActivities": [],
      "destinationDetails": {
        "id": 28,
        "name": "San Juan, Puerto Rico",
        "lodging": 70,
        "flights": 900,
        "image": "https://images.unsplash.com/photo-1580237541049-2d715a09486e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2090&q=80",
        "alt": "white and brown concrete buildings near sea under white clouds during daytime"
      }
    }])
    expect(traveler2.trips[0]).to.deep.equal({
      "id": 89,
      "userId": 2,
      "destinationId": 10,
      "travelers": 5,
      "date": "2019/09/27",
      "duration": 13,
      "status": "approved",
      "suggestedActivities": [],
      "destinationDetails": {
        "id": 10,
        "name": "Toronto, Canada",
        "lodging": 90,
        "flights": 450,
        "image": "https://images.unsplash.com/photo-1535776142635-8fa180c46af7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2756&q=80",
        "alt": "beautiful travel destination"
      }
    })
  })

  it('should filter trips by current year (2021)', function() {
    findTravelerTrips(traveler1)
    findTravelerTrips(traveler2)

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
    findTravelerTrips(traveler1)
    findTravelerTrips(traveler2)

    matchTripDestinations(traveler1)
    matchTripDestinations(traveler2)

    traveler1.getTripsThisYear()
    traveler2.getTripsThisYear()

    expect(traveler1.calculateTotalSpent()).to.eq('4,125')
    expect(traveler2.calculateTotalSpent()).to.eq('0')
  })
})
