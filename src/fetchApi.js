const tripErrorMessage = document.querySelector('#trip-error-message')

const fetchApi = {
  getTravelerData() {
    return fetch('http://localhost:3001/api/v1/travelers')
      .then(response => response.json())
  },

  getSingleTraveler(travelerId) {
    return fetch(`http://localhost:3001/api/v1/travelers/${travelerId}`)
      .then(response => response.json())
  },

  getTripData() {
    return fetch('http://localhost:3001/api/v1/trips')
      .then(response => response.json())
  },

  getDestinationData() {
    return fetch('http://localhost:3001/api/v1/destinations')
      .then(response => response.json())
  },

  postTripRequest(tripRequest) {
    const postFormat = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(tripRequest)
    }

    return fetch('http://localhost:3001/api/v1/trips', postFormat)
      .then(response => {
          if (!response.ok) {
            tripErrorMessage.innerText = 'Unable to request trip. Please try again later.'
          }
          return response.json()
      })
  }
}

export default fetchApi
