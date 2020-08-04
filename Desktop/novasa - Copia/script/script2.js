window.onload = function(){

    nome = localStorage.getItem('nome');
    sobreNome = localStorage.getItem('sobreNome');
    idade = localStorage.getItem('idade');
    fone = localStorage.getItem('fone');
    endereco = localStorage.getItem('endereco');
    numero = localStorage.getItem('numero');
    cidade = localStorage.getItem('cidade');
    estado = localStorage.getItem('estado');

    document.getElementById("resultado").innerHTML 
    = nome + '<br>' 
    + sobreNome + '<br>'
    + idade + '<br>'
    + fone + '<br>'
    + endereco + '<br>'
    + numero + '<br>'
    + cidade + '<br>'
    + estado + '<br>'

}