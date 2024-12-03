// JavaScript para ocultar el nav al hacer scroll
let lastScrollTop = 0; // Variable para almacenar la posición del scroll anterior
const nav = document.querySelector('nav'); // Selecciona el elemento nav

// Agrega un evento de escucha para el evento de scroll en la ventana
window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop; // Obtiene la posición actual del scroll

    if (scrollTop === 0) {
        // Si estamos en la parte superior de la página
        nav.classList.remove('hidden'); // Muestra el nav
    } else {
        // Si no estamos en la parte superior
        nav.classList.add('hidden'); // Oculta el nav
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Actualiza la posición del scroll anterior
});

//navegador lateral

const sidebar = document.getElementById('sidebar'); // Selecciona el menú lateral

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop === 0) {
        nav.classList.remove('hidden'); // Muestra la barra de navegación
        sidebar.classList.remove('visible'); // Oculta el menú lateral
    } else {
        nav.classList.add('hidden'); // Oculta la barra de navegación
        sidebar.classList.add('visible'); // Muestra el menú lateral
    }
});



let videos = [
    {
        "url": "videos/marcha_nazi.mp4",
        "nombre": "Proyecto 01",
        "descripcion": "Este es el proyecto 01 fue desarrollado para un video de youtube. Si te gusta el contenido dale like y suscribete"
    },
    {
        "url": "videos/marcha_rusa.mp4",
        "nombre": "Proyecto 02",
        "descripcion": "Hola a todos este es el proyecto 02 y fue desarrollado para un video de youtube. Si te gusta el contenido dale like y suscribete"
    },
    {
        "url": "videos/marcha_aliados.mp4",
        "nombre": "Proyecto 03",
        "descripcion": "Este proyecto, es el 03 y fue desarrollado para un video de youtube. Si te gusta el contenido dale like y suscribete"
    },
];

let videoContainer = document.getElementById('video');
let texto = document.getElementById('texto');
let actual = 0;

cargarVideo();

// Función para cargar el video actual con transición
async function cargarVideo() {
    await fadeOut();
    videoContainer.innerHTML = `
        <video class="video" src="${videos[actual].url}" autoplay muted loop loading="lazy"></video>
    `;
    texto.innerHTML = `
        <h3>${videos[actual].nombre}</h3>
        <p>${videos[actual].descripcion}</p>
    `;
    await fadeIn();
}

// Función para desvanecer el video
function fadeOut() {
    return new Promise((resolve) => {
        videoContainer.style.opacity = 1;
        let fadeEffect = setInterval(() => {
            if (videoContainer.style.opacity > 0) {
                videoContainer.style.opacity -= 0.1;
            } else {
                clearInterval(fadeEffect);
                resolve();
            }
        }, 100);
    });
}

// Función para aparecer el video
function fadeIn() {
    return new Promise((resolve) => {
        videoContainer.style.opacity = 0;
        let fadeEffect = setInterval(() => {
            if (videoContainer.style.opacity < 1) {
                videoContainer.style.opacity = parseFloat(videoContainer.style.opacity) + 0.1;
            } else {
                clearInterval(fadeEffect);
                resolve();
            }
        }, 100);
    });
}

// Automatizar el cambio de video cada 5 segundos
setInterval(function() {
    actual = (actual + 1) % videos.length; // Cambia al siguiente video
    cargarVideo();
}, 30000); // Cambia el video cada 30000 ms (30 segundos)