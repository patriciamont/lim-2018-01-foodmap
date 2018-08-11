

const btnEthnic = document.getElementById('ethnic');
const btnBudget = document.getElementById('budget');
let cardRest = document.querySelector('.card-columns');


fetch('../data/restaurants.json')
    .then(response =>
        response.json())
    .then(result => {

        result.forEach(element => {
            /*  console.log(element.budget); */

        });

        let listRestaurant = result;

        listRestaurant.forEach(element => {
            /* console.log(element.budget);  */
            showRestaurant(element.name, element.budget, element.ethnic,element.photo)
        })
    })

showRestaurant = (name, budget, ethnic,photo) => {

    cardRest.innerHTML +=
        `<div class="card">
    <img class="card-img-top" src="${photo}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${name}</h5>
    
  </div>
</div>`


}
    /* const maxiCard=document.createElement("div");
maxiCard.className="container mt-1"
maxiCard.src="``"
maxiCard.alt="Card imagen cap"
const cardBody=document.createElement("div");
cardBody.className= */




/* <img class="card-img-top" src="..." alt="Card image cap"> */










/* console.log(value);
listRestaurant.forEach(function (element) {
    console.log(element);

}); */
/* listEconomico=listRestaurant.filter(economico=>"economico"==listRestaurant) */




/* btnEthnic.addEventListener('click', () => {
    listEthnic();
}) */







/* function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
      });
} */

