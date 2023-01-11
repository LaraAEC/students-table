//console.log("Olá mundo!");

var titulo = document.querySelector(".titulo-pagina");
titulo.textContent = "Sistema - EdiCursos";

// Função simples que exibe apenas uma mensagem
function mostrarMensagem() {
    alert("O elemento foi clicado.");
}

function mostrarSegundaMensagem() {
    alert("Chamou a segunda função.");
    titulo.removeEventListener("click", mostrarSegundaMensagem);
}

// Chamando a função ao clicar no título
//titulo.onclick = mostrarMensagem;
// Chamando a função ao passar o mouse pelo título
//titulo.onmouseover = mostrarMensagem;
// Chamando a função ao clicar duas vezes no título
//titulo.ondblclick = mostrarMensagem;

titulo.addEventListener("click", mostrarMensagem);
titulo.addEventListener("click", mostrarSegundaMensagem);

var alunos = document.querySelectorAll(".aluno");

for (let i = 0; i < alunos.length; i++) {
    //console.log(alunos[i]);
    var trAluno = alunos[i];

    var tdNome = trAluno.querySelector(".td-nome");
    var nome = tdNome.textContent;

    var tdTrabalho = trAluno.querySelector(".td-trabalho");
    var trabalho = Number(tdTrabalho.textContent);

    var tdProva = trAluno.querySelector(".td-prova");
    var prova = Number(tdProva.textContent);

    var tdMedia = trAluno.querySelector(".td-media");

    var notaTrabalhoValida = validarNotaTrabalho(trabalho);
    var notaProvaValida = validarNotaProva(prova);    

    if (notaTrabalhoValida && notaProvaValida) {
        var mediaAluno = calcularMedia(trabalho, prova);
        tdMedia.textContent = mediaAluno;

        if (mediaAluno < 7) {
            //Aluno foi reprovado
            //trAluno.style.backgroundColor = "salmon";
            trAluno.classList.add("aluno-reprovado");
        }
    } else {
        tdMedia.textContent = "Notas inválidas, verifique.";
    }
}

function calcularMedia(notaTrabalho, notaProva) {
    var mediaAluno = (parseFloat(notaTrabalho) + parseFloat(notaProva)) / 2;
    return mediaAluno.toFixed(2);
}

function validarNotaTrabalho(notaTrabalho) {
    if (notaTrabalho.length == 0 || notaTrabalho < 0 || notaTrabalho > 10) {
        console.log("Nota do trabalho inválida");
        return false;
    } else {
        return true;
    }
}

function validarNotaProva(notaProva) {
    if (notaProva.length == 0 || notaProva < 0 || notaProva > 10) {
        console.log("Nota da prova inválida");
        return false;
    } else {
        return true;
    }
}