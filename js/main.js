'use strict';



//Crear la variable catList que es la clase list que sería el contenedor padre
const catList = document.querySelector('.js-list');
const inputSearchDesc = document.querySelector('.js_in_search_desc');
const descrSearchText = inputSearchDesc.value;
const messageFound = document.querySelector('.js-message');
const searchButton = document.querySelector('.js-search-button');



let html = ""

const kittenDataList = [

  {
    image: "https://dev.adalab.es/gato-siames.webp",
    name: "Anastacio",
    desc: `Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos
    hace 500 años, donde tuvo su origen muy posiblemente.`,
    breed: `Siamés `
  },

  {
    image: "https://dev.adalab.es/sphynx-gato.webp",
    name: "Fiona",
    desc: ` Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
    hasta con pinta de alienígena han llegado a definir a esta raza
    gatuna que se caracteriza por la «ausencia» de pelo.`,
    breed: " "
  },

  {
    image: "https://dev.adalab.es/maine-coon-cat.webp",
    name: "Cielo",
    desc: `Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad.
    Sus ojos son grandes y las orejas resultan largas y en punta.`,
    breed: " "
  }
]


//Crear items dentro de la variable catList
function renderKittenList(kittenDataList) {

  //Vaciamos el innerHTML del <ul> de la página.
  catList.innerHTML = '';
  //Iteramos sobre el listado de gatitos
  for (const kitten of kittenDataList) {
    catList.innerHTML += renderKitten(kitten);
  }
}

renderKittenList(kittenDataList);
/*catList.innerHTML = renderKitten(kittenDataList[0]) + renderKitten(kittenDataList[1]) + renderKitten(kittenDataList[2]);*/



//crear nuevas variables que obtengan el section ya impreso

const kittenItem1 = document.querySelector('.js-kit1');
const kittenItem2 = document.querySelector('.js-kit2');
const kittenItem3 = document.querySelector('.js-kit3');



//Función manejadora para filtrar gatitos
const handleFilterKitten = (event) => {

  event.preventDefault();

  const descrSearchText = inputSearchDesc.value;

  catList.innerHTML = '';


  for (const kitten of kittenDataList) {

    //Comprueba si cada gatito contiene la descripción
    //Si la contiene pintamos un gatito
    //utilizando la función renderKitten(kittenItem)
    if (kitten.desc.includes(descrSearchText)) {
      catList.innerHTML += renderKitten(kitten);
    }

  }


  /*if (kittenDataList[0].desc.includes(inputSearchDesc.value)) {

    catList.innerHTML += renderKitten(kittenDataList[0]);
  }

  if (kittenDataList[1].desc.includes(inputSearchDesc.value)) {

    catList.innerHTML += renderKitten(kittenDataList[1]);
  }

  if (kittenDataList[2].desc.includes(inputSearchDesc.value)) {

    catList.innerHTML += renderKitten(kittenDataList[2]);
  }*/





}


// Event hacer click en buscar
searchButton.addEventListener('click', handleFilterKitten);

console.log(descrSearchText.value);

//DOM Formulario de añadir gatos
const formSection = document.querySelector('.js-new-form');
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const inputBreed = document.querySelector('.js-input-breed');
const labelMessageError = document.querySelector('.js-label-error');

const btnAdd = document.querySelector('.js-buttAdd');
const btnCancel = document.querySelector('.js-buttCancel');
const formButton = document.querySelector('.js-form-button');



console.log(btnCancel);



function showNewCatForm() {
  formSection.classList.remove('collapsed');
  console.log('entra');
}

function hideNewCatForm() {
  formSection.classList.add('collapsed');
  console.log('sale');
}


function handleClickNewCatForm(event) {
  event.preventDefault();
  if (formSection.classList.contains('collapsed')) {
    showNewCatForm();
  } else {
    hideNewCatForm();
  }
}


formButton.addEventListener('click', handleClickNewCatForm);

btnAdd.addEventListener('click', (event) => {

  event.preventDefault();
  addNewKitten();

});


function addNewKitten() {

  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;
  const valueBreed = inputBreed.value;

  if (valueDesc === '' || valuePhoto === '' || valueName === '' || valueBreed === '') {

    labelMessageError.innerHTML = "Uy! parece que has olvidado algo"

  } else {
    //aquí se creara el gato
    labelMessageError.innerHTML = "Correcto"
  }
}


//Función que imprime el gato con los datos que le has dado en el array
function renderKitten(numberCat) {


  if (numberCat.breed === " ") {

    html = 'Uy que despiste, no sabemos su raza';
  } else {
    html = numberCat.breed;
  }

  const rendKitten = `<li class="card js-kit3" >
  <article>
    <img
      class="card_img"
      src= ${numberCat.image}
      alt="siames-cat"
    />
    <h3 class="card_title">${numberCat.name}</h3>
    <h4 class="card_race">${html}</h4>
    <p class="card_description">${numberCat.desc}</p>
  </article>
  </li>`;

  return rendKitten;

}




//habia que cerrar el menu no decirle que se borre jeje


btnCancel.addEventListener('click', (event) => {

  event.preventDefault();
  formSection.classList.add("collapsed");

});











