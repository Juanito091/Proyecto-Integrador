const verCarrito = document.getElementById('verCarrito');
const modalContainer = document.getElementById('modalContainer');
const cantidadCarrito = document.getElementById('cantidadCarrito');

/*Funcion para crear el carrito y manipulacion del DOM - Creacion del modal*/
const pintarCarrito =  () => {
    modalContainer.innerHTML = '';
    modalContainer.style.display = 'flex';

    const modalHeader = document.createElement('div');
    modalHeader.className = 'modal-header';
    modalHeader.innerHTML = `
        <h1 class="modal-header-title">Carrito.</h1> 
    `;
    modalContainer.append(modalHeader);
    
    const modalButton = document.createElement('h1');
    modalButton.innerText = 'salir';
    modalButton.className = 'modal-header-button';

    modalButton.addEventListener('click', () => {
        modalContainer.style.display = 'none';
    })

    modalHeader.append(modalButton);

    carrito.forEach((product) => {
        let carritoContent = document.createElement('div');
        carritoContent.className = 'modal-content';
        carritoContent.innerHTML = `
            <img src="${product.img}">
            <h3>${product.nombre}</h3>
            <p>$${product.precio}</p>
            <p>Cantidad: ${product.cantidad}
            <p>Total: $${product.cantidad * product.precio}</p>
        `;
        modalContainer.appendChild(carritoContent)

        let eliminar = document.createElement('span');
        eliminar.innerHTML = '❌';
        eliminar.className = 'delete-product';
        carritoContent.append(eliminar);

        eliminar.addEventListener('click', eliminarProducto)
    });

    const total = carrito.reduce((acumulador, price) => acumulador + price.precio * price.cantidad, 0);
    const totalBuying = document.createElement('div');
    totalBuying.className = 'total-content';
    totalBuying.innerHTML = `
        <h2> Total a pagar $${total}</h2>
    `;
    modalContainer.append(totalBuying);
};

/*Delete product function - Funcion para eliminar productos*/
const eliminarProducto = () => {
    const foundId = carrito.find((element) => element.id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    });
    pintarCarrito()
};

/*Cart elements/products counter function - Funcion para contar la cantidad de elementos o productos guardados en el carrito*/
// const carritoCounter = () => {
//     cantidadCarrito.style.display = 'block';
//     cantidadCarrito.innerText = carrito.length;
// }

/*Evento para hacer aparecer el carrito*/
verCarrito.addEventListener('click', pintarCarrito);
