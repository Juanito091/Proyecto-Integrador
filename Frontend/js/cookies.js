
const avisoCookies = document.getElementById('aviso-cookies');
const botonAceptarCookies = document.getElementById('btn-aceptar-cookies');
const fondoAvisoCookies = document.getElementById('fondo-aviso-cookies');

dataLayer = [];

if(!localStorage.getItem('cookies-aceptadas')){
    avisoCookies.classList.add('activo-cookies');
    fondoAvisoCookies.classList.add('activo-cookies');
} else {
    dataLayer.push({'event': 'cookies-aceptadas'})
}

botonAceptarCookies.addEventListener('click', () => {
    avisoCookies.classList.remove('activo-cookies');
    fondoAvisoCookies.classList.remove('activo-cookies');

    localStorage.setItem('cookies-aceptadas', true);

    dataLayer.push({'event': 'cookies-aceptadas'})
})