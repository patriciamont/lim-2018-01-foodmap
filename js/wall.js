const btnEthnic = document.getElementById('ethnic');
const btnBudget = document.getElementById('budget');
const inputdistrict = document.getElementById('search');
const btnSearch = document.getElementById('btnsearch');
let cardRest = document.querySelector('.card-columns');


let districtRest = '';
let search = '';

const data = (search) => {


  fetch('data/restaurants.json')
    .then(response =>
      response.json())
    .then(result => {

      cardRest.innerHTML = '';

      const restArray = searchRestaurants(result, search)
      showRestaurant(restArray)
      console.log(restArray);
    })


}
window.onload=()=>{data('')}

showRestaurant = (restArray) => {


  restArray.forEach(element => {

    cardRest.innerHTML +=
      `<div class="card">
<img class="card-img-top" src=${element.photo} alt="Card image cap">
<div class="card-body">
<h5 class="card-title">${element.name}</h5>
<div class="container">
  <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Más Info</button>
  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title">${element.name}</h3>
        </div>
        <div class="modal-body">
          <h6>Dirección: ${element.address}</h6>
          <h6>Horario: ${element.schedule}</h6>
          <h6 class="text-justify">Descripción: ${element.description}</h6>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Pedir Ahora</button>
        </div>
      </div>
      
    </div>
  </div>
  
</div>
</div>
</div>
`
  });

}

btnSearch.addEventListener('click', () => {

  search = inputdistrict.value;
  /* dataRest('') */

  data(search)


})

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
