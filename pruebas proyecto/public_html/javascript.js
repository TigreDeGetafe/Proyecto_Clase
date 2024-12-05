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
        "nombre": "El Águila imperial",
        "descripcion": "la poderosa alianza entre la Alemania nazi y la Italia fascista,¿Quién podrá detenerla antes de que la vieja Europa caiga bajo su sombra?",
        "lider": [
            { "imagen": "videos/hitler.gif", 
              "nombre": "Adolf Hitler", 
              "fecha": "1889 - 1945"
            },
            { "imagen": "videos/mussolini.gif", 
              "nombre": "Benito Mussolini", 
              "fecha": "1883 - 1945" 
            }
        ]
    },
    {
        "url": "videos/marcha_rusa.mp4",
        "nombre": "El gran oso rojo",
        "descripcion": "Con el intento del Águila y el Sol naciente por aniqularlos, ¿Será capaz la marea roja de frenar la fuerza con la que arremeten?",
        "lider": [
            { "imagen": "videos/stalin.gif", 
              "nombre": "Iósif Stalin", 
              "fecha": "1878 - 1953"
            },
            { "imagen": "videos/mao.gif", 
              "nombre": "Mao Tse-Tung", 
              "fecha": "1893 - 1976" 
            }
        ]
    },
    {
        "url": "videos/marcha_aliados.mp4",
        "nombre": "Ecos de la libertad",
        "descripcion": "En una época sumida por los totalitarismos, ¿Será capaz la libertad de triunfar y quebrar su yugo?",
        "lider": [
            { "imagen": "videos/roosevelt.gif", 
              "nombre": "Franklin D. Roosevelt", 
              "fecha": "1882 - 1945"
            },
            { "imagen": "videos/churchill.gif", 
              "nombre": "Winston Churchill", 
              "fecha": "1874 - 1965" 
            }
        ]
    },
    {
        "url": "videos/marcha_japon.mp4",
        "nombre": "El Sol del Este",
        "descripcion": "Los rayos del Sol naciente, como tentaculos, se expanden. ¿Será esta ambición la que acabe con su grandeza?",
        "lider": [
            { "imagen": "videos/hirohito.gif", 
              "nombre": "Hirohito", 
              "fecha": "1901 - 1989"
            },
            { "imagen": "videos/puyi.gif", 
              "nombre": "Puyi", 
              "fecha": "1906 - 1967" 
            }
        ]
    }    
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
        <div class="lideres">
            ${videos[actual].lider.map(lider => `
                <div class="lider">
                <div class="lider-info">
                    <img src="${lider.imagen}" alt="${lider.nombre}" />
                    <span>${lider.nombre}</span>
                    <span>${lider.fecha}</span>
                </div>
            </div>
            `).join('')}
        </div>
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
}, 10000); // Cambia el video cada 10000 ms (10 segundos)


//WIKIPEDIA
