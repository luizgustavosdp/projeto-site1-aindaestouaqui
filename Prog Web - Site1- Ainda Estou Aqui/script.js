
//Animação de zoom no poster
const poster = document.querySelector('.poster'); // Seleciona o elemento do poster
//Animação de zoom no poster
poster.addEventListener('mouseover', () => {
    poster.style.transform = 'scale(1.2)';
    poster.style.transition = 'transform 0.5s ease';
});
//Retorna ao tamanho original quando o mouse sai do poster
poster.addEventListener('mouseout', () => {
    poster.style.transform = 'scale(1)';
});

//Animação com poster 2

//Animação de zoom no poster
const familiaposter = document.querySelector('.familiaposter'); // Seleciona o elemento do poster
//Animação de zoom no poster
familiaposter.addEventListener('mouseover', () => {
    familiaposter.style.transform = 'scale(1.2)';
    familiaposter.style.transition = 'transform 0.5s ease';
});
//Retorna ao tamanho original quando o mouse sai do poster
familiaposter.addEventListener('mouseout', () => {
    familiaposter.style.transform = 'scale(1)';
});

//Efeito de digitação na sinopse

const sinopse = document.querySelector('.sinopse');
const textoOriginal = sinopse.textContent; // Armazena o texto original da sinopse
sinopse.textContent = ''; // Limpa o texto inicialmente

let i = 0;

function digitar(){
    if(i < textoOriginal.length){ // Verifica se ainda há caracteres para digitar
        sinopse.textContent += textoOriginal[i] // Adiciona o próximo caractere ao texto da sinopse
        i++;
        setTimeout(digitar, 5)
    }
}

window.onload = digitar;

//Mostrar Trailer ao clicar na imagem
//Pega o iframe e a imagem do poster
/*
const trailer = document.querySelector('.trailer');
const posterImg = document.querySelector('.poster img');

trailer.style.display = 'none'; // Esconde o trailer inicialmente

posterImg.addEventListener('click', () => {
    trailer.style.display = 'block'; // Mostra o trailer ao clicar na imagem do poster
    trailer.scrollIntoView({behavior: 'smooth'}); 
});
*/
window.addEventListener('scroll', () => {
    const info = document.querySelector('.informacoes');
    const posicao = info.getBoundingClientRect().top;
    const alturaTela = window.innerHeight;

    if(posicao < alturaTela){
        info.style.opacity = 1;
        info.style.transform = 'translateY(0)';
        info.style.transition = '1s'; // Animação suave ao aparecer
}
});

//Luz piscante no Assistar Agora
const titulo = document.querySelector('.comprarfilme');
setInterval(() => {
    titulo.style.color = (titulo.style.color === 'blue') ? 'black' : 'blue';
}, 500);