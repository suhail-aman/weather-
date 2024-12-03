const apiKey="55df5a2285d2aae71cabe090fff8c7fa"
const apiUrl="https://api.openweathermap.org/data/2.5/weather?q="
const searchBox=document.querySelector('.search input')
const searchBtn=document.querySelector('.search button')

async function checkWeather(city) {
   let url=apiUrl+city+`&appid=${apiKey}`+"&units=metric"
   const response=await fetch(url)
   var data=await response.json()
   
   document.querySelector('.city').innerHTML=data.name
   document.querySelector('.temp').innerHTML=Math.round(data.main.temp)+'°C'
   document.querySelector('.humidity').innerHTML=data.main.humidity+'%'
   document.querySelector('.wind').innerHTML=data.wind.speed+'km/h'
}
searchBtn.addEventListener('click',function(){
   checkWeather(searchBox.value);
})
