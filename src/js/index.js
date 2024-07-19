const imagens = document.querySelectorAll('.imagem-painel');
const setaVoltar = document.getElementById('btn-voltar');
const setaAvancar = document.getElementById('btn-avancar');
let imagemAtual = 0;

function esconderImagens() {
    imagens.forEach(imagem => {
        imagem.classList.remove('mostrar');
    })
}

function mostrarImagem() {
    imagens[imagemAtual].classList.add('mostrar');
}

function atualizarSetas() {
    if (imagemAtual === 0) {
        setaVoltar.classList.add('desabilitar');
    } else {
        setaVoltar.classList.remove('desabilitar');
    }

    if (imagemAtual === imagens.length - 1) {
        setaAvancar.classList.add('desabilitar');
    } else {
        setaAvancar.classList.remove('desabilitar');
    }
}

setaAvancar.addEventListener('click', function () {
    if (imagemAtual < imagens.length - 1) {
        imagemAtual++;
    };

    esconderImagens();
    mostrarImagem();
    atualizarSetas();
})

setaVoltar.addEventListener('click', function () {
    if (imagemAtual > 0) {
        imagemAtual--;
    };

    esconderImagens();
    mostrarImagem();
    atualizarSetas();
})