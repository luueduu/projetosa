var salvar = document.getElementById("btnSalvar");

salvar.addEventListener("click", function () {

    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobreNome").value;
    var idade = document.getElementById("idade").value;
    var fone = document.getElementById("fone").value;
    var end = document.getElementById("end").value;
    var num = document.getElementById("num").value;
    var cidade = document.getElementById("cidade").value;
    var estados = document.getElementById("estados");

    localStorage.setItem('nome', nome);
    localStorage.setItem('sobreNome', sobrenome);
    localStorage.setItem('idade', idade);
    localStorage.setItem('fone', fone);
    localStorage.setItem('endereco', end);
    localStorage.setItem('numero', num);
    localStorage.setItem('cidade', cidade);
    localStorage.setItem('estado', estados[estados.selectedIndex].text);

});
