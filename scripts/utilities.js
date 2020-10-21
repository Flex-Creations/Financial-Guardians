const menuIcon = document.querySelector('.menu-icon-container');
const menuContainer = document.querySelector('.menu-container');


menuIcon.addEventListener('click', toggleMenu);


function toggleMenu() {
     menuIcon.classList.toggle('active');
     menuContainer.classList.toggle('active');
}

// var vid = document.getElementById("myVideo");

// function slowPlaySpeed() { 
//     vid.playbackRate = 0.5;
// }

// slowPlaySpeed();