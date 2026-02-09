
    let palabras = ["horoscopo", "tunel", "medicamento", "horquilla", "cafe", "hielo", "azufre"]
    let randomInt = Math.floor(Math.random() * palabras.length);
    let palabraSecreta = palabras[randomInt];
    let palabraOculta="";
    let fallos=0;
    const MAX_INTENTOS=7;

    for(let i=0;i<palabras[randomInt].length;i++){
        palabraOculta+="_";
    }

    document.getElementById("palabraSecreta").innerText=palabraOculta;
    crearBoton();


    function crearBoton(){
                let cont = document.getElementById("botones");
                let abecedario="abcdefghijklmnñopqrstuvwxyz"

                for(let i=0; i<abecedario.length;i++){
                    let letra=abecedario[i];
                    const btn = document.createElement("button");
                    btn.textContent = letra;

                    btn.onclick = () => {
                        manejarLetra(letra, btn);
                    };

                    cont.appendChild(btn);
                }
    }

    function manejarLetra(letra, boton){
        boton.disabled = true; 

        let acierto=false;
        let nuevaPalabra = "";

        for (let i = 0; i < palabraSecreta.length; i++) {
            if (palabraSecreta[i] === letra) {
                nuevaPalabra += letra;
                acierto=true;
            } else {
                nuevaPalabra += palabraOculta[i];
            }
        }

        palabraOculta = nuevaPalabra;
        document.getElementById("palabraSecreta").innerText = palabraOculta;

        if(!acierto){
            fallos++;
            document.getElementById("state").innerHTML=`<img width="400" src="ahorcado${fallos}.png">`;
        }

        if(fallos==MAX_INTENTOS){
            finalizarJuego(false);
        }
        if (!palabraOculta.includes("_")) {
            finalizarJuego(true);
        }
    }

    function finalizarJuego(final){
        let botones = document.getElementsByTagName("button");

        for (let i = 0; i < botones.length; i++) {
            botones[i].disabled = true;
        }
        if(final){
            document.getElementById("resultado").innerText="¡Has ganado!";
        }else{
            document.getElementById("resultado").innerHTML="¡Has perdido!";
        }   
    }


