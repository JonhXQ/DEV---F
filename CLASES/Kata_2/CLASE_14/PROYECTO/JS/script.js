const productList = [
    {
        id: 1,
        nombre: 'Suero de leche',
        precio: 10,
        cantidad: 10,
        descripcion: 'Suero de leche',
        imagen: 'https://via.placeholder.com/200',
        ml: 100,
    },
    {
        id: 2,
        nombre: 'Suero de leche con avena',
        precio: 10,
        cantidad: 10,
        descripcion: 'Suero de leche',
        imagen: 'https://via.placeholder.com/200',
        ml: 100,
    },
    {
        id: 3,
        nombre: 'Jugo de Frutas',
        precio: 15,
        cantidad: 10,
        descripcion: 'Esto es un jugo de frutas',
        imagen: 'https://via.placeholder.com/200',
        ml: 100,
    },
    {
        id: 4,
        nombre: 'Suero de leche',
        precio: 10,
        cantidad: 10,
        descripcion: 'Suero de leche',
        imagen: 'https://via.placeholder.com/200',
        ml: 100,
    },
    {
        id: 5,
        nombre: 'Suero de leche',
        precio: 10,
        cantidad: 10,
        descripcion: 'Suero de leche',
        imagen: 'https://via.placeholder.com/200',
        ml: 100,
    },
    {
        id: 6,
        nombre: 'Suero de leche',
        precio: 10,
        cantidad: 10,
        descripcion: 'Suero de leche',
        imagen: 'https://via.placeholder.com/200',
        ml: 100,
    },
]

const total = document.getElementById('total')
const tableProducts = document.getElementById('tableProducts')
const form = document.getElementById('form')
const reset = document.getElementById('reset')
const resetTotal = document.getElementById('resetTotal')
let carritoCompras = {}
let carritoTotal = 0

reset.addEventListener('click', () => {
    form.reset()
    buildProductList(productList)
})

resetTotal.addEventListener('click', () => {
    resetBtn()
})

function resetBtn() {
    carritoTotal = 0;
    tableProducts.innerHTML = '';
    total.innerHTML = `Total: $ 0`
}

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const searchInput = event.target.search.value.toUpperCase()
    const productListFilter = productList.filter((product, index) => {
        if (product.nombre.toUpperCase().includes(searchInput)) {
            return product
        }
    })
    return buildProductList(productListFilter)
})

const comprar = (nombre, precio, id) => {
    alert(`Compraste ${nombre} por ${precio}`)
    /* El método hasOwnProperty() devuelve un booleano si el objeto */
    if (carritoCompras.hasOwnProperty(id)) {
        carritoCompras[id].cantidad += 1
    } else {
        carritoCompras[id] = { nombre, precio, id }
        carritoCompras[id].cantidad = 1
    }
    carritoTotal += parseInt(carritoCompras[id].precio)
    total.innerHTML = `Total: ${carritoTotal}`

    /* Creando body de table de lista de productos comprados */
    tableProducts.innerHTML = ''
    for (const key in carritoCompras) {
        const childElement = document.createElement('tr')
        childElement.innerHTML = `
            <td>${carritoCompras[key].nombre}</td>
            <td>${carritoCompras[key].precio}</td>
            <td>${carritoCompras[key].cantidad}</td>
        `
        tableProducts.appendChild(childElement)
    }
}

const buildProductList = (productList) => {
    /* Seleccionar el elemento del DOM padre */
    var getParentElement = document.getElementById('productList')
    /* Limpiar el contenido del elemento padre */
    getParentElement.innerHTML = ''
    productList.forEach((line) => {
        /* Creando la sección de cards */
        const createSection = document.createElement('section')
        createSection.classList.add('product')
        createSection.innerHTML = `
            <img src="${line.imagen}" alt="">
            <h2>${line.nombre}</h2>
            <h3>Precio: <span> ${line.precio}</span></h3>
            <p>Cantidad: <span> ${line.cantidad}</span></p>
            <p>Descripción: <span> ${line.descripcion}</span></p>
            <button onclick="comprar('${line.nombre}','${line.precio}','${line.id}')">Comprar</button>
        `
        getParentElement.appendChild(createSection)
    })
}

window.addEventListener('DOMContentLoaded', () => {
    buildProductList(productList)
})