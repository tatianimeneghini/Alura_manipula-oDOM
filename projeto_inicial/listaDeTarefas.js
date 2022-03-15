(() => {
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

  // Criar componente (independente)
  const BotaoConclui = () => {
    const botaoConclui = document.createElement("button");

    botaoConclui.classList.add("check-button");

    // propriedade INNER TEXT para inserir o texto
    botaoConclui.innerText = "Concluir";

    botaoConclui.addEventListener("click", concluirTarefa);

    return botaoConclui;
  };

  const concluirTarefa = (evento) => {
    // trazer informações do clique
    // target - propriedade em um evento
    const botaoConclui = evento.target;

    // pegar o super elemento (mãe)
    const tarefaCompleta = botaoConclui.parentElement;

    // colocar o efeito de rabisco
    tarefaCompleta.classList.toggle("done");
  };

  // Cria componente do botão Deletar
  const BotaoDeleta = () => {
    const botaoDeleta = document.createElement("button");

    botaoDeleta.innerText = "Deletar";
    botaoDeleta.addEventListener("click", deletarBotao);
    return botaoDeleta;
  };

  // Cria função que irá deletar
  const deletarBotao = (evento) => {
    const botaoDeleta = evento.target;

    // Selecionar o elemento mãe do botão, que é o elemento da lista <li>
    const tarefaDeletada = botaoDeleta.parentElement;

    // Método para remover o objeto da árvore
    tarefaDeletada.remove();

    return botaoDeleta;
  }
})();
