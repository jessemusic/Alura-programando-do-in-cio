import BotaoConclui from './componetes/concluiTarefas.js'
import BotaoDeleta from './componetes/deletarTarefas.js'
const criarTarefa = (evento) => {
    evento.preventDefault()
    const input = document.querySelector('[data-form-input]')
    const valor = input.value
    const list = document.querySelector('[data-list]')
    const tarefa = document.createElement('li')
    tarefa.classList.add('task')
    const conteudo = `<p class="content">${valor}</p>`
    tarefa.innerHTML = conteudo
    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeleta())
    list.appendChild(tarefa)
    input.value = " "
}
const novaTarefa = document.querySelector('[data-form-button]');
novaTarefa.addEventListener('click', criarTarefa)