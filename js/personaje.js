
const nameCharacter = document.querySelector('h1');
const imgCharacter = document.querySelector('#imgCharacter');
const statusCharacter = document.querySelector('#statusCharacter');
const genderCharacter = document.querySelector ('#genderCharacter');
const speciesCharacter = document.querySelector ('#speciesCharacter');
const originCharacter = document.querySelector ('#originCharacter');




const parametro = window.location.search;

const urlParams = new URLSearchParams(parametro);
let id = urlParams.get('id');



const getCharacterById = async (id) => {

  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const data = response.json();

  return data;
    
  } catch (error) {
    console.log(error);
    
  }     
}
// LLamado a la funcion
getCharacterById(id).then( (data) => {

  nameCharacter.innerText = data.name;
  imgCharacter.innerHTML = (`<img src="${data.image}">`);
  statusCharacter.innerText = (`Status: ${data.status}`);
  genderCharacter.innerText = (`Gender: ${data.gender}`);
  speciesCharacter.innerText = (`Species: ${data.species}`);
  originCharacter.innerText = (`Location: ${data.origin.name}`);

}).catch(err => err);

















// peticion al api pero por id
// https://rickandmortyapi.com/api/character/1
