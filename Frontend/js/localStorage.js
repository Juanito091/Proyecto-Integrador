
const formularioLS = document.getElementById('formulario');

/* Funcion localSorage */
const adduser = (e) => {
	e.preventDefault();

	const username = document.getElementById('usuario');
	username.target.value = "";

	if (username.target.value === '') {
		alert("tienes que agregas un usuario y un nombre");
		return;
	}
	if (localStorage.getItem('key') != null) {
		alert("usuario ya existente");
		return
	}
	localStorage.setItem("key", username);
	alert("usuario creado")
};


formularioLS.addEventListener('submit', adduser())