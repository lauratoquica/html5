function calcular(){
    //PROCEDO DE TRANSFERENCIA DEL FORMULARIO 
    var n1=document.getElementById("valorc").value;
    var n2=document.getElementById("numc").value;
    var n3=document.getElementById("interes").value;
    //PROCEDO DE CALCULAR DATOS JS
    var ValorA=parseFloat(n1)*parseFloat(n3); //VALOR CUOTA MES 
    var ValorB=(parseFloat(n1)*(1+parseFloat(n2)*parseFloat(n3))) //VALROR TOTAL CREDITO A PAGAR
    //PROCEDO DE TRANSFERENCIA JS AL FORMULARIO 
    document.getElementById("valora").value=ValorA;
    document.getElementById("valorb").value=ValorB.toFixed(0);
    toFixed(0);
}
function limpiar(){
    document.getElementById("valorc").value=" ";
    document.getElementById("numc").value=" ";
    document.getElementById("interes").value=" ";
}