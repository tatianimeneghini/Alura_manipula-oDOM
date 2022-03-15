# 1823_DOM

Projeto feito durante o curso "**JS na Web: Manipule o DOM com JavaScript**", de Felipe Nascimento, na Alura.  

## Aprendizagens

#### Aula 1  
Aprendemos a utilizar o console do navegador de internet, utilizando alguns seletores que percorrem o DOM:  
- selecionar seletor específico a partir do elemento (mais geral): `document.querySelector('p')`;  
- selecionar seletor específico a partir da classe (mais específica): `document.querySelector('.content')`;  
- selecionar seletor específico a partir da classe e de qual elemento: `document.querySelector('.content').textContent`.  
  
 > DOM é a representação desse arquivo HTML em formato de nós, em que cada nó é um objeto e cada um desses objetos representa uma tag ou texto do nosso arquivo HTML.  

  A representação desse objeto é estruturado em:  
    
  Objeto | Descrição
  ----- | --------
  Window | Objeto representa a janela
  Document | Objeto que aponta para o documento atual, ou seja, onde eu está a página atual
  
   > Hierarquia, ou seja, <h1> e <p> são filhos de <body> e <body> é filho de <html>. Então, essa hierarquia pai e filho é conhecida como *parent* e *children*, dentro da estrutura do DOM, é muito importante quando formos começar a manipular os elementos.  
     
**Formato de árvore na estruturação de dados** 

#### Aula 2  

Outros métodos:
i. `document.getElementById(‘id’)` seleciona o elemento pelo id passado;  
ii. `document.getElementsByClassName(‘classe’)` retorna um array dos elementos pelo nome da classe passada;  
iii. `document.getElementsByTagName(‘tag’)` retorna um array dos elementos pelo nome da tag passada;  
iv. `document.querySelectorAll(seletor)` devolve todos os seletores com o mesmo nome.  

O `script` do `JavaScript` deve ser embaixo para não atrapalhar o carregamento da página.  

#### Aula 3

Todos os elementos na árvore do DOM são nós e todos os nós podem ser acessados via JavaScript. Os nós podem ser deletados, criados ou modificados.  
O método `appendChild` sempre adicionan no final do nó, para colocar um sub nó (filha) dentro do super nó (mãe).

Existem outros métodos que podemos utilizar para manipular nós:
- `insertBefore`(mãe, filha): coloca um nó antes do outro.
- `replaceChild`( elemento1, elemento2): substitui o nó elemento 1 pelo nó elemento2.
- `removeChild`(elemento): remove um nó da árvore.

#### Aula 4
A função imediata do javaScript (original: *Immediately-invoked function expression* - **IIFE**) determina uma função anônima que, logo após, é executada. Seu objetivo é o **encapsulamento**

Ex.: `(function(){})();`.

Isso porque as variáveis em Javascript têm como escopo a função pela qual elas foram definidas (podem ser acessadas somente dentro da função, jamais fora). Ao criar uma função anônima com execução imediata, podemos criar um escopo temporário para nossas funções e variáveis. Com isso, evitamos poluição no nosso escopo global e possíveis conflitos de variáveis ou funções com o mesmo nome.

> No projeto, a função imediata funciona como uma forma do usuário não ter acesso a determinadas regras de negócios.

#### Aula 5