//
//
//
var socket = io();

var paras = new URLSearchParams(window.location.search);

if (!paras.has('nombre') || !paras.has('sala')) {
    window.location = 'index.html';
    throw new Error('El nombre/sala es necesario');
}
var usuario = {
    nombre: paras.get('nombre'),
    sala: paras.get('sala')
}

socket.on('connect', function() {
    console.log('Conectado al servidor');

    socket.emit('entrarChat', usuario, function(resp) {
        console.log('Usuarios conectados ', resp);
    });
});

// escuchar
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

// Escuchar información
socket.on('crearMensaje', function(mensaje) {
    console.log(mensaje);
});

// Escuchar información
socket.on('listaPersonas', function(mensaje) {
    console.log(mensaje);
});

// Escuchar información
socket.on('mensajePrivado', function(mensaje) {
    console.log(mensaje);
});

// // Enviar información
// socket.emit('enviarMensaje', {
//     usuario: 'Fernando',
//     mensaje: 'Hola Mundo'
// }, function(resp) {
//     console.log('respuesta server: ', resp);
// });