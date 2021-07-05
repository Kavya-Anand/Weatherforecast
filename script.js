document.getElementById("mybtn").onclick = () => {
    let city = document.getElementById("mymin").value;
    console.log(city);
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=471509188698d22033a740a6dc988f56`).then(data => {
        return data.json()
    }).then(data2 => {
        console.log(data2)

        document.getElementById("info").innerHTML = `
        
        <ul>
       <li>city: ${data2.name} </li>
       <li>temp in Celcius:${data2.main.temp} </li>
       <li>Pressure :${data2.main.pressure} </li>
       <li>Humidity:${data2.main.humidity} </li>
       <li>description: ${data2.weather[0].description}</li>
   </ul>
        `
    }).catch(err => {
        console.log(err)
    })

}
