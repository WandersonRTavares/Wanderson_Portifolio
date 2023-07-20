
function ativaLetra(elemento) {
    const arrTexto = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    arrTexto.array.forEach((Letra, i) => {
        setTimeout(() => {
            elemento.innerHTML += Letra;
        }, 75 * i);
    });

}

ativaLetra(titulo);

const titulo = documente.querySelector('.digitando');

