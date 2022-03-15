// Importar componentes
import BotaoConclui from "./components/ConcluiTarefa.js";
import BotaoDeleta from "./components/deletaTarefa.js";

// O Encapsulamento da função imediata estava encapsulando o código inteiro.
// Com a modularização do projeto (dividir em pequenas partes), não faz mais sentido.

const criarTarefa = (evento) => {
  // Evento dos dados com uma função padrão para prevenir o comportamento de não recarregar a página
  evento.preventDefault();

  const list = document.querySelector("[data-list]");
  const input = document.querySelector("[data-form-input]");

  // captura do valor do input
  const valor = input.value;

  // método para criar um elemento do DOM
  const tarefa = document.createElement("li");

  // acessar a classe e adicionar (para ter o estilo do elemento)
  tarefa.classList.add("task");

  // para criar um Template String para interpolar um conteúdo HTML
  const conteudo = `<p class="content">${valor}</p>`;

  // propriedade do DOM chamado Inner HTML para acessar o conteúdo de um elemento
  // tarefa.innerHTML = conteudo
  tarefa.innerHTML = conteudo;

  // anexar a 'tarefa' dentro de outro elemento e dentro, o componente 'BotaoConclui'
  tarefa.appendChild(BotaoConclui());
  tarefa.appendChild(BotaoDeleta());

  // hierarquia da árvore (mãe e filha)
  list.appendChild(tarefa);

  input.value = " ";
};

const novaTarefa = document.querySelector("[data-form-button]");

// evento: click
// onde: novaTarefa
// o que: console.log
novaTarefa.addEventListener("click", criarTarefa);
