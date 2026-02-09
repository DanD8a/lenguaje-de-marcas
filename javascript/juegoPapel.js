let contJugador=0;
let contCPU=0;

function comprobar(manoJug){
    console.log(manoJug);

    let manoCPU=Math.floor(Math.random() * 3)+1;
    console.log(manoCPU);

    let divImagen = document.getElementById("imagenCPU");
    if(manoCPU==1){
        divImagen.innerHTML = "<h1>LA CPU ELIGE: </h1><br/><img width='10%' src='piedra.png'/>";
        console.log(manoCPU);
    }else if(manoCPU==2){
        divImagen.innerHTML = "<h1>LA CPU ELIGE: </h1><br/><img width='10%' src='tijera.png'/>";
        console.log(manoCPU);
    }else{
        divImagen.innerHTML = "<h1>LA CPU ELIGE: </h1><br/><img width='10%' src='papel.png'/>";
        console.log(manoCPU);
    }
    

    let resultado=document.getElementById("resultado");
    let victoria=document.getElementById("victoria");
    if(manoJug==manoCPU){
        resultado.innerHTML="<h1>¡Empate!</h1><br/>"+"Victorias Jugador: "+contJugador+"<br/>Victorias CPU: "+contCPU;
    }else if((manoJug==1 && manoCPU==2) || (manoJug==2 && manoCPU==3) || (manoJug==3 && manoCPU==1)){
        contJugador++;
        resultado.innerHTML="<h1>¡El jugador gana la ronda!</h1><br/>"+"Victorias Jugador: "+contJugador+"<br/>Victorias CPU: "+contCPU;
        
    }else{
        contCPU++;
        resultado.innerHTML="<h1>¡La CPU gana la ronda!</h1><br/>"+"Victorias Jugador: "+contJugador+"<br/>Victorias CPU: "+contCPU;
        
    }
    let imagenes=document.getElementsByTagName("img");
    console.log(imagenes);
    if(contJugador==3){
        //Desactivar botones
        for(let i=0;i< imagenes.length;i++){
            imagenes[i].classList.add("disabled");
        }
        victoria.innerHTML="<h1>EL JUGADOR GANA LA PARTIDA</h1><br/><button onclick='window.location.reload()';>Volver a empezar</button>";
    }
    if(contCPU==3){
        for(let i=0;i< imagenes.length;i++){
            imagenes[i].classList.add("disabled");
        }
        victoria.innerHTML="<h1>LA CPU GANA LA PARTIDA</h1><br/><button onclick='window.location.reload()';>Volver a empezar</button>";
    }
}