// Crear estrellas al azar
function createStars() {
    const galaxy = document.getElementById('galaxy');
    
    // Crear 200 estrellas
    for (let i = 0; i < 200; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      
      // Tamaño aleatorio
      const size = Math.random() * 3;
      star.style.width = size + 'px';
      star.style.height = size + 'px';
      
      // Posición aleatoria
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      
      // Tiempo de parpadeo aleatorio
      star.style.animationDuration = 2 + Math.random() * 3 + 's';
      star.style.animationDelay = Math.random() * 2 + 's';
      
      galaxy.appendChild(star);
    }
    
    // Crear 5 estrellas fugaces
    for (let i = 0; i < 5; i++) {
      const shootingStar = document.createElement('div');
      shootingStar.className = 'shooting-star';
      
      // Posición aleatoria
      shootingStar.style.left = Math.random() * 80 + '%';
      shootingStar.style.top = Math.random() * 80 + '%';
      
      // Tiempo aleatorio
      shootingStar.style.animationDelay = Math.random() * 10 + 's';
      shootingStar.style.animationDuration = 4 + Math.random() * 6 + 's';
      
      galaxy.appendChild(shootingStar);
    }
  }
  
  // Inicializar el formulario
  document.addEventListener('DOMContentLoaded', function() {
    createStars();
    
    const form = document.getElementById('whatsapp-form');
    
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const phone = document.getElementById('phone').value.trim();
      const message = document.getElementById('message').value.trim();
      
      if (!phone || !message) {
        alert('Por favor completa todos los campos');
        return;
      }
      
      // Eliminar cualquier carácter no numérico del teléfono
      const cleanPhone = phone.replace(/\D/g, '');
      
      // Crear la URL para la API de WhatsApp
      const whatsappUrl = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(message)}`;
      
      // Abrir en una nueva ventana/pestaña
      window.open(whatsappUrl, '_blank');
    });
  });
  
  // Matemática para el movimiento de galaxias - más estrellas en rotación
  function addGalaxyMath() {
    const galaxy = document.getElementById('galaxy');
    
    // Crear 100 estrellas en movimientos orbitales
    for (let i = 0; i < 100; i++) {
      const orbitStar = document.createElement('div');
      orbitStar.className = 'star';
      
      // Tamaño aleatorio
      const size = Math.random() * 2 + 1;
      orbitStar.style.width = size + 'px';
      orbitStar.style.height = size + 'px';
      
      // Parámetros orbitales
      const angle = Math.random() * Math.PI * 2;
      const radius = 100 + Math.random() * 200;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      // Calcular posiciones iniciales
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      
      orbitStar.style.left = x + 'px';
      orbitStar.style.top = y + 'px';
      
      // Añadir animación de órbita
      const orbitSpeed = 20 + Math.random() * 40;
      orbitStar.style.animation = `twinkle 3s infinite, orbit ${orbitSpeed}s infinite linear`;
      orbitStar.style.animationDelay = Math.random() * 2 + 's';
      
      // Añadir estilo de keyframes para la órbita específica
      const styleSheet = document.styleSheets[0];
      const keyframes = `@keyframes orbit {
        0% { transform: rotate(0deg) translateX(${radius}px) rotate(0deg); }
        100% { transform: rotate(360deg) translateX(${radius}px) rotate(-360deg); }
      }`;
      
      try {
        styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
      } catch(e) {
        console.log('Error al añadir animación: ', e);
      }
      
      galaxy.appendChild(orbitStar);
    }
  }
  
  // Añadir efecto de galaxia después de cargar el DOM
  window.addEventListener('load', function() {
    setTimeout(addGalaxyMath, 1000);
  });