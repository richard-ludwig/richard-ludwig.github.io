var btnMaximo = document.querySelector('.max');
btnMaximo.addEventListener('click',function(e){
    let v1 = document.querySelector('.valor1');
    let v2 = document.querySelector('.valor2');
    let v3 = document.querySelector('.valor3');
    let v4 = document.querySelector('.valor4');
    let v5 = document.querySelector('.valor5');
    let v6 = document.querySelector('.valor6');
    let v7 = document.querySelector('.valor7');
    let v8 = document.querySelector('.valor8');
    let maximo = Math.max(parseInt(v1.value),parseInt(v2.value),parseInt(v3.value),parseInt(v4.value),parseInt(v5.value),parseInt(v6.value),parseInt(v7.value),parseInt(v8.value));
    document.querySelector(".res").innerHTML = "O valor máximo é: "+maximo;
    e.preventDefault();
});
var btnMinimo = document.querySelector('.min');
btnMinimo.addEventListener('click',function(e){
    let v1 = document.querySelector('.valor1');
    let v2 = document.querySelector('.valor2');
    let v3 = document.querySelector('.valor3');
    let v4 = document.querySelector('.valor4');
    let v5 = document.querySelector('.valor5');
    let v6 = document.querySelector('.valor6');
    let v7 = document.querySelector('.valor7');
    let v8 = document.querySelector('.valor8');
    let minimo = Math.min(parseInt(v1.value),parseInt(v2.value),parseInt(v3.value),parseInt(v4.value),parseInt(v5.value),parseInt(v6.value),parseInt(v7.value),parseInt(v8.value));
    document.querySelector(".res").innerHTML = "O valor minimo é: "+minimo;
    e.preventDefault();
});
