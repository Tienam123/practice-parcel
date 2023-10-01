//@prepros-append colors.js

const gridElements = document.querySelectorAll( '.block' );
gridElements.forEach( el => {
	el.style.backgroundColor = getRandomColor();
} );
console.log( gridElements );