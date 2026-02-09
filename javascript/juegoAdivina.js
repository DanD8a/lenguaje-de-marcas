
let numeroSecreto = 0;
let maximo = 0;
let intentos = 0;

function comprobar() {
    let radios = document.getElementsByName("rango");
    for(let i=0;i< radios.length;i++){
        //comprobamos que el radio i está o no checked
        if(radios[i].checked){
            maximo=parseInt(radios[i].value);
        }
    }
    if(numeroSecreto==0){
        numeroSecreto = Math.floor(Math.random() * maximo)+1;
    }
    console.log(numeroSecreto);

    let introducido=document.getElementById("numeroUsuario").value;
    console.log(introducido);
    intentos++;
    if(numeroSecreto<introducido){ 
        document.getElementById("resultado").innerText="Intento: "+intentos+" El numero secreto es menor al seleccionado";
    }else if(numeroSecreto==introducido){
        document.getElementById("resultado").innerText="Intento: "+intentos+" Has acertado!";
    }else{
        document.getElementById("resultado").innerText="Intento: "+intentos+" El numero secreto es mayor al seleccionado";
    }
}