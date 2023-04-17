const ContenedorDeTareas = document.querySelector("#ContenedorDeTareas");
const valuetextarea = document.querySelector("#textarea");
let tareas = [];
let click = false;
let Mostrar = document.querySelector("#mostrar")
let formatoDeTareas = "";


const BotomTarea = document.querySelector("#BotomTarea");

const MarcarTarea = (indice) => {
    console.log(indice);
    tareas[indice].completed = true;
    /*const card = event.target.parentNode.parentNode;
    card.classList.add("bg-success",);*/
    actualizarListaDeTareas()
    console.log(tareas);


};
const MarcarFavorito = (index) => {
    tareas[index].favorite = true;
    actualizarListaDeTareas();
  
    console.log(tareas)

    /*console.log(event.currenTarget);
    const btn = event.target;*/
};

let tareasauxiliar;
const MostrarFavoritos = () => {
    click = !click;
    if(click){
        tareasauxiliar = tareas;
        tareas = tareas.filter(item => item.favorite == true);
        actualizarListaDeTareas();
        Mostrar.innerHTML = "Mostrar Todos"
    }else{
        tareas = tareasauxiliar;
        actualizarListaDeTareas();
        Mostrar.innerHTML = "Mostrar Favoritos"
    }
}



const actualizarListaDeTareas = () => {
    const listarTareaHTML = tareas.map((tarea, index) => {
     return `<div id="ContenedorCard" class=" ${tarea.completed == true ? "bg-success text-decoration-line-through" : ""} card w-100">
                <div class="card-body d-flex justify-content-between align-items-center">
                    <div class="fs-4">
                        <input ${tarea.completed == true ? "checked" : ""} onclick="MarcarTarea(${index})" id="InputRadio" class="form-check-input" type="radio">
                    </div>
                    <div class="ps-4 pe-4" style="text-align: justify;">
                        ${tarea.mesage}
                    </div>
                    <div>
                        <input ${tarea.favorite == true ? "checked" : ""} type="checkbox" onclick="MarcarFavorito(${index})">
                    </div>
                    </div>
                </div>
            </div>`
        }).join("");
    ContenedorDeTareas.innerHTML = listarTareaHTML;
    }   
BotomTarea.addEventListener("click", () => {

    const nuevaTarea = {
        mesage: valuetextarea.value.trim(),
        completed: false,
        favorite: false
     };
    
    tareas.push(nuevaTarea);
    actualizarListaDeTareas();

    })














/*
    if(valuetextarea.value.trim() === ""){
        alert("No hay tareas ingresadas");
    }else{
        const text = document.createElement("div");
        text.innerHTML = `<div id="ContenedorCard" class="card w-100">
                    <div class="card-body d-flex justify-content-between align-items-center">
                        <div class="fs-4">
                            <input onclick="MarcarTarea(event)" id="InputRadio" class="form-check-input" type="radio">
                        </div>
                        <div class="ps-4 pe-4" style="text-align: justify;">
                            ${valuetextarea.value}
                        </div>
                        <div>
                            <input type="checkbox" onclick="MarcarFavorito(event)">
                        </div>
                        </div>
                    </div>
                </div>`;

        ContenedorDeTareas.appendChild(text);
        valuetextarea.value = "";
    }



    tareas.push( {mesage: valuetextarea.value.trim(), favorite: false, complete: false})

    if(valuetextarea.value.trim() === ""){
        alert("No hay tareas ingresadas");
    }else{
        formatoDeTareas = tareas.map( element => { `<div id="ContenedorCard" class="card w-100">
                    <div class="card-body d-flex justify-content-between align-items-center">
                        <div class="fs-4">
                            <input onclick="MarcarTarea(event)" id="InputRadio" class="form-check-input" type="radio">
                        </div>
                        <div class="ps-4 pe-4" style="text-align: justify;">
                            ${element.mesage}
                        </div>
                        <div>
                            <input type="checkbox" onclick="MarcarFavorito(event)">
                        </div>
                        </div>
                    </div>
                </div>`;
            })
        ContenedorDeTareas.innerHTML += formatoDeTareas;
        valuetextarea.value = "";
    }

*/


/*

const favo = document.querySelector("#favo")
let tarea2 = [];

favo.addEventListener("click", () => {
    click = !click
    if(click){
        tareas = tareas.filter(item => item.favorite == true)
        p.textContent = "Mostrar todos";
        actualizarListaDeTareas();
    }else{
        tareas = tarea2.filter(item => item);
        p.textContent = "Mostrar favoritos";
        actualizarListaDeTareas();
    }
})


*/



/*
FormatoDeTareas =`
<div id="ContenedorCard" class="card w-100" >
    <div class="card-body d-flex justify-content-between align-items-center">
        <div class="fs-4">
            <input id="InputRadio" class="form-check-input" type="radio"  >
        </div>
        <div class="ps-4 pe-4" style="text-align: justify;">
            ${valuetextarea.value}
        </div>
        <div>
            <i class="bi bi-star" style="font-size: 30px;"></i>
        </div>
    </div>
</div>
</div>

`;












    let tarea = {
                    mesage: valuetextarea.value.trim(),
                    favorite: false,
                    complete: false
                 };

    tareas.push(tarea);



InputRadio = document.querySelector("#InputRadio");
ContenedorCard = document.querySelector("#ContenedorCard");
InputRadio.addEventListener("click", () => {
    click = !click;
    if(click){
        ContenedorCard.classList.add("bg-success", "text-decoration-line-through");
    }else{
        ContenedorCard.classList.remove("bg-success", "text-decoration-line-through");
    }
    })*/