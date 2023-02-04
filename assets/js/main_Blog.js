


// FUNÇAO TEXTO BLOG

const blogText = [
    'Amazon inaugurou um escritório em Seattle, nos Estados Unidos, composto por três esferas envidraçadas e repletas de vegetação, inspirado no conceito de Biofilia. O complexo possui uma arquitetura orgânica que contrasta com os grandes edifícios comerciais da cidade e é chamado de "Esferas". Os funcionários da empresa têm acesso a áreas suspensas com bancos e mesas capazes de acomodar até 800 pessoas. O escritório é decorado com mais de 40 mil plantas de espécies diferentes cultivadas fora do edifício ao longo de três anos, com paredes vivas que apresentam estratificação vertical. A Amazon acredita que o escritório pode ter um impacto positivo na produtividade e criatividade dos funcionários e oferece passeios gratuitos ao público.',
    "A neuroarquitetura é uma abordagem para projetar ambientes baseados não apenas em fatores técnicos, mas também em índices subjetivos como emoção, felicidade e bem-estar. Foi originada por Jonas Salk, médico americano que observou que os espaços influenciam nas emoções. Ele criou uma escola de pesquisa em La Jolla, California, e chamou o arquiteto Louis Kahn para projetar o edifício, misturando arte e ciência. Atualmente, a neurociência permite medir as reações do cérebro aos espaços através de técnicas como biofeedback e realidade virtual. A aplicação da neuroarquitetura envolve considerações sobre fatores como acústica, iluminação, formas, cores e escalas.",
    "A Microsoft criou escritórios na árvore em sua sede em Redmond, EUA para estimular a criatividade e aumentar a produtividade de seus funcionários. As casas na árvore têm paredes de madeira e teto alto com uma claraboia para a entrada de luz e ventilação. Elas estão localizadas a 12 metros do chão e dispõem de toda a infraestrutura de trabalho, incluindo conexão wifi e tomadas para eletrônicos. A empresa acredita que o ambiente natural e o espaço de trabalho mais flexível ajudarão os funcionários a trabalhar melhor e a colaborar uns com os outros.",
    "A neuroarquitetura é uma ciência multidisciplinar que estuda como a arquitetura afeta o cérebro e a saúde mental. O estudo é realizado por cientistas, médicos e arquitetos e conta com tecnologias como ressonância magnética para analisar a ativação das áreas do cérebro. A ANFA (Academia de Neurociência para a Arquitetura) é responsável por estimular o conceito de neuroarquitetura e promover debates sobre a sua aplicação na neurociência e arquitetura. Além disso, é possível afirmar que a maior parte das pessoas passa mais de 90% do dia em edifícios, tornando importante o desenvolvimento de ambientes aconchegantes para o bem-estar dos trabalhadores. A neuroarquitetura trabalha com elementos arquitetônicos que afetam diretamente a produtividade, criatividade e outras sensações. Recentemente, os estudos da neuroarquitetura também têm se concentrado na compreensão da importância dos espaços exteriores e como eles afetam o cérebro.",
    "Biofilia é a necessidade de estar em contato, interagir e se relacionar com a natureza. O design biofílico traz a natureza para dentro dos ambientes. A biofilia é benéfica para a redução do estresse, aumento do bem-estar, estimulação da criatividade e aumento da produtividade em ambientes corporativos. Aplicar a biofilia na arquitetura pode incluir a integração de vegetação, iluminação natural, elementos de água, formas e padrões naturais, e conexão com o exterior. Além disso, aplicar a biofilia em ambientes comerciais pode aumentar o tempo que os clientes passam no local e o quanto eles gastam.",
    'A NEUROARQ® Academy é uma instituição de ensino e capacitação brasileira focada na interseção da neurociência e arquitetura, fundada em 2019 pelas arquitetas Gabi Sartori e Priscilla Bencke. O objetivo da NEUROARQ® Academy é capacitar profissionais e difundir conhecimento sobre a "neuroarquitetura" através de sua formação, cursos, eventos, workshops, conferências e pesquisas. A instituição oferece uma variedade de programas e atividades, incluindo formação continuada, conferências internacionais, treinamentos, workshops, grupos de estudos e plataforma de conteúdos. Além disso, oferece produtos relacionados ao tema da neuroarquitetura.'
];

//Função para adicionar o conteúdo do array para o HTML
function addBlogText() {
    const blogElements = document.getElementsByClassName("blog-text");
    for (let i = 0; i < blogElements.length; i++) {
        blogElements[i].innerHTML = blogText[i];
    }
}

//Chamada da função quando a página é carregada
// window.onload = addBlogText;
    addBlogText();

// FUNÇÃO IMAGENS 
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

