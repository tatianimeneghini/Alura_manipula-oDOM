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
};

export default BotaoDeleta;
