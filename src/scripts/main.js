document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;


    window.addEventListener('scroll', function(){
        const posicaoAtual = this.window.scrollY;
        const header = document.querySelector('header');

        posicaoAtual < alturaHero? 
        header.classList.add('header--is-hidden'):
        header.classList.remove('header--is-hidden');
    }) 


    // Seção de atralções, programação das abas
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (botao) {

            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id='${abaAlvo}']`)

            escondeTodasAbas();
            aba.classList.add('shows__list--is-active')

            removeBotaoActive();
            botao.target.classList.add('shows__tabs__buttons--is-active')
        });
    }
    
    //Seção FAQ, accordion
    for(let i=0; i<questions.length; i++){
        questions[i].addEventListener('click', abreOuFechaResposta)
    }
});


function abreOuFechaResposta(elemento) {
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe)
}

function escondeTodasAbas() {
    const tabsContainer = buttons = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active')
    }
}

function removeBotaoActive() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__buttons--is-active')
    }
}