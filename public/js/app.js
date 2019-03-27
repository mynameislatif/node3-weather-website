// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data) => {
//         console.log(data)
//     })
// })

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const itemLocation = document.querySelector('li#item-location')
const itemForecast = document.querySelector('li#item-forecast')

itemLocation.textContent = ''
itemForecast.textForecast = ''

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    itemLocation.textContent = 'Fetching the weather...'
    itemForecast.textContent = ''

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                itemLocation.textContent = data.error

                return console.log(data.error)
            }

            itemLocation.textContent = data.location
            itemForecast.textContent = data.forecast
            
            console.log(data.location)
            console.log(data.forecast)
        })
    })
})