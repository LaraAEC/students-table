var btnConsultar = document.querySelector("#btnConsultarAluno");

btnConsultar.addEventListener('click', function() {
  //para acessar uma API externa usamos um objeto do JS que todos os navegadores atuais tem por padrão.
  var xmlhttp = new XMLHttpRequest(); //instanciando meu objeto (ele que nos permite fazer requisições para uma API).
  
  //Abrindo conexão entre meu projeto frontend e a API no backend.
  //Note que definimos o método GET - quero puxar/consultar conteúdo da API.
  //Note que essa URL é o endpoint da minha API que vai retornar todos os alunos.
  xmlhttp.open("GET", "http://localhost:8080/aluno/listar") //Abrir conexão entre os mundos(defino o método e digo o endpoint que desejo chegar).
  xmlhttp.send(); //Enviar uma requisição para esperar o resultado.
  xmlhttp.addEventListener("load", function() { //para obter o resultado, espero o evento de load e executa a função
    //console.log(xmlhttp.responseText); //texto que a API retornou
    var listaDeAlunos = JSON.parse(xmlhttp.responseText); //convertendo a resposta em algo que o JS entenda - JSON - que tranforma o que era um texto aparentemente comum em objetos e listas que o JS entende.
    //console.log(listaDeAlunos);

    //Proximo passo é percorrer essa lista e colocar esses dados em nossa tabela para que o usuário possa vê-los.
    listaDeAlunos.forEach(aluno => { //percorre cada item da minha lista e coloca na variável passada via parâmetro.
      //console.log(aluno);
      adicionaAlunoNaTabela(aluno);//chamando a função que vai pegar os dados e inserir na tabela. Passamos por parâmetro o aluno que estamos percorrendo na lista.

    });

  });

});

function adicionaAlunoNaTabela(aluno) {
  var tabelaAlunos = document.querySelector("#tabela-alunos").querySelector("tbody"); //referenciando a tabela onde quero colocar a linha.
  var linha = criaLinhaAluno(aluno); //criando a linha com a função criaLinhaAluno já definida em form-aluno.js.

  tabelaAlunos.appendChild(linha); //insere a linha que acabei de criar na tabela.
}