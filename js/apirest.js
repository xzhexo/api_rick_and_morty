// Crear las referencias
const rowCards = document.querySelector('#rowCards');
const formData = document.querySelector('#formData');

//Incio de las peticiones al Api
const getCharacters = async () => {

  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    return data;
  }catch(error) {
    console.log(error);
  }
  
};

const getCharacterForName = async(nameCharacter) => {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${nameCharacter}`);
    const data = await response.json();
    return data;  
  } catch (error) {
    throw(error);  
  }
  
}

//limpia el row
const cleanRow = () => {
  rowCards.innerHTML = '';
}

const init = async () => {
  const characters = await getCharacters();
  // console.log(characters.results); // aqui ya estan en el arreglo
  createCards(characters.results);
}
init();

/* Fin de las Peticiones */

// Crear la tarjeta de bootstrap (card)

cardCharacter = (character) => {
  //Creamos los elementos html
  const cardBootstrap = document.createElement('div');
  const imgCard = document.createElement('img');
  const cardBody = document.createElement('div');
  const titleCharacter = document.createElement('h5');
  const btnByIdCharacter = document.createElement('a');

  // textos de los elementos
  const nameCharacter = document.createTextNode(character.name);
  const textButtonCharacter = document.createTextNode('Ir al personaje');


  // Añadir sus clases
  cardBootstrap.classList.add('card','mt-4');
  imgCard.classList.add('card-img-top','mt-2');
  cardBody.classList.add('card-body');
  titleCharacter.classList.add('card-title', 'text-center');
  btnByIdCharacter.classList.add('btn','btn-secondary', 'mb-2');
  
  //añadiendo el href
  btnByIdCharacter.href=`personaje.html?id=${character.id}`;

  // console.log(character.image);
  titleCharacter.appendChild(nameCharacter);
  btnByIdCharacter.appendChild(textButtonCharacter);
  imgCard.src=character.image;
  
  // el renderizado 
  cardBootstrap.append(imgCard, cardBody, btnByIdCharacter);
  cardBody.append(titleCharacter);
  rowCards.append(cardBootstrap);

}

// Creacion de Cards
createCards = (characters) => {
  console.log(characters);
  characters.map(element =>cardCharacter(element));
}
/**Llamar al formulario **/
// event implicito
formData.addEventListener('submit',handleSubmit);


function handleSubmit(event) {
  event.preventDefault();
  // console.log(this);
  const form = new FormData(this);
  cleanRow();
  // console.log(form.get('character'));
  // (()=>{})()
  getCharacterForName(form.get('character')).then( data => createCards(data.results)).catch(err => console.log(err))
}



{/* 
<div class="card" style="width: 18rem;">
<img src="..." class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
<a href="#" class="mb-3 btn btn-primary">Ir a personaje</a>
</div>  
*/}


// const init  =  () => {
//   getCharacters().then( data => console.log(data.results)).catch(err => console.log(err))
// }
// init();

// funcion anonima
// () => {}

// una funcion anonima auto invocada
// (() => {})()

// (async ()=> {
//   const data = await getCharacters();
//   console.log(data);
//   console.log(data.results);
// })();