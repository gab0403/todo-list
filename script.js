//Requisito 5 - um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo.
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


//Requisito 7 e 8 - Clicar em um item da lista deve alterar a cor de fundo do item para cinza, não deve ser possível selecionar mais de um elemento da lista ao mesmo tempo.
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


//Requisito 9 - Clicar duas vezes em um item, faz com que ele seja riscado, indicando que foi completo. Deve ser possível desfazer essa ação clicando novamente duas vezes no item.
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


//Requisito 10 - apaga todos os itens da lista.
function limpar() {
    const lista = document.querySelector('ol')
    const limpar = document.getElementById("apaga-tudo")
    limpar.addEventListener("click", function () {
        lista.innerHTML = ''; //substitui o HTML pelo "vazio", ou seja, apaga a lista. 

        localStorage.clear() //apaga tudo do localStorage
    })
}
limpar()


//Requisito 11 - remove somente os elementos finalizados da sua lista.
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


//Requisito 12 - salve o conteúdo da lista. Se você fechar e reabrir a página, a lista continua no estado em que estava.
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


//Requisito 13 - move o item selecionado para cima ou para baixo na lista de tarefas.
function btnCima() {
    const btnMoveCima = document.getElementById('mover-cima');
    btnMoveCima.addEventListener("click", function () {
        let tarefaSelected = document.querySelector(".selected");
        if (tarefaSelected && tarefaSelected.previousElementSibling) {
            tarefaSelected.parentNode.insertBefore(tarefaSelected, tarefaSelected.previousSibling);

        }
    })
}
btnCima()

function btnBaixo() {
    const btnMoveBaixo = document.getElementById('mover-baixo');
    btnMoveBaixo.addEventListener("click", function () {
        let tarefaSelected = document.querySelector(".selected");
        if (tarefaSelected && tarefaSelected.nextElementSibling) {
            tarefaSelected.parentNode.insertBefore(tarefaSelected.nextSibling, tarefaSelected);
        }
    })
}
btnBaixo()


//Requisito 14 - remove o item selecionado.
function tarefaSelecionada() {
    const tarefas = document.getElementById('lista-tarefas');
    tarefas.addEventListener('click', function (event) {
        const tarefa = document.querySelectorAll('li');
        for (let index = 0; index < tarefa.length; index += 1) {
            tarefa[index].classList.remove('selected')
        }
        event.target.classList.add('selected');
    });
}
tarefaSelecionada()

function apagaTarefaSelecionada() {
    const remover = document.getElementById("remover-selecionado");
    remover.addEventListener('click', function () {
        const tarefa = document.querySelectorAll('li');
        for (let index = 0; index < tarefa.length; index += 1) {
            if (tarefa[index].classList.contains('selected')) {
                tarefa[index].parentNode.removeChild(tarefa[index])
            }
        }
        localStorage.clear() //apaga finalizados do localStorage
    });
}
apagaTarefaSelecionada()