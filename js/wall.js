alert('ya estas en wall')

const btnEthnic = document.getElementById('ethnic');
const btnBudget = document.getElementById('budget');


fetch('../data/restaurants.json')
    .then(response =>
        response.json())
    .then(result => {
        console.log(result[0].name);
        let listRestaurant = result;
        console.log(listRestaurant);
    })

    /* listEconomico=listRestaurant.filter(economico=>"economico"==listRestaurant) */




btnEthnic.addEventListener('click', () => {
    listEthnic();
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


