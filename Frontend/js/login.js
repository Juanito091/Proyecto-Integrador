const verlogin = document.getElementById('verlogin');
const loginContainer = document.getElementById('loginContainer');

const pintarLogin = () => {
    modalContainer.innerHTML = `  
    
    <div class="formulario__grupo" id="grupo__usuario">
    <label for="usuario" class="formulario__label">Usuario</label>
    <div class="formulario__grupo-input">
      <input
        type="text"
        class="formulario__input"
        name="usuario"
        id="usuario"
        placeholder="Nombre de la cuenta"
      />
    </div>

    <div class="formulario__grupo" id="grupo__password">
    <label for="password" class="formulario__label">Contraseña</label>
    <div class="formulario__grupo-input">
      <input
        type="password"
        class="formulario__input"
        name="password"
        id="password"
      />
    </div>
    `;
    modalContainer.style.display = 'flex';
}

verlogin.addEventListener('click', pintarLogin)