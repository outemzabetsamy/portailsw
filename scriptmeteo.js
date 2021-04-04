/*
let loc =document.getElementById("location");
let tempicon=document.getElementById("temp-icon");
let tempvalue=document.getElementById("temp-value");
let climate =document.getElementById("climate");
*/
let iconfile;
const searchInput=document.getElementById("search-input");
const searchButton=document.getElementById("search-button");

searchButton.addEventListener('click', (e)=>
{

e.preventDefault();
getWeather(searchInput.value);
searchInput.value='';


});

var week=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var i=0;
var j=0;
const getWeather=async (city)=>
{
    while(i<5){
        console.log(i)
    try{
        
        const response= await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=2bcafe7af7737417d4860e466b67e0c9`,
   
            {mode: 'cors'}
        );

        const weatherData= await response.json();
        console.log("city name");
        console.log(weatherData.city.name);
        console.log("feels like");
        console.log(weatherData.list[j].main.feels_like);
        console.log("id and main");
        console.log(weatherData.list[j].weather[0].id+" "+weatherData.list[j].weather[0].main);
        console.log("datee");
        let d=new Date(weatherData.list[j].dt_txt);
        console.log(d);
        console.log(weatherData);
       // let bod=document.getElementsByTagName("body")[0];
        let bod=document.getElementById("weather_id");
        let divmain=document.createElement('main');
        divmain.id="app-container"+i;
        divmain.classList.add("app-container-class");
        let divlocation=document.createElement('div');
        divlocation.id="location"+i;
        divlocation.classList.add("location-class");
        console.log("11111111111111111111111111111");
        let divtemp=document.createElement("div");
        divtemp.id="temp"+i;
        divtemp.classList.add("temp-class");
        let img=document.createElement("img");
        img.id="temp-icon"+i;
        
        img.classList.add("temp-icon-class");
        img.setAttribute("src","");
        let span1=document.createElement("span");
        span1.id="temp-value"+i;
        span1.classList.add("temp-value-class");
        let span2=document.createElement("span");
        span1.id="temp-unit"+i;
        span1.classList.add("temp-unit-class");
        let span2text= document.createTextNode("°C");
        span2.style.color="white";
        span2.appendChild(span2text);
        
        
        divtemp.appendChild(img);
        divtemp.appendChild(span1);
        divtemp.appendChild(span2);
        
        let divclimate=document.createElement("div");
        divclimate.id="climate"+i;
        divclimate.classList.add("climate-class");
        const dayy=document.createElement("div");
        dayy.classList.add("climate-class");
        const daytext=document.createTextNode(week[d.getDay()]);
        dayy.appendChild(daytext);
        
        divmain.appendChild(dayy)
        divmain.appendChild(divlocation);
        
        divmain.appendChild(divtemp);
        divmain.appendChild(divclimate);
        
        
        bod.appendChild(divmain);
        console.log("222222222222222222222222");

        
        const{name}=weatherData.city;
        const{feels_like}=weatherData.list[j].main;
        const{id,main}=weatherData.list[j].weather[0];
        divlocation.textContent=name;
        divclimate.textContent=main;
        span1.textContent=Math.round(feels_like-273);
        console.log("333333333333333333333333333333");
        console.log(id);
        if(id<300 && id>200)
        {
            document.getElementById("temp-icon"+i).setAttribute("src","./icons/thunderstorm.svg");
           //img.src="./icons/thunderstorm.svg"
        }
       else  if(id<400 && id>300)
        {
            document.getElementById("temp-icon"+i).setAttribute("src","./icons/cloud-solid.svg");
            //img.src="./icons/cloud-solid.svg"
        }
       else if(id<600 && id>=500)
        {
            document.getElementById("temp-icon"+i).setAttribute("src","./icons/rain.svg");
            //img.src="./icons/rain.svg"
        }
       else  if(id<700 && id>600)
        {
            document.getElementById("temp-icon"+i).setAttribute("src","./icons/snow.svg");
            //img.src="./icons/snow.svg"
        }
       else  if(id<800 && id>700)
        {
            console.log("44444444444444444");
            document.getElementById("temp-icon"+i).setAttribute("src","./icons/clouds.svg");
           // img.src="./icons/clouds.svg"
        }
         else if(id>=800)
        {
            document.getElementById("temp-icon"+i).setAttribute("src","./icons/clouds-and-sun.svg");
            //img.src="./icons/clouds-and-sun.svg"
        }

        i=i+1;
        j=j+8;


   
    }
catch(error)
{
    console.log("there is an error");
    alert('city not found');
}

    }



};














window.addEventListener("load" ,()=>{

let long;
let lat;

if(navigator.geolocation)
{

    navigator.geolocation.getCurrentPosition((position)=>
    {

   
    
    long=position.coords.longitude;
    lat=position.coords.latitude;
    const proxy="https://cors-anywhere.herokuapp.com/";

        const api=`${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=dab3af44de7d24ae7ff86549334e45bd     `

        fetch(api).then((response)=>{

            return response.json();


        })

        .then (data =>
            {

                    const{name}=data;
                    const{feels_like}=data.main;
                    const{id,main}=data.weather[0];


                    loc.textContent=name;
                    climate.textContent=main;
                    tempvalue.textContent=Math.round(feels_like-273);
                    if(id<300 && id>200)
                    {
                        tempicon.src="./icons/thunderstorm.svg"
                    }
                   else  if(id<400 && id>300)
                    {
                        tempicon.src="./icons/cloud-solid.svg"
                    }
                   else if(id<600&& id>500)
                    {
                        tempicon.src="./icons/rain.svg"
                    }
                   else  if(id<700 && id>600)
                    {
                        tempicon.src="./icons/snow.svg"
                    }
                   else  if(id<800 && id>700)
                    {
                        tempicon.src="./icons/clouds.svg"
                    }
                     else if(id==800)
                    {
                        tempicon.src="./icons/clouds-and-sun.svg"
                    }





                    console.log(data);


            })



}
    
    
    
    )}


})
