const hover = document.getElementsByClassName('introduction');


hover.addEventListener('mouseover', function handleMouseOver() {
  hover.style.color = 'green';
});


hover.addEventListener('mouseout', function handleMouseOut() {
  hover.style.color = 'white';
});

const logo = document.getElementsByClassName('logo');

logo.addEventListener("click", function(e) {
    alert("Hey!");
});

