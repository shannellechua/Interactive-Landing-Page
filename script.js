//triggers bold and underline
document.addEventListener('DOMContentLoaded', (event) => {

document.querySelectorAll('.option').forEach(item => {
    item.addEventListener('click', event => {
      document.querySelectorAll('.option').forEach(option => option.classList.remove('active'));
      event.target.classList.add('active');

      const image = document.getElementById('product-photo');
      const selectedSize = event.target.id;
      if (selectedSize === '24oz') {
        image.src = 'images/pink24.webp';
      } else if (selectedSize === '32oz') {
        image.src = 'images/pink32.webp';
      } else if (selectedSize === '40oz') {
        image.src = 'images/pink40.webp';
      }
    });
  });
});

// triggers dark mode
function toggleDarkMode() {

  const toggle = document.getElementById('toggle');
  toggle.src = 'images/dark-moon.png';

  // Toggle the image src between moon and dark moon
  // if (toggle.src === 'moon.png') {
  //   toggle.src = 'images/dark-moon.png';
  // } else {
  //   toggle.src = 'images/moon.png';
  // }

  
  document.body.classList.toggle('dark-mode');
  
document.getElementById('header').classList.toggle('light-mode');

  document.getElementById('nav-bar').classList.toggle('dark-mode');
  document.getElementById('footer').classList.toggle('light-mode'); 
}
