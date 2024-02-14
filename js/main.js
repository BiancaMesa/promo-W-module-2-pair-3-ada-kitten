'use strict';



//Crear la variable catList que es la clase list que sería el contenedor padre
const catList = document.querySelector('.js-list');
const inputSearchDesc = document.querySelector('.js_in_search_desc');
const descrSearchText = inputSearchDesc.value;
const messageFound = document.querySelector('.js-message');


const kittenImage_1 = "https://dev.adalab.es/gato-siames.webp";
const kittenName_1 = "Anastacio";
const kittenDesc_1 = `Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos
hace 500 años, donde tuvo su origen muy posiblemente.`;
const kittenBreed_1 = "";

const kittenImage_2 = "https://dev.adalab.es/sphynx-gato.webp";
const kittenName_2 = "Fiona";
const kittenDesc_2 = ` Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
hasta con pinta de alienígena han llegado a definir a esta raza
gatuna que se caracteriza por la «ausencia» de pelo.`;
const kittenBreed_2 = "Sphynx";


const kittenImage_3 = "https://dev.adalab.es/maine-coon-cat.webp";
const kittenName_3 = "Cielo";
const kittenDesc_3 = `Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad.
Sus ojos son grandes y las orejas resultan largas y en punta.`;
const kittenBreed_3 = "Maine Coon";

let html = '';

//html lo estamos convirtiendo en KittenBreed_1
if (kittenBreed_1 === "") {
  html = 'Uy que despiste, no sabemos su raza';
} else {
  html = kittenBreed_1;
}

//Constante 1 creada en JS directamente

const kittenOne = `<li class="card js-kit1" >
<article>
  <img
    class="card_img"
    src= ${kittenImage_1}
    alt="siames-cat"
  />
  <h3 class="card_title">${kittenName_1}</h3>
  <h4 class="card_race">${html}</h4>
  <p class="card_description">${kittenDesc_1}</p>
</article>
</li>`;


const kittenTwo = `<li class="card  js-kit2" >
<article>
  <img
    class="card_img"
    src= ${kittenImage_2}
    alt="siames-cat"
  />
  <h3 class="card_title">${kittenName_2}</h3>
  <h4 class="card_race">${kittenBreed_2}</h4>
  <p class="card_description">${kittenDesc_2}</p>
</article>
</li>`;


const kittenThree = `<li class="card js-kit3" >
<article>
  <img
    class="card_img"
    src= ${kittenImage_3}
    alt="siames-cat"
  />
  <h3 class="card_title">${kittenName_3}</h3>
  <h4 class="card_race">${kittenBreed_3}</h4>
  <p class="card_description">${kittenDesc_3}</p>
</article>
</li>`;


//Crear items dentro de la variable catList

catList.innerHTML = kittenOne + kittenTwo + kittenThree;

//crear nuevas variables que obtengan el section ya impreso

const kittenItem1 = document.querySelector('.js-kit1');
const kittenItem2 = document.querySelector('.js-kit2');
const kittenItem3 = document.querySelector('.js-kit3');


//console.log(kittenItem1);
//console.log(kittenItem2);
//console.log(kittenItem3);
console.log(descrSearchText);
console.log(kittenItem1);

//console.log(kit1value);

if (descrSearchText == "") {

  catList.innerHTML = kittenOne + kittenTwo + kittenThree;
}

if (kittenDesc_1.includes(descrSearchText)) {

  kittenItem2.classList.add("hidden");
  kittenItem3.classList.add("hidden");
}

if (kittenDesc_2.includes(descrSearchText)) {

  kittenItem1.classList.add("hidden");
  kittenItem3.classList.add("hidden");

}

if (kittenDesc_3.includes(descrSearchText)) {

  kittenItem3.classList.remove("hidden");
  kittenItem1.classList.add("hidden");
  kittenItem2.classList.add("hidden");

}

const formSection = document.querySelector('.js-new-form');
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const inputBreed = document.querySelector('.js-input-breed');
const labelMessageError = document.querySelector('.js-label-error');

const btnAdd = document.querySelector('.js-buttAdd');
const btnCancel = document.querySelector('.js-buttCancel');


console.log(btnCancel);


btnAdd.addEventListener('click', (event) => {

  event.preventDefault();
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;
  const valueBreed = inputBreed.value;

  if (valueDesc === '' || valuePhoto === '' || valueName === '' || valueBreed === '') {

    labelMessageError.innerHTML = "Uy! parece que has olvidado algo"

  } else {

    labelMessageError.innerHTML = "Correcto"
  }

});
btnCancel.addEventListener('input', (event) => {

  event.preventDefault();
  formSection.reset();

});














