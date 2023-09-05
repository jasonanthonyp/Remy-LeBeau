
const nav = document.querySelector(".nav")

nav.addEventListener('mouseover', function handleMouseOver() {
  nav.style.color = 'red';
});


nav.addEventListener('mouseout', function handleMouseOut() {
  nav.style.color = 'white';
});