import fechAnimales from "./fechAnimales.js";
import clases from "./clases.js";

const btnFormulario = document.getElementById("btnRegistrar");
const nomAnimal = document.getElementById("animal");
const preview = document.getElementById("preview");
const edadAnimal = document.getElementById("edad");
const comentarios = document.getElementById("comentarios");

let animalEstudiado = [];

const { animales } = await fechAnimales.getData();

nomAnimal.addEventListener("change", async () => {
  
  return imagenAnimal(animales);
});

let imagenAnimal = (animal) => {
  for (const key in animal) {
    nomAnimal.value == animal[key].name
      ? (preview.style.backgroundImage = `url(../assets/imgs/${animal[key].imagen})`)
      : null;
  }
};

btnFormulario.addEventListener("click", async (event) => {
  event.preventDefault();

  const img = preview.style.backgroundImage;
  const imgVal = img.slice(8, img.length - 2);

  //instancias de clases
  let animal1;
  switch (nomAnimal.value) {
    case "Leon":
      animal1 = new clases.Leon(nomAnimal.value,edadAnimal.value,imgVal,comentarios.value,animales[0].sonido);
        
      break;

    case "Lobo":
      animal1 = new clases.Lobo(nomAnimal.value,edadAnimal.value,imgVal,comentarios.value,animales[1].sonido);

      break;

    case "Oso":
      animal1 = new clases.Oso(nomAnimal.value,edadAnimal.value,imgVal,comentarios.value,animales[2].sonido);

      break;

    case "Serpiente":
      animal1 = new clases.Serpiente(nomAnimal.value,edadAnimal.value,imgVal,comentarios.value,animales[3].sonido);

      break;

    case "Aguila":
      animal1 = new clases.Aguila(nomAnimal.value,edadAnimal.value,imgVal,comentarios.value,animales[4].sonido);

      break;

    default:
      break;
  }
      
  //Validacion, push al arreglo y limpieza formulario
  if (nomAnimal.value &&
    edadAnimal.value &&
    comentarios.value &&
    preview.style.backgroundImage
  ) {
    animalEstudiado.push(animal1);
    nomAnimal.selectedIndex = 0;
    edadAnimal.selectedIndex = 0;
    preview.style.backgroundImage = `url(../assets/imgs/lion.svg)`;
    comentarios.value = "";
  } else {
    alert("Por favor complete la informacion necesaria");
  }

  console.log(animalEstudiado);
 
  return tabular();
});

//Ejecucion Moddal
window.ejecutarModal=(indexAnimal)=>{
  let animal=animalEstudiado[indexAnimal]  
  let contenidoModal = document.querySelector(".modal-body");  
  contenidoModal.innerHTML=""  
    contenidoModal.innerHTML= `
    <div>
      <div>
        <img class="text-white imagen-modal" src="${animal.getImg()}" alt="${animal.getNombre()}">
      </div>
      <p class="fw-bold text-white">${animal.getEdad()}</p>
      <p class="fw-bold text-white">Comentarios</p>  
      <p class="text-white">${animal.getComentarios()}</p>
    </div>`
  };

//Tabulacion de animales seleccionados
const tabular = () => {
  const tabla = document.getElementById("Animales");
  tabla.innerHTML = "";
  animalEstudiado.forEach((animal,indexAnimal) => {
    
    tabla.innerHTML += `
    <div class="participante px-3 pb-2" style="width: 30rem;">
      <div class="card">
        <div><img src="${animal.getImg()}" class="card-img-top modalClick" onClick="ejecutarModal(${indexAnimal})" data-toggle="modal" data-target="#exampleModal"/></div>
        <div class="card-body bg bg-secondary py-1" onclick="document.getElementById('player-${indexAnimal}').play()">
          <img src="assets/imgs/audio.svg" style="width: 1.5rem;"/>
           <audio id="player-${indexAnimal}" src="assets/sounds/${animal.getSonido()}"></audio>
        </div>   
      </div>
    </div>`;
  });
};



