
const datos = {

}; 

const nombre = document.querySelector('#Nombre');
const telefono = document.querySelector('#Telefono');
const gmail = document.querySelector('#Gmail');
const mensaje = document.querySelector('#Mensaje');
const formulario_contacto = document.querySelector('#contacto_submitbutton')

nombre.addEventListener('input', leerTexto);
telefono.addEventListener('input', leerTexto);
gmail.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

//Evento Submit

formulario_contacto.addEventListener('submit', function(event){
    event.preventDefault();


    console.log('Enviando Formulario');
});


function leerTexto(e) {
    datos[e.target.id] = e.target.value;
    console.log(datos)
};
