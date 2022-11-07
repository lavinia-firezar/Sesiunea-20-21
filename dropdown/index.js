// PAS 1: Selectam elementele de care avem nevoie.
const menuButton = document.getElementById('menuButton');
const menu = document.querySelector('.menu-container');
menu.style.visibility = 'hidden';

// PAS 2: In momentul in care se declanseaza evenimentul, modificam html-ul cum avem nevoie.
function handleMenuButtonClick() {
  if( menu.style.visibility === 'visible' ) {
    // Pentru a seta o proprietate de CSS, lucrurile sunt mai simple, ne folosim de obiectul style.
    menu.style.visibility = 'hidden';
  } else {
    menu.style.visibility = 'visible';
  }
}

// PAS 3: Adaugam event listeneri pentru elementele pe care dorim sa le urmarim.
menuButton.addEventListener('click', handleMenuButtonClick);
