var btnSoma = document.querySelector('.add');
btnSoma.addEventListener('click',function(e){
    let v1 = document.querySelector('.valor1');
    let v2 = document.querySelector('.valor2');
    let soma = parseInt(v1.value)+parseInt(v2.value);
    document.querySelector(".res").innerHTML = "O resultado é: "+soma;
    e.preventDefault();
});
var btnSubtrai = document.querySelector('.sub');
btnSubtrai.addEventListener('click',function(e){
    let v1 = document.querySelector('.valor1');
    let v2 = document.querySelector('.valor2');
    let subtrai= parseInt(v1.value)-parseInt(v2.value);
    document.querySelector(".res").innerHTML = "O resultado é: "+subtrai;
    e.preventDefault();
});
var btnMultiplica = document.querySelector('.mpy');
btnMultiplica.addEventListener('click',function(e){
    let v1 = document.querySelector('.valor1');
    let v2 = document.querySelector('.valor2');
    let multiplica= parseInt(v1.value)*parseInt(v2.value);
    document.querySelector(".res").innerHTML = "O resultado é: "+multiplica;
    e.preventDefault();
});
var btnDivide = document.querySelector('.div');
btnDivide.addEventListener('click',function(e){
    let v1 = document.querySelector('.valor1');
    let v2 = document.querySelector('.valor2');
    let divide= parseInt(v1.value)/parseInt(v2.value);
    document.querySelector(".res").innerHTML = "O resultado é: "+divide;
    e.preventDefault();
});
