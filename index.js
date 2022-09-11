
let inputvalue = document.querySelector("#inpu");
let tempvalue = document.querySelector("#temp");
let namevalue = document.querySelector("#name");
let imginsert = document.querySelector("img");
let des = document.querySelector("#descripition");
let des1 = document.querySelector("#descripition1");
// let ma = document.querySelector("#abhi");
//let des=document.querySelector("#");
function sumbit(response, status) {
    if (inputvalue.value == "") {
        alert("please valid a city  ")
    }
    else {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=4508e013f5eae1620da6a25fb515ee50')

            .then(response => response.json())
            .then(data => {
                let icon = data.weather[0].icon;
                let abh= data.weather[0].main;
                let des_n = data.weather[0].description;
                //let url = "http://openweathermap.org/img/w/+" + icon + ".png"
                tempvalue.innerHTML = (data.main.temp-273+"°C");
                namevalue.innerHTML = (data.name);
                imginsert.src = "http://openweathermap.org/img/w/" + icon + ".png"
                // ma.innerhtml =des_n;
                des.innerHTML =des_n;
                des1.innerHTML =abh;
                    console.log(data)
                console.log(abh)
            })

    }
}
