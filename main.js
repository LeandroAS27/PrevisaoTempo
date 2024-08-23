const apiKey = ''; //Aqui voce coloca a sua apiKey

const iconeTempo = document.getElementById('imagem-tempo');
const temperature = document.getElementById('temperature');
const local = document.getElementById('local');
const humidity = document.getElementById('humidity')
const speedWind = document.getElementById('speed-wind') 
const Card = document.querySelector('.card')

function getData(local){
    const route = `https://api.openweathermap.org/data/2.5/weather?q=${local}&appid=${apiKey}`
    return fetch(route).then(response => response.json())
}
function handleData(e) {
    e.preventDefault()
    const value = document.getElementById('Localizacao').value
    getData(value).then(data => {
        temperature.textContent = Math.floor(data.main.temp - 273.15) + '°C'
        local.textContent = data.name
        humidity.textContent = data.main.humidity + '%'
        speedWind.textContent = data.wind.speed + ' km/h'

        const icon = data.weather[0].main.toLocaleLowerCase()
        const src = `./assets/icons/${icon}.png`
        iconeTempo.setAttribute('src', src)
    })
}
document.querySelector('form').addEventListener('submit', handleData)