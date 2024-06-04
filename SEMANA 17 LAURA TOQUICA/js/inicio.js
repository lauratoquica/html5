function validainputs(){
let email=document.getElementById("email");
let password=document.getElementById("password");
let ingreso=document.getElementById("login");
let emailval=email.value.trim(); // quitar espacios a ambos lados
let passwordval=password.value.trim();
let passwordok="a12345"; // constraseña de ingreso asignada
var errorf=0; //variable de control de ingreso - estado sin error
//seccion de validacion email
if(emailval===""){
ocErrorform(email, "Por favor ingrese su email");
errorf=1; // activa error
}
else if(!valEmail(emailval)){
ocErrorform(email,"Por favor ingrese su email");
errorf=1; // activa error ocurrido
}
else{
exitosform(email);
}
//seccionn de validacion pasword
if(passwordval===""){
ocErrorform(password,"Por favor su contraseña");
errorf=1;
}else if(passwordval != passwordok){
ocErrorform(password,"Contraseña incorrecta...");
errorf=1;
}
else{
exitosform(password);
}
//seccion de validacion ingreso exitoso
if(errorf==0){
ingreso.addEventListener('click',function(){
swal("ACCESO PERMITIDO A PLATAFORMMA WEB","CLICK OK para continuar..","success");
})
}
//
return false; // pausa en mennsaje alerta
//SECCIONN DEFINICION DE FUNCION ERROR
function ocErrorform(input,message){
let formControl=input.parentElement;
let small=formControl.querySelector("small");
formControl.className="form-control error";
small.inneText=message;
}
// SECCION DEFINICION DE FUNCION EXITOSO
function exitosform(input){
let formControl=input.parentElement;
formControl.className="form-control success";
}
//Expresion regular Email
function valEmail(email){
    return /^[a-z0-9_\.-]+@[a-z\.-]+\.[a-z\.]{2,6}$/.test(email);
    }
}
//seccion mostrar contraseña
function mostrarSeña(){
var tipo=document.getElementById("password");
if(tipo.type="password"){
tipo.type="text";// se muestra contraseña
}else{
tipo.type="password"; // se oculta contraseña
}
}