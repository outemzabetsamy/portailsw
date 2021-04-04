
    
    var act= document.getElementById("act");
    var hotel=document.getElementById("hotel");
    var resto=document.getElementById("resto");
    var lieux=document.getElementById("lieux");
    var agences=document.getElementById("agences");
    var taxi=document.getElementById("taxi");
    
    act.addEventListener('click',getActivities);
    hotel.addEventListener('click',getHotels);
    resto.addEventListener('click',getResto);
    lieux.addEventListener('click',getLieux);
    agences.addEventListener('click',getAgences);
    taxi.addEventListener('click',getTaxis);

var titre=document.getElementById("titre");
function getActivities(){
    var bodd=document.getElementById("r");
    bodd.innerHTML="";
    titre.innerHTML="Activitées";
    var retrievedImage;
    var activitiesData;
axios.get('https://activity-service-heroku.herokuapp.com/api/activites/all').then(actResp =>{
    console.log(actResp.data)
    activitiesData=actResp.data;
    activitiesData.forEach(e=>{
        axios.get('https://image-service-heroku.herokuapp.com/image/get/' +e.photoActivite)
         .then(resp =>{
             console.log(resp.data)
             retrievedImage='data:image/jpeg;base64,'+resp.data.picByte;
             console.log("salutttt");
            // let bodd=document.getElementById("r");
             console.log("1");
             let card=document.createElement("div");
             console.log("dayi1");
             card.classList.add("card");
             card.classList.add("mb-3");
             console.log("dayi2");
             card.style="max-width: 540px;";
             console.log("dayi3");
             console.log("2");
             let cardRowImage=document.createElement("div");
             //cardRowImage.classList.add("row");
             cardRowImage.classList.add("no-gutters");
             console.log("3");
             let cardContainerImage=document.createElement("div");
             cardContainerImage.classList.add("col-md-12");
             console.log("4");
             let img=document.createElement("img");
             img.style.width="100%";
             img.style.height="250px";
             img.classList.add("bd-placeholder-img");
             img.src=retrievedImage;
             console.log("5");
             cardContainerImage.appendChild(img);
             cardRowImage.appendChild(cardContainerImage);
             console.log("6");
             let cardDroite=document.createElement("div");
             cardDroite.classList.add("col-md-12");
             console.log("7");
             let cardBody=document.createElement("div");
             cardBody.classList.add("card-body");
             console.log("8");
             let titleH5=document.createElement("h5");
             titleH5.classList.add("card-title")
             titleH5.innerHTML=e.nomActivite;
             console.log("9");
             let descriptionP=document.createElement("p");
             descriptionP.classList.add("card-text");
             descriptionP.innerText=e.descriptionActivite
             console.log("10");
             let telP=document.createElement("p");
             telP.classList.add("card-text");
             telP.innerText=e.numeroTelephone;
             cardBody.appendChild(titleH5);
             cardBody.appendChild(descriptionP);
             cardBody.appendChild(telP);
             cardDroite.appendChild(cardBody);
             card.appendChild(cardRowImage);
             card.appendChild(cardDroite);
             bodd.appendChild(card)
             console.log("11");
         }).catch(error=>{console.log(error)})
     
         
    
     });
}).catch(error =>{console.log(error)});
}
//hotels

function getHotels(){
    var bodd=document.getElementById("r");
    bodd.innerHTML="";
    titre.innerHTML="Hotels";
    var retrievedImage;
    var activitiesData;
axios.get('https://hotel-service-swapi.herokuapp.com/api/hotells').then(actResp =>{
    console.log(actResp.data)
    activitiesData=actResp.data;
    activitiesData.data.forEach(e=>{
        axios.get('https://image-service-heroku.herokuapp.com/image/get/' +e.PhotoHotel)
         .then(resp =>{
             console.log(resp.data)
             retrievedImage='data:image/jpeg;base64,'+resp.data.picByte;
             console.log("salutttt");
            // let bodd=document.getElementById("r");
             console.log("1");
             let card=document.createElement("div");
             console.log("dayi1");
             card.classList.add("card");
             card.classList.add("mb-3");
             console.log("dayi2");
             card.style="max-width: 540px;";
             console.log("dayi3");
             console.log("2");
             let cardRowImage=document.createElement("div");
             //cardRowImage.classList.add("row");
             cardRowImage.classList.add("no-gutters");
             console.log("3");
             let cardContainerImage=document.createElement("div");
             cardContainerImage.classList.add("col-md-12");
             console.log("4");
             let img=document.createElement("img");
             img.style.width="100%";
             img.style.height="250px";
             img.classList.add("bd-placeholder-img");
             img.src=retrievedImage;
             console.log("5");
             cardContainerImage.appendChild(img);
             cardRowImage.appendChild(cardContainerImage);
             console.log("6");
             let cardDroite=document.createElement("div");
             cardDroite.classList.add("col-md-12");
             console.log("7");
             let cardBody=document.createElement("div");
             cardBody.classList.add("card-body");
             console.log("8");
             let titleH5=document.createElement("h5");
             titleH5.classList.add("card-title")
             titleH5.innerHTML=e.NomHotel;
             console.log("9");
             let descriptionP=document.createElement("div");
             descriptionP.classList.add("card-text");
             descriptionP.innerText="Adresse: "+e.AdresseHotel
             console.log("10");
             let telP=document.createElement("p");
             telP.classList.add("card-text");
             telP.innerText="Site web: "+e.SiteWebHotel;

             let nbEtoile=document.createElement("p");
             nbEtoile.classList.add("card-text");
             nbEtoile.innerText="Nombre d'etoiles: "+e.nbEtoiles;
             cardBody.appendChild(titleH5);
             cardBody.appendChild(descriptionP);
             cardBody.appendChild(telP);
             cardBody.appendChild(nbEtoile);
             cardDroite.appendChild(cardBody);
             card.appendChild(cardRowImage);
             card.appendChild(cardDroite);
             bodd.appendChild(card)
             console.log("11");
         }).catch(error=>{console.log(error)})
     
         
    
     });
}).catch(error =>{console.log(error)});
}

//restoo
function getResto(){
    var bodd=document.getElementById("r");
    bodd.innerHTML="";
    titre.innerHTML="Restaurants";
    var retrievedImage;
    var activitiesData;
axios.get('https://apirestosw.herokuapp.com/users').then(actResp =>{
    console.log(actResp.data)
    activitiesData=actResp.data;
    activitiesData.forEach(e=>{
        axios.get('https://image-service-heroku.herokuapp.com/image/get/' +e.image)
         .then(resp =>{
             console.log(resp.data)
             retrievedImage='data:image/jpeg;base64,'+resp.data.picByte;
             console.log("salutttt");
            // let bodd=document.getElementById("r");
             console.log("1");
             let card=document.createElement("div");
             console.log("dayi1");
             card.classList.add("card");
             card.classList.add("mb-3");
             console.log("dayi2");
             card.style="max-width: 540px;";
             console.log("dayi3");
             console.log("2");
             let cardRowImage=document.createElement("div");
             //cardRowImage.classList.add("row");
             cardRowImage.classList.add("no-gutters");
             console.log("3");
             let cardContainerImage=document.createElement("div");
             cardContainerImage.classList.add("col-md-12");
             console.log("4");
             let img=document.createElement("img");
             img.style.width="100%";
             img.style.height="250px";
             img.classList.add("bd-placeholder-img");
             img.src=retrievedImage;
             console.log("5");
             cardContainerImage.appendChild(img);
             cardRowImage.appendChild(cardContainerImage);
             console.log("6");
             let cardDroite=document.createElement("div");
             cardDroite.classList.add("col-md-12");
             console.log("7");
             let cardBody=document.createElement("div");
             cardBody.classList.add("card-body");
             console.log("8");
             let titleH5=document.createElement("h5");
             titleH5.classList.add("card-title")
             titleH5.innerHTML=e.Nom;
             console.log("9");
             let descriptionP=document.createElement("div");
             descriptionP.classList.add("card-text");
             descriptionP.innerText="Adresse: "+e.Adresse+ " "+e.Commune
             console.log("10");
             let telP=document.createElement("p");
             telP.classList.add("card-text");
             telP.innerText="Contact: "+e.Contact;

             let nbEtoile=document.createElement("p");
             nbEtoile.classList.add("card-text");
             nbEtoile.innerText="Disponibilites: "+e.Disponibilites;
             cardBody.appendChild(titleH5);
             cardBody.appendChild(descriptionP);
             cardBody.appendChild(telP);
             cardBody.appendChild(nbEtoile);
             cardDroite.appendChild(cardBody);
             card.appendChild(cardRowImage);
             card.appendChild(cardDroite);
             bodd.appendChild(card)
             console.log("11");
         }).catch(error=>{console.log(error)})
     
         
    
     });
}).catch(error =>{console.log(error)});
}

//lieux
function getLieux(){
    var bodd=document.getElementById("r");
    bodd.innerHTML="";
    titre.innerHTML="Lieux touristiques";
    var retrievedImage;
    var activitiesData;
axios.get('https://testapilieux.azurewebsites.net/api/lieuxs').then(actResp =>{
    console.log(actResp.data)
    activitiesData=actResp.data;
    activitiesData.forEach(e=>{
        axios.get('https://image-service-heroku.herokuapp.com/image/get/' +e.photo)
         .then(resp =>{
             console.log(resp.data)
             retrievedImage='data:image/jpeg;base64,'+resp.data.picByte;
             console.log("salutttt");
            // let bodd=document.getElementById("r");
             console.log("1");
             let card=document.createElement("div");
             console.log("dayi1");
             card.classList.add("card");
             card.classList.add("mb-3");
             console.log("dayi2");
             card.style="max-width: 540px;";
             console.log("dayi3");
             console.log("2");
             let cardRowImage=document.createElement("div");
             //cardRowImage.classList.add("row");
             cardRowImage.classList.add("no-gutters");
             console.log("3");
             let cardContainerImage=document.createElement("div");
             cardContainerImage.classList.add("col-md-12");
             console.log("4");
             let img=document.createElement("img");
             img.style.width="100%";
             img.style.height="250px";
             img.classList.add("bd-placeholder-img");
             img.src=retrievedImage;
             console.log("5");
             cardContainerImage.appendChild(img);
             cardRowImage.appendChild(cardContainerImage);
             console.log("6");
             let cardDroite=document.createElement("div");
             cardDroite.classList.add("col-md-12");
             console.log("7");
             let cardBody=document.createElement("div");
             cardBody.classList.add("card-body");
             console.log("8");
             let titleH5=document.createElement("h5");
             titleH5.classList.add("card-title")
             titleH5.innerHTML=e.name;
             console.log("9");
             let descriptionP=document.createElement("div");
             descriptionP.classList.add("card-text");
             descriptionP.innerText="Adresse: "+e.adresse
             console.log("10");
             


             cardBody.appendChild(titleH5);
             cardBody.appendChild(descriptionP);
             
             cardDroite.appendChild(cardBody);
             card.appendChild(cardRowImage);
             card.appendChild(cardDroite);
             bodd.appendChild(card)
             console.log("11");
         }).catch(error=>{console.log(error)})
     
         
    
     });
}).catch(error =>{console.log(error)});
}
/// agences location
function getAgences(){
    var bodd=document.getElementById("r");
    bodd.innerHTML="";
    
    titre.innerHTML="Agence de location de voitures";
var soapReq=`<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">
<Body>
    <GetAgenceLocation xmlns="http://tempuri.org/"/>
</Body>
</Envelope>`;
var soapResult;
var config={
    headers: {'Content-type':'text/xml'}
};

axios.post('https://wslocationapi.azurewebsites.net/WebService1.asmx', soapReq,config).then(response=>{
    console.log(response);
    soapResult=response.data;
    var parser,xmlDoc;
parser=new DOMParser();
xmlDoc=parser.parseFromString(soapResult,"text/xml");
console.log(xmlDoc.getElementsByTagName("voiture"));
var agences=xmlDoc.getElementsByTagName("voiture");
console.log(agences[0].childNodes[1].innerHTML)
var i=0;
while(i<=agences.length){
    console.log(agences[0].childNodes[1].innerHTML);
    //ooooooooooOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
    console.log("1");
    let card=document.createElement("div");
    console.log("dayi1");
    card.classList.add("card");
    card.classList.add("mb-3");
    console.log("dayi2");
    card.style="max-width: 540px;";
    console.log("dayi3");
    console.log("2");
    let cardRowImage=document.createElement("div");
    //cardRowImage.classList.add("row");
    cardRowImage.classList.add("no-gutters");
    console.log("3");
    let cardContainerImage=document.createElement("div");
    cardContainerImage.classList.add("col-md-12");
    console.log("4");
    let img=document.createElement("img");
    img.style.width="100%";
    img.style.height="250px";
    img.classList.add("bd-placeholder-img");
    ///////////////////////////
    var retr='data:image/jpeg;base64,'+agences[i].childNodes[5].innerHTML;
    img.src=retr;
    //////////////////////////
    
    console.log("5");
    cardContainerImage.appendChild(img);
    cardRowImage.appendChild(cardContainerImage);
    console.log("6");
    let cardDroite=document.createElement("div");
    cardDroite.classList.add("col-md-12");
    console.log("7");
    let cardBody=document.createElement("div");
    cardBody.classList.add("card-body");
    console.log("8");
    let titleH5=document.createElement("h5");
    titleH5.classList.add("card-title")
    titleH5.innerHTML=agences[i].childNodes[1].innerHTML;
    console.log("9");
    let descriptionP=document.createElement("div");
    descriptionP.classList.add("card-text");
    descriptionP.innerText="Adresse: "+agences[i].childNodes[2].innerHTML
    console.log("10");
    let telP=document.createElement("p");
    telP.classList.add("card-text");
    telP.innerText="Numero telephone: "+agences[i].childNodes[3].innerHTML;

    let nbEtoile=document.createElement("p");
    nbEtoile.classList.add("card-text");
    nbEtoile.innerText="Adresse Email: "+agences[i].childNodes[4].innerHTML;
    cardBody.appendChild(titleH5);
    cardBody.appendChild(descriptionP);
    cardBody.appendChild(telP);
    cardBody.appendChild(nbEtoile);
    cardDroite.appendChild(cardBody);
    card.appendChild(cardRowImage);
    card.appendChild(cardDroite);
    bodd.appendChild(card)
    console.log("11");
   // console.log(agences[i].childNodes.adresse);
    i=i+1;
}

}).catch(error => {
    console.log("errorr"+error)
});
}

/// TAXIIIIIIIIIIIIIIIIIIIIII

function getTaxis(){
    var bodd=document.getElementById("r");
    bodd.innerHTML="";
    titre.innerHTML="Station taxi de BEJAIA";
var soapReq=`<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">
<Body>
    <GetStationTaxi xmlns="http://tempuri.org/"/>
</Body>
</Envelope>`;
var soapResult;
var config={
    headers: {'Content-type':'text/xml'}
};

axios.post('https://wslocationapi.azurewebsites.net/WebService1.asmx', soapReq,config).then(response=>{
    console.log(response);
    soapResult=response.data;
    var parser,xmlDoc;
parser=new DOMParser();
xmlDoc=parser.parseFromString(soapResult,"text/xml");
console.log(xmlDoc.getElementsByTagName("station_taxi"));
var agences=xmlDoc.getElementsByTagName("station_taxi");
console.log(agences[0].childNodes[1].innerHTML)
var i=0;
while(i<=agences.length){
    console.log(agences[0].childNodes[1].innerHTML);
    //ooooooooooOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
    console.log("1");
    let card=document.createElement("div");
    console.log("dayi1");
    card.classList.add("card");
    card.classList.add("mb-3");
    console.log("dayi2");
    card.style="max-width: 540px;";
    console.log("dayi3");
    console.log("2");
    let cardRowImage=document.createElement("div");
    //cardRowImage.classList.add("row");
    cardRowImage.classList.add("no-gutters");
    console.log("3");
    let cardContainerImage=document.createElement("div");
    cardContainerImage.classList.add("col-md-12");
    console.log("4");
    let img=document.createElement("img");
    img.style.width="100%";
    img.style.height="250px";
    img.classList.add("bd-placeholder-img");
    ///////////////////////////
    //var retr='data:image/jpeg;base64,'+agences[i].childNodes[5].innerHTML;
    //img.src=retr;
    img.src="images/taxi.png";
    //////////////////////////
    
    console.log("5");
    cardContainerImage.appendChild(img);
    cardRowImage.appendChild(cardContainerImage);
    console.log("6");
    let cardDroite=document.createElement("div");
    cardDroite.classList.add("col-md-12");
    console.log("7");
    let cardBody=document.createElement("div");
    cardBody.classList.add("card-body");
    console.log("8");
    let titleH5=document.createElement("h5");
    titleH5.classList.add("card-title")
    titleH5.innerHTML="Emplacement: "+agences[i].childNodes[1].innerHTML;
    console.log("9");
    
    console.log("10");
    
   
    cardBody.appendChild(titleH5);
    
    cardDroite.appendChild(cardBody);
    card.appendChild(cardRowImage);
    card.appendChild(cardDroite);
    bodd.appendChild(card)
    console.log("11");
   // console.log(agences[i].childNodes.adresse);
    i=i+1;
}

}).catch(error => {
    console.log("errorr"+error)
});
}
