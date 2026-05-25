const subtitle = document.querySelector('.hero-subtitle');
if (subtitle) {
    const hora = new Date().getHours();
    if (hora >= 6 && hora < 12) {
        subtitle.textContent = "¡Buenos días! Orgullo, Raíz y Corazón";
    } else if (hora >= 12 && hora < 19) {
        subtitle.textContent = "¡Buenas tardes! Orgullo, Raíz y Corazón";
    } else {
        subtitle.textContent = "¡Buenas noches! Orgullo, Raíz y Corazón";
    }
}
const navLinks = document.querySelectorAll('nav a');
const currentPage = window.location.pathname;

navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (currentPage.includes(linkPath)) {
        link.classList.add('active-section');
    }
});
 
function updateDynamicBackground() {
    const dynamicBackgroundElement = document.getElementById('dynamic-background');
    const hora = new Date().getHours();

    dynamicBackgroundElement.classList.remove('bg-mañana', 'bg-tarde', 'bg-noche');

    if (hora >= 6 && hora < 12) {
        
        dynamicBackgroundElement.classList.add('bg-mañana');
    } else if (hora >= 12 && hora < 19) {
       
        dynamicBackgroundElement.classList.add('bg-tarde');
    } else {
        // Noche
        dynamicBackgroundElement.classList.add('bg-noche');
    }
}
const cursor = document.getElementById("custom-cursor");

const colores = ["red", "blue", "green", "purple", "orange"];
let indiceColor = 0;


document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// Cambiar color cuando se carga una nueva página
window.addEventListener("load", () => {
  cambiarColorCursor();
});

// Función para cambiar el color
function cambiarColorCursor() {
  indiceColor = (indiceColor + 1) % colores.length;
  cursor.style.backgroundColor = colores[indiceColor];
}


