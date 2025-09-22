// Header scroll effect
window.addEventListener('scroll', function () {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth scroll to sections
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.addEventListener('DOMContentLoaded', function () {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        observer.observe(element);
    });

    // Set minimum date for travel dates
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('salida').setAttribute('min', today);
    document.getElementById('regreso').setAttribute('min', today);
});

// Update return date minimum when departure date changes
document.getElementById('salida').addEventListener('change', function () {
    document.getElementById('regreso').setAttribute('min', this.value);
});

// Search form handler
function handleSearch(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const searchData = {
        destino: formData.get('destino'),
        salida: formData.get('salida'),
        regreso: formData.get('regreso'),
        personas: formData.get('personas')
    };

    // Show loading state
    const button = event.target.querySelector('.search-button');
    const originalText = button.textContent;
    button.textContent = 'Buscando...';
    button.disabled = true;

    // Simulate search (replace with actual API call)
    setTimeout(() => {
        alert(`Búsqueda realizada para:\nDestino: ${searchData.destino}\nSalida: ${searchData.salida}\nRegreso: ${searchData.regreso}\nPersonas: ${searchData.personas}\n\n¡Redirigiendo a resultados!`);

        button.textContent = originalText;
        button.disabled = false;
    }, 2000);
}