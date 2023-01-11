var tabela = document.querySelector("#tabela-alunos");

tabela.addEventListener('click', function(event) { //preciso pegar um parâmetro, que será o evento que foi disparado.
  //pegar o elemento que foi clicado e excluir da tela
  //tendo o evento que foi disparado (event) posso através do target descobrir qual elemento o disparou.
  var elementoClicado = event.target //guardando o elemento que foi clicado, responsável pelo disparo do evento, dentro de uma variável.
  //console.log(elementoClicado); apenas para verificação se está tudo correto.
  //elementoClicado.remove(); isto por si só removeria tudo que eu clicasse, não é isso que eu quero para esse projeto.
  if(elementoClicado.classList.contains("btn-excluir")) {
    var celula = elementoClicado.parentNode; //acessando o elemento pai do btn excluir, que é a célula, ainda não é o que eu desejo apagar, mas é o primeiro passo para subir na hierarquia.
    var linha = celula.parentNode; //acessando o pai do elemento celula, que é a linha, que é o que desejo apagar.
    linha.remove();
  }
})