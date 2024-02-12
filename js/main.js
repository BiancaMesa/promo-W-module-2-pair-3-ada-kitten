'use strict';

//Crear la variable catList que es la clase list que sería el contenedor padre
const catList = document.querySelector('.js-list');

const kittenImage_1 = "https://dev.adalab.es/gato-siames.webp";
const kittenName_1 = "Anastacio";
const kittenDesc_1 = `Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos
hace 500 años, donde tuvo su origen muy posiblemente.`;
const kittenBreed_1 = "Siamés";

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




//Constante 1 creada en JS directamente

const kittenOne = `<li class="card">
<article>
  <img
    class="card_img"
    src= ${kittenImage_1}
    alt="siames-cat"
  />
  <h3 class="card_title">${kittenName_1}</h3>
  <h4 class="card_race">${kittenBreed_1}</h4>
  <p class="card_description">${kittenDesc_1}</p>
</article>
</li>`;


const kittenTwo = `<li class="card">
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


const kittenThree = `<li class="card">
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





/*const kittenOne = `<li class="card">
<article>
  <img
    class="card_img"
    src="https://dev.adalab.es/gato-siames.webp"
    alt="siames-cat"
  />
  <h3 class="card_title">Anastacio</h3>
  <h4 class="card_race">Siamés</h4>
  <p class="card_description">
    Porte elegante, su patrón de color tan característico y sus ojos
    de un azul intenso, pero su historia se remonta a Asía al menos
    hace 500 años, donde tuvo su origen muy posiblemente.
  </p>
</article>
</li>`;
console.log(kittenOne);*/

//Constante 2 creada en JS directamente
/*const kittenTwo = `<li class="card">
<img
  class="card_img"
  src="https://dev.adalab.es/sphynx-gato.webp"
  alt="sphynx-cat"
/>
<h3 class="card_title">Fiona</h3>
<h4 class="card_race">Sphynx</h4>
<p class="card_description">
  Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
  hasta con pinta de alienígena han llegado a definir a esta raza
  gatuna que se caracteriza por la «ausencia» de pelo.
</p>
</li>`;
console.log(kittenTwo);*/

//Constante 3 creada en JS directamente
/*const kittenThree = `<li class="card">
<img
  class="card_img"
  src="https://dev.adalab.es/maine-coon-cat.webp"
  alt="maine-coon-cat"
/>
<h3 class="card_title">Cielo</h3>
<h4 class="card_race">Maine Coon</h4>
<p class="card_description">
  Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
  bella mirada se ha convertido en una de sus señas de identidad.
  Sus ojos son grandes y las orejas resultan largas y en punta.
</p>
</li>`;
console.log(kittenThree);*/

//Crear items dentro de la variable catList
catList.innerHTML = kittenOne + kittenTwo + kittenThree;





