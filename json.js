var obj = {nome:"Lucas", idade:49};
var json = JSON.stringify(obj);
//console.log(json);

var obj = JSON.parse(json);
console.log(obj.idade);