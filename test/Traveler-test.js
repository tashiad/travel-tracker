import chai from 'chai';
const expect = chai.expect;
import Traveler from '../src/Traveler'
import data from '../src/data/Traveler-data'

describe('Traveler', function() {
  let traveler
  let travelerInfo

  beforeEach(function() {
    travelerInfo = data[0]
    traveler = new Traveler(travelerInfo)
  })

  it('should be a function', function() {
    expect(Traveler).to.be.a('function')
  })

  it('should have an id', function() {
    expect(traveler.id).to.eq(1)
  })

  it('should have a name', function() {
    expect(traveler.name).to.eq('Ham Leadbeater')
  })

  it('should have a type', function() {
    expect(traveler.type).to.eq('relaxer')
  })

  it('should start out with an empty array of trips', function() {
    expect(traveler.trips).to.deep.equal([])
  })

})
