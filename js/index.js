//Obtem o botão do formulário da página HTML
var btnSalvarAluno = document.querySelector("#btnSalvarAluno");

//Executa a função anonima ao clicar no botão
btnSalvarAluno.addEventListener("click", function (event) {
    //Evita o comportamento padrão que seria recarregar a página
    event.preventDefault();
    
    //Obtem o formulário da nossa página HTML
    var frmAluno = document.querySelector("#frmAluno");

    //Validar campos do formulário
    if (validarFormularioAluno(frmAluno) == false) {
        return;
    }

    var aluno = obtemAlunoDoFormulario(frmAluno);
    var linhaAluno = criaLinhaAluno(aluno);

    //Coloca o elemento tr como filha da tabela de alunos
    var tabelaAlunos = document.querySelector("#tabela-alunos").querySelector("tbody");
    tabelaAlunos.appendChild(linhaAluno);

    frmAluno.reset();
})

//função que cria um objeto aluno igual ao que nossa API está retornando, assim padroniza-se, para poder com a funnção criaLinhaAluno se criar a linha com seus dados, que a priori, buscava-se pelo value do input.
//Cria um objeto aluno, igual ao que a API está retornando, fazendo com que os dados que estão na tela se transformem em um objeto igual ao objeto que a API vai retornar para a gente.
function obtemAlunoDoFormulario(frmAluno) {
    var aluno = {
        nome: frmAluno.nome.value,
        trabalho: frmAluno.trabalho.value,
        prova: frmAluno.prova.value
    }
    return aluno;
}

function criaLinhaAluno(aluno) {
    //Cria um elemento tr dentro do documento HTML
    var linhaAluno = document.createElement("tr");

    //Coloca os elementos td como filhos do elemento tr
    linhaAluno.appendChild(criaColuna(aluno.nome));
    linhaAluno.appendChild(criaColuna(aluno.trabalho));
    linhaAluno.appendChild(criaColuna(aluno.prova));
    linhaAluno.appendChild(criaColuna(calcularMedia(aluno.trabalho, aluno.prova)));
    //Coloca a 'coluna ações' dentro da linha
    linhaAluno.appendChild(criaColunaAcoes());

    return linhaAluno;
}

function criaColuna(valor) {
    var coluna = document.createElement("td");
    coluna.textContent = valor;
    return coluna;
}

function criaColunaAcoes() {
    //Cria a 'coluna ações'
    var colunaAcoes = document.createElement("td"); //crio o elemento
    colunaAcoes.classList.add("td-acoes"); //coloco a classe dele

    //Cria o botão excluir
    var botaoExcluir =document.createElement("span"); //crio o elemento
    botaoExcluir.classList.add("btn-excluir"); //coloco a classe desse elemento
    botaoExcluir.textContent = "excluir"; //coloco o texto que esse elemento contém

    //Coloca esse botão dentro da 'coluna de ações'
    colunaAcoes.appendChild(botaoExcluir);

    return colunaAcoes;
}

function validarFormularioAluno(frmAluno) {
    var divMensagens = document.querySelector("#divMensagens")
    divMensagens.textContent = "";

    if (frmAluno.nome.value.length == 0 || frmAluno.trabalho.value.length == 0 || frmAluno.prova.value.length == 0) {
        criaMensagem("Preencha todos os campos.");
        return false;
    }

    if ( validarNotaTrabalho(frmAluno.trabalho.value) == false ) {
        criaMensagem("Nota do Trabalho inválida.");
        return false;
    }
    if ( validarNotaProva(frmAluno.prova.value) == false ) {
        criaMensagem("Nota da Prova inválida.");
        return false;
    }
    
    return true;
}

function criaMensagem(texto) {
    var msg = document.createElement("div");
    msg.classList.add("alert");
    msg.classList.add("alert-warning");
    msg.textContent = texto;
    
    var divMensagens = document.querySelector("#divMensagens");
    divMensagens.appendChild(msg);
}