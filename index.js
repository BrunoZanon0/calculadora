let display = document.querySelector('.visor');
parseInt(display)


function btn(value) {
    document.querySelector('.visor').innerHTML += value
}

function resultado() {
    nadaEscrito()
    let valorVisor = document.querySelector('.visor').innerHTML;
    let valorSomado = eval(valorVisor);
    document.querySelector('.visor').innerHTML = valorSomado;
    criaParagrafo()
}

function zerar() {
    document.querySelector('.visor').innerHTML = ''
}

function apagar() {
    let valorAntes = document.querySelector('.visor').innerHTML;
    let valorApagar = valorAntes.slice(0, -1)
    document.querySelector('.visor').innerHTML = valorApagar
}

function criaParagrafo() {
    let pai = document.querySelector('.historicotext');
    let filha = document.createElement('p');
    filha.innerHTML = display.innerHTML;
    pai.appendChild(filha);
}


function historico() {
    let historico = document.querySelector('.historicotext');
    if (historico.style.display == 'block') {
        historico.style.display = 'none'
    } else { historico.style.display = 'block' }
}

function zerahistorico() {
    document.querySelector('.historicotext > p').remove()
}

function nadaEscrito(){
    let nadaEscrito = document.querySelector('.visor');
    let valorNadaEscrito = nadaEscrito.value || nadaEscrito.innerHTML;   
    if (valorNadaEscrito === '') {
        nadaEscrito.innerHTML = 'Criador do projeto <br> Bruno Nascimento' 
    }
}