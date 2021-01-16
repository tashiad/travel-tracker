import chai from 'chai';
const expect = chai.expect;
import Traveler from '../src/Traveler'
import travelerData from '../src/data/Traveler-data'

describe('Traveler', function() {
  let traveler1
  let traveler1Info
  let traveler2
  let traveler2Info

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

})
