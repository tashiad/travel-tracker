import chai from 'chai';
const expect = chai.expect;
import Trip from '../src/Trip'
import tripData from '../src/data/Trip-data'

describe('Trip', function() {
  let trip1
  let trip1Info
  let trip2
  let trip2Info

  beforeEach(function() {
    trip1Info = tripData[0]
    trip1 = new Trip(trip1Info)
    trip2Info = tripData[1]
    trip2 = new Trip(trip2Info)
  })

  it('should be a function', function() {
    expect(Trip).to.be.a('function')
  })

  it('should have an id', function() {
    expect(trip1.id).to.eq(117)
    expect(trip2.id).to.eq(89)
  })

  it('should have a user id for the trip', function() {
    expect(trip1.userId).to.eq(1)
    expect(trip2.userId).to.eq(2)
  })

  it('should have a destination id for the trip', function() {
    expect(trip1.destinationId).to.eq(28)
    expect(trip2.destinationId).to.eq(10)
  })

  it('should have a number of travelers', function() {
    expect(trip1.travelers).to.eq(3)
    expect(trip2.travelers).to.eq(5)
  })

  it('should have a start date', function() {
    expect(trip1.date).to.eq('2021/01/09')
    expect(trip2.date).to.eq('2019/09/27')
  })

  it('should have a duration', function() {
    expect(trip1.duration).to.eq(15)
    expect(trip2.duration).to.eq(13)
  })

  it('should have a status', function() {
    expect(trip1.status).to.eq('approved')
    expect(trip2.status).to.eq('approved')
  })

  it('should should start out with no suggested activities', function() {
    expect(trip1.suggestedActivities).to.deep.equal([])
    expect(trip2.suggestedActivities).to.deep.equal([])
  })

})
