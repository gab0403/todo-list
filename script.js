function botaoadd() {
    const botao = document.querySelector("button");
    botao.addEventListener("click", function () {
        mostraTarefa()
        const input = document.querySelector('input').value = ''; //limpa o input depois de criar a tarefa.
    });
}
botaoadd();

function mostraTarefa() {
    const lista = document.querySelector('ol')
    const input = document.querySelector('input').value
    const tarefa = document.createElement('li')
    tarefa.classList.add('tarefas')
    const textoTarefa = document.createTextNode(input) //cria o texto que for adicionado no input.
    tarefa.appendChild(textoTarefa)
    lista.appendChild(tarefa)
}

function corTarefa() {
    const tarefas = document.getElementById('lista-tarefas');
    tarefas.addEventListener('click', function (event) {
        let tarefa = document.querySelectorAll('li');
        for (let index = 0; index < tarefa.length; index += 1) {
            if (tarefa[index].style.backgroundColor = '#bde0fe') {
            }
        }
        event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    });
}
corTarefa()


function limpar() {
    const lista = document.querySelector('ol')
    let limpar = document.getElementById("apaga-tudo")
    limpar.addEventListener("click", function () {
        lista.innerHTML = ''; //substitui o HTML pelo "vazio", ou seja, apaga a lista. 
    })
}
limpar()