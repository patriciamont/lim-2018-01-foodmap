

const btnEthnic = document.getElementById('ethnic');
const btnBudget = document.getElementById('budget');
const inputdistrict = document.getElementById('search');
const btnSearch = document.getElementById('btnsearch');
let cardRest = document.querySelector('.card-columns');
const idModal=document.getElementById('modal');

let districtRest = '';
let search = '';



const data = (search) => {
    fetch('../data/restaurants.json')
        .then(response =>
            response.json())
        .then(result => {

            const restArray = searchRestaurants(result, search)
            showRestaurant(restArray)
            console.log(restArray);
        })


}


data('');

showRestaurant = (restArray) => {
    restArray.forEach(element => {

        cardRest.innerHTML +=
            `<div class="card">
<img class="card-img-top" src=${element.photo} alt="Card image cap">
<div class="card-body">
<h5 class="card-title">${element.name}</h5>
</div>
</div>`
/* 
`<div class="modal" tabindex="-1" role="dialog">
<div class="modal-dialog" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title">Modal title</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>${element.name}</p>
    </div>
    <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-dismiss="modal">Pedir ahora</button>
    </div>
  </div>
</div>
</div>` */

    });

}

/* searchRestaurants=(district,search)=>{
    console.log('buscar restaurante')
}
 */

btnSearch.addEventListener('click', () => {
    search = inputdistrict.value;

    searchRestaurants(districtRest, search)


})
idModal.addEventListener('click',(e)=>{
    if(event.target.nodeName==="div"){

        
    }
})









/* function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
      });
} */

