const productos = [{
    id: 1,
    nombre: 'Lampara Gato',
    valor: 2798,
    imageURL: '//assets/imagenes/lamparaGato.jpeg',
},
{
    id: 2,
    nombre: 'Maquillaje',
    valor: 2998,
    imageURL: '//assets/imagenes/maquillaje.jpeg',
},
{
    id: 3,
    nombre: 'Mochila Chimola',
    valor: 6198,
    imageURL: '//assets/imagenes/mochilaChimo.jpeg',
},
{
    id: 4,
    nombre: 'Vaso Unicornio',
    valor: 5298,
    imageURL: '//assets/imagenes/vaso uni.jpeg',
},
];

/// localstorage ////
function obtenerProductosLS(){
return JSON.parse(localStorage.getItem("productos")) || [];
}

function guardarProductosLS(productos){
localStorage.setItem("productos", JSON.stringify(productos));
}

function buscarProducto(id){
let producto = obtenerProductosLS();
return productos.find(x => x.id == id);
}