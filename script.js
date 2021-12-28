function botaoadd() {
    let botao = document.querySelector("button");
    botao.addEventListener("click", function () {
        mostraTarefa()
        const input = document.querySelector('input').value = '';
    });
}
botaoadd();



function mostraTarefa() {
    const lista = document.querySelector('ol')
    const input = document.querySelector('input').value
    const tarefa = document.createElement('li')
    tarefa.classList.add('tarefas')
    const textoTarefa = document.createTextNode(input)
    tarefa.appendChild(textoTarefa)
    lista.appendChild(tarefa)
}



