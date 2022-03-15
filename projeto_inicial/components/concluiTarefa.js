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

// Exportar padrão apenas o componente
export default BotaoConclui;

// É possível exportar padrão inserindo o termo antes da constante.
// Ex.: `export const BotaoConclui`.

// Ou, caso queira exportar também outros elementos deste arquivo, como a função.
// Ex.: `export { BotaoConclui, concluirTarefa };`
