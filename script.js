
document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById('hamburger');
    const navItem = document.getElementById('nav-item');
  
    hamburger.addEventListener('click', (e) => {
      navItem.classList.toggle('active');
    });
  });

  
  