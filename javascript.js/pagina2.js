// Inicializar EmailJS
emailjs.init("kPLpAuQGHlNKJBmB5");

document.addEventListener('DOMContentLoaded', () => {
    const personalForm = document.getElementById('personalForm');
    const limpiarForm = document.getElementById('limpiarForm');

    // Envío del formulario
    personalForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(personalForm);
        const data = {
            firstName: formData.get('nombre'),
            lastName: formData.get('apellido'),
            email: formData.get('email'),
        };

        emailjs.send('service_ehs41qb', 'template_2qe41t7', data)
            .then(() => {
                alert('Formulario enviado correctamente');
                personalForm.reset();
            })
            .catch(() => {
                alert('Hubo un error al enviar el formulario');
            });
    });

    // Limpiar formulario
    limpiarForm.addEventListener('click', () => {
        personalForm.reset();
    });

    // Cargar API de imagen aleatoria
    function loadImageAPI() {
        const randomImage = document.getElementById('randomImage');
        randomImage.src = `https://picsum.photos/200/300?random=${Math.floor(Math.random() * 1000)}`;
    }

    // Cambiar la imagen al presionar el botón
    const changeImageBtn = document.getElementById('changeImageBtn');
    changeImageBtn.addEventListener('click', loadImageAPI);

    // Llamar la función para cargar la imagen inicialmente
    loadImageAPI();

    // Cargar API del Sistema Solar
    function loadSolarSystemAPI() {
        const planetList = document.getElementById('solarSystem').querySelector('.planet-list');
        
        fetch('https://api.le-systeme-solaire.net/rest/bodies/')
            .then(response => response.json())
            .then(data => {
                const planets = data.bodies.filter(body => body.isPlanet);
                planets.forEach(planet => {
                    const listItem = document.createElement('li');
                    listItem.textContent = `${planet.englishName} - Tipo: ${planet.isPlanet ? 'Planeta' : 'No Planeta'}`;
                    planetList.appendChild(listItem);
                });
            })
            .catch(error => {
                console.error('Error al cargar el sistema solar:', error);
            });
    }

    loadSolarSystemAPI();
});



