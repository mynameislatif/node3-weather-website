const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/0791766451ed9d94fbffba3d6f56d2f8/' + latitude + ',' + longitude + '?units=si'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (body.error) {
            callback(body.error, undefined)
        } else {
            const temp = body.currently.temperature
            const percip = body.currently.precipProbability
            const summary = body.daily.data[0].summary

            callback(undefined, summary + ' It is currently ' + temp + ' degress out. There is a ' + percip + '% chance of rain.')
        }
    })
}

module.exports = forecast




// const url = 'https://api.darksky.net/forecast/0791766451ed9d94fbffba3d6f56d2f8/48.173783,16.329923?units=si'

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log(response.body.error);
//     } else {
//         const temp = response.body.currently.temperature
//         const percip = response.body.currently.precipProbability
    
//         console.log(response.body.daily.data[0].summary + ' It is currently ' + temp + ' degress out. There is a ' + percip + '% chance of rain.')
//     }
// })