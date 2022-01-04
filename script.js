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
        const tarefa = document.querySelectorAll('li');
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
    const limpar = document.getElementById("apaga-tudo")
    limpar.addEventListener("click", function () {
        lista.innerHTML = ''; //substitui o HTML pelo "vazio", ou seja, apaga a lista. 

        localStorage.clear() //apaga tudo do localStorage
    })
}
limpar()

function tarefaCompleta() {
    const tarefas = document.getElementById('lista-tarefas');
    tarefas.addEventListener('dblclick', function (event) {
        const tarefa = document.querySelectorAll('li');
        for (let index = 0; index < tarefa.length; index += 1) {
            if (tarefa[index].classList.contains('completed')) {
            }
        }
        event.target.classList.toggle('completed'); //toglle verifica se tem ou não a classe. Se tiver ela é removida, se não tiver é adicionada ao disparar o evento.
    });
}
tarefaCompleta()

function apagaTarefaCompleta() {
    const remover = document.getElementById("remover-finalizados");
    remover.addEventListener('click', function () {
        const tarefa = document.querySelectorAll('li');
        for (let index = 0; index < tarefa.length; index += 1) {
            if (tarefa[index].classList.contains('completed')) {
                tarefa[index].parentNode.removeChild(tarefa[index])
            }
        }
        localStorage.clear() //apaga finalizados do localStorage
    });
}
apagaTarefaCompleta()


function salvarLocalStorage() {
    const botao = document.getElementById('salvar-tarefas');
    botao.addEventListener('click', function () {
        const tarefas = document.getElementById('lista-tarefas');
        localStorage.setItem('lista', JSON.stringify(tarefas.innerHTML)) //cria/salva o item no localStorage e converte os valores do JS para string.

    })
}
salvarLocalStorage()

function restauraLocalStorage() {
    const tarefas = document.getElementById('lista-tarefas');
    const restaura = localStorage.getItem('lista'); //recupera o valor da chave;
    tarefas.innerHTML = JSON.parse(restaura); //recebe uma string JSON e a transforma em um objeto JavaScript.

}
restauraLocalStorage()
