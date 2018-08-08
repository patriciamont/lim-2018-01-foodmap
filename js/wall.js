const btnSpecialty=document.getElementById('specialty');
const btnEthnic=document.getElementById('ethnic');
const btnBudget=document.getElementById('budget');



const listSpecialty=()=>{
fetch('../data/restaurants.json')
.then(response=>
response.json()).then(result=>{
    console.log(result)
})

}




btnSpecialty.addEventListener('click',()=>{
    listSpecialty();
})







/* function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
      });
} */
/* 
function initMap(){
    const ubicacion=new Localizacion(()=>{
        const options={
            center:{
                lat:ubicacion.latitude,
                lng:ubicacion.longitude
            },
            zoom:15
        }
        var map=document.getElementById('map');
        const mapa=new google.maps.Map(map,options);
    });
}   */


