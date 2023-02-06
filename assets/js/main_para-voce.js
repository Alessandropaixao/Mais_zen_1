// FUNÇÃO HOME
window.onload = function() {
    const fullScreenMenuImageContainer = document.querySelector(".fullscreen-menu__image-container");
    const cardImageContainer = document.querySelector(".card__image-container");
    const body = document.querySelector("body")

    const backgrounds = ["url('../Mais_zen_1/assets/img/img_random/casa-Copia-50.png')", "url('../Mais_zen_1/assets/img/img_random/imagem_neuroarquitetura-transparente-50.png')", "url('../Mais_zen_1/assets/img/img_random/trabalho-Copia-50.png')", "url('../Mais_zen_1/assets/img/img_random/empresa1-50.png')", "url('../Mais_zen_1/assets/img/img_random/empresa2-50.png')", "url('../Mais_zen_1/assets/img/img_random/empresa4-50.png')"];
    const backgroundsBody = ["url('../Mais_zen_1/assets/img/fundo_random/fundo1.png')", "url('../Mais_zen_1/assets/img/fundo_random/fundo2.png')", "url('../Mais_zen_1/assets/img/fundo_random/fundo3.png')", "url('../Mais_zen_1/assets/img/fundo_random/fundo4.png')", "url('../Mais_zen_1/assets/img/fundo_random/fundo5.png')"]; 

    fullScreenMenuImageContainer.style.backgroundImage = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    cardImageContainer.style.backgroundImage = backgrounds[Math.floor(Math.random() * backgrounds.length)]; 
    body.style.backgroundImage = backgroundsBody[Math.floor(Math.random() * backgroundsBody.length)]; 
  };
  

// FUNÇAO BOTAO FAQ

const buttons = document.querySelectorAll(".button-slider-faq");

buttons.forEach(button => {
    button.addEventListener("click", function() {
        const answer = this.nextElementSibling;
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
});





 // FUNÇÃO HOME 

function openMenu() {
    $('.js-menu-container').addClass('is-open'); // Find element with the class 'js-menu-container' and apply an additional class of 'is-open'
}


function closeMenu() {
    $('.js-menu-container').removeClass('is-open'); // Find element with the class 'js-menu-container' and remove the class 'is-open'
}

// Document Ready

jQuery(document).ready(function($){ // When everything has finished loading

    $('.js-menu-button').click(function(){ // When the element with the class 'js-menu-button' is clicked
        openMenu(); // Run the openMenu function
    });

    $('.js-menu-close').click(function(){ // When the element with the class 'js-menu-close' is clicked
        closeMenu(); // Run the closeMenu function
    });

});

// Keyboard Accessibility

jQuery(document).keyup(function(e) { // Listen for keyboard presses

    if (e.keyCode === 27) { // 'Esc' key

        if ($('.js-menu-container').hasClass('is-open')) { // If the menu is open close it
            closeMenu(); // Run the closeMenu function
        }

    }

});

var modal = document.getElementById('formulario');

var btn = document.getElementsByClassName('add_table')[0];

var close = document.getElementsByClassName("close")[0];

var edit = document.getElementsByClassName("fa fa-pencil-square-o");

var input = document.getElementsByTagName("input");

var option = document.getElementsByTagName("option");

function clearContents(){
    modal.style.top = "-200%";
    modal.style.background = "rgba(0,0,0,0.0)";
    modal.style.zIndex = -1;
    document.getElementById('title-form').innerHTML = "Informações para Contato";
    document.getElementsByName("action")[0].value = "create";
    
}

btn.onclick = function() {
    modal.style.zIndex = 1;modal.style.top = 0;
    modal.style.background = "rgba(0,0,0,0.7)";
}

close.onclick = function() {
	clearContents();
}

window.onclick = function(event) {
    if (event.target == modal) {
        clearContents();
    }

}

