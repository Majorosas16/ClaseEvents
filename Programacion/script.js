const render =() =>{
 const contenedor= document.querySelector("#cuadro");

// Cuando se toca el objeto
contenedor.addEventListener("click",(event)=>{ 
    console.log(event);
alert("Se hace click en el cuadro");
});

contenedor.addEventListener("mouseenter", ()=>{
    contenedor.classList.remove("contenedor");
    contenedor.classList.add("contenedorDos");
    // alert("Entra al componente");
});

contenedor.addEventListener("mouseleave", ()=>{
    contenedor.classList.add("contenedor");
    contenedor.classList.remove("contenedorDos");
    // alert("Salí al componente");
})   
}

document.addEventListener("DOMContentLoaded", render);

