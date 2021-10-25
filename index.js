const today = new Date();
const thisYear = getFullYear();
footer = document.querySelector ('footer');
copyright = document.createElement('p');
copyright.innerHTML = 'Cancace' + thisYear;
footer.appendChild('copyright');