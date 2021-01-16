import chai from 'chai';
const expect = chai.expect;
import Destination from '../src/Destination'
import destinationData from '../src/data/Destination-data'

describe('Destination', function() {
  let destination1
  let destination1Info
  let destination2
  let destination2Info

  beforeEach(function() {
    destination1Info = destinationData[0]
    destination1 = new Destination(destination1Info)
    destination2Info = destinationData[1]
    destination2 = new Destination(destination2Info)
  })

  it('should be a function', function() {
    expect(Destination).to.be.a('function')
  })

  it('should have an id', function() {
    expect(destination1.id).to.eq(28)
    expect(destination2.id).to.eq(10)
  })

  it('should have a name', function() {
    expect(destination1.name).to.eq('San Juan, Puerto Rico')
    expect(destination2.name).to.eq('Toronto, Canada')
  })

  it('should have an estimated lodging cost per day', function() {
    expect(destination1.lodging).to.eq(70)
    expect(destination2.lodging).to.eq(90)
  })

  it('should have an estimated flight cost per person', function() {
    expect(destination1.flights).to.eq(900)
    expect(destination2.flights).to.eq(450)
  })

  it('should have an image', function() {
    expect(destination1.image).to.eq('https://images.unsplash.com/photo-1580237541049-2d715a09486e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2090&q=80')
    expect(destination2.image).to.eq('https://images.unsplash.com/photo-1535776142635-8fa180c46af7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2756&q=80')
  })

  it('should have an alt tag, or a default if there isnt one', function() {
    expect(destination1.alt).to.eq('white and brown concrete buildings near sea under white clouds during daytime')
    expect(destination2.alt).to.eq('beautiful travel destination')
  })

})
