function apostar (){
    let b=101;
    let intentos=0;
    var a=Math.round(Math.random()*100); //generar un numero al azar del 0 a 100
    //ciclo while
    while(a!=b){
        b=parseInt(prompt("INGRESE UN NUMERO AZAR [0 a 100]"));
        //condicional para mostrarpista 
        if(b>a){
            alert("EL NUMERO ES MAS BAJO");
        }else{
            alert("EL NUMERO ES MAS ALTO");
        }
        intentos++;//contador de intentos
    }
    //cuando se asierta el numero random - transf del js al form
    document.getElementById("apostado").value=b;
    document.getElementById("resultado").value=a;
    document.getElementById("salida").value="Has realizado.."+intentos+"..intentos";
    swal("FELICITACIONES USUARIO","HAS ACERTADOEL NUMERO EXITOSAMENTE","success");
}
function cancel(){
    document.getElementById("apostado").value=" ";
    document.getElementById("resultado").value=" ";
    document.getElementById("salida").value=" ";
}