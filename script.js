
function escrevendoLetra() {


    function ativaLetra(elemento) {
        const arrTexto = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        arrTexto.forEach((letra, i) => {
            setTimeout(() => {
                elemento.innerHTML += letra;
            }, 75 * i);
        });

    }

    const titulo = document.querySelector('.digitando');
    ativaLetra(titulo);

}

//criei uma funcao para dar efeito do layout e peguei meu h2 titulo, guardo o titulo e com split dar o efeito de pegar a letra e mostra como se tivesse digitando
//fiz um loop com 2 variaveis e raliza a funcao para o loop do 75 * i e sempre puxando uma letra
//no css tem .chamando onde crio o efeito de digitando que fica om a "|" 

const ativaMenu = document.querySelector('.fa-bars');

ativaMenu.addEventListener('click', () => {
    ativaMenu.classList.toggle('fa-x')

})

escrevendoLetra()

