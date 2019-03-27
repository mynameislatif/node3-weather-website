const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?types=address&access_token=pk.eyJ1IjoibXluYW1laXNsYXRpZiIsImEiOiJjanRqcjBwcWQwMXUwNDNtamJ3cWJiOWNtIn0.niczj_-Lt9eedti4kIdn1A&limit=1'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1], 
                longitude: body.features[0].center[0], 
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode



// Geocoding

// const urlMap = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Philadelphia.json?types=address&access_token=pk.eyJ1IjoibXluYW1laXNsYXRpZiIsImEiOiJjanRqcjBwcWQwMXUwNDNtamJ3cWJiOWNtIn0.niczj_-Lt9eedti4kIdn1A&limit=1'

// request({ url: urlMap, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to location services!')
//     } else if (response.body.features.length === 0) {
//         console.log('Unable to find location. Try another search.')
//     } else {
//         const latitude = response.body.features[0].center[1]
//         const longitude = response.body.features[0].center[0]
//         console.log(latitude, longitude)
//     }
// })