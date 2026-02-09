function cambiaFoto(){
    let miimagen = document.getElementById("mifoto");
    miimagen.src ="https://cdn.pixabay.com/photo/2025/10/07/10/59/parrot-9878922_1280.jpg";
}

function comprobarAcceso(){
    let usuario= document.getElementById("nombre").value;
    let password = document.getElementById("pass").value;
    let control=false;
    debugger;
    if(usuario=="victor" && password=="123"){
        alert("Bienvenido");
        control=true;
    }else{
        alert("Error en el acceso");
    }
    
    return control;
}

function agrandarImg(nodoImagen){
    let divImagen = document.getElementById("imagenGrande");
    divImagen.innerHTML = "<img src=" + nodoImagen.src +  " />"
    console.log(nodoImagen.src);
    //nodoImagen.width=200;
}