document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menuBtn');
    const menu = document.getElementById('off-Canvas');
    const main1 = document.querySelector('main')
  
    menuButton.addEventListener('click', function() {
      menu.classList.toggle('off-canvas');
      main1.classList.toggle('blur')
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('close-btn');
    const menu = document.getElementById('off-Canvas');
    const main1 = document.querySelector('main')
  
    menuButton.addEventListener('click', function() {
      menu.classList.toggle('off-canvas');
      main1.classList.toggle('blur')
    });
  });