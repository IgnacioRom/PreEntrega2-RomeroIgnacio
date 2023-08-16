// ARRAYS DE PRODUCTOS
const bebidas = {
    flatWhite:{
        nombre: 'Flat White',
        precio: 500,
        stock: true,
    },
    mocha:{
        nombre: 'Mocha',
        precio: 600,
        stock: true,
    },
    latte:{
        nombre: 'Latte',
        precio: 500,
        stock: true,
    },
    cafeHelado:{
        nombre: 'Café Helado',
        precio: 600,
        stock: true,
    },
};
const comidas = {
    rollCanela:{
        nombre: 'Roll de Canela',
        precio: 650,
        stock: true,
    },
    tortaPorcion:{
        nombre: 'Torta porción',
        precio: 900,
        stock: true,
    },
    medialunaJyq:{
        nombre: 'Medialuna Jamón y Queso',
        precio: 400,
        stock: true,
    },
    avocadoToast:{
        nombre: 'Avocado Toast',
        precio: 800,
        stock: true,
    },
};
// Variables y precios

let totalBebida = 0;
let totalComida = 0;

//Bienvenida
alert ('Bienvenidos a Growler Café! En breve estaremos brindandole nuestra carta de productos');
function mostrarMenu() {
    const menu = `Para beber:
    Flat White = $500
    Mocha = $600
    Latte = $500
    Café Helado = $600

    Para comer:
    Roll de Canela = $650
    Porción torta del día = $900
    Medialuna Jamón y Queso = $400
    Avocado Toast = $800`;
    alert(menu);
}

alert('Pasemos a realizar el pedido, por favor ingrese el número del producto que desea.')

mostrarMenu();

let pedidoBebida = parseInt(prompt (`Bebidas:
1) Flat White
2) Mocha
3) Latte
4) Café Helado.
Ingrese el número de su pedido`));

if (pedidoBebida == 1 && bebidas.flatWhite.stock == true) {
    totalBebida = bebidas.flatWhite.precio;
    alert (`Usted ha pedido un Flat White, el precio es de $${bebidas.flatWhite.precio}`);
} else if (pedidoBebida == 2 && bebidas.mocha.stock == true) {
    totalBebida = bebidas.mocha.precio;
    alert (`Usted ha pedido un Mocha, el precio es de $${bebidas.mocha.precio}`);
} else if (pedidoBebida == 3 && bebidas.latte.stock == true) {
    totalBebida = bebidas.latte.precio;
        alert (`Usted ha pedido un Latte, el precio es de $${bebidas.latte.precio}`);
    } else if (pedidoBebida == 4 && bebidas.cafeHelado.stock == true) {
        totalBebida = bebidas.cafeHelado.precio;
            alert (`Usted ha pedido un Café Helado, el precio es de $${bebidas.cafeHelado.precio}`);
        } else {
                alert ('El número ingresado no corresponde a ninguna bebida, por favor vuelva a intentarlo');
            }

let pedidoComida = parseInt(prompt (`Comidas:\n 5) Roll de Canela\n 6) Torta porción\n 7) Medialuna Jamón y Queso\n 8) Avocado Toast.\n Ingrese el número de su pedido`));

if (pedidoComida == 5 && comidas.rollCanela.stock == true) {
    totalComida = comidas.rollCanela.precio;
    alert (`Usted ha pedido un Roll de Canela, el precio es de $${comidas.rollCanela.precio}`);
} else if (pedidoComida == 6 && comidas.tortaPorcion.stock == true) {
    totalComida = comidas.tortaPorcion.precio;
    alert (`Usted ha pedido una porción de torta, el precio es de $${comidas.tortaPorcion.precio}`);
} else if (pedidoComida == 7 && comidas.medialunaJyq.stock == true) {
    totalComida = comidas.medialunaJyq.precio;
    alert (`Usted ha pedido una Medialuna Jamón y Queso, el precio es de $${comidas.medialunaJyq.precio}`);
} else if (pedidoComida == 8 && comidas.avocadoToast.stock == true) {
    totalComida = comidas.avocadoToast.precio;
    alert (`Usted ha pedido un Avocado Toast, el precio es de $${comidas.avocadoToast.precio}`);
} else {
    alert ('El número ingresado no corresponde a ninguna comida, por favor vuelva a intentarlo');
}

let totalPedido = totalBebida + totalComida;

// Envio del pedido
alert ('Para continuar con el pedido, necesitamos sus datos y metodo de entrega');
let nombre = prompt ('Ingrese su nombre');
let apellido = prompt ('Ingrese su apellido');
let direccion = prompt ('Si desea recibir su pedido a domicilio, ingrese "si" de lo contrario, ingrese "no"');
if (direccion.toLowerCase() == 'si') {
    let calle = prompt ('Ingrese su calle');
    let altura = prompt ('Ingrese su altura');
    let piso = prompt ('Ingrese su piso');
    let departamento = prompt ('Ingrese su departamento');
    alert (`Todo listo ${nombre}! El costo de su pedido es $${totalPedido} y será enviado a ${calle} ${altura} ${piso} ${departamento}`);
} else {
    alert (`El costo de su pedido es $${totalPedido}. Nuestra dirección es Moreno 1835, nuestras puertas están abiertas de 8 a 00hs`);
}

alert ('Gracias por elegirnos, esperamos que disfrute su pedido!');

