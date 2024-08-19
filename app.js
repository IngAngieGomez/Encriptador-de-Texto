//Función inicial para esconder mi Boton de copiar y el donde se mostrará nuestro mensaje.

function Condiciones_Iniciales() {
    document.getElementById("Boton_copiar").style.display="none";
    document.getElementById("Encriptado").style.display="none";
    document.getElementById("Muneco").style.display="block";
    document.getElementById("Parrafo").style.display="block";
    document.getElementById("No_se_encontro_mensaje").style.display="block";
}

Condiciones_Iniciales();




 

function Encriptar(){
    let Texto_Entrada = document.getElementById("Texto_Entrada").value;
    document.getElementById("Muneco").style.display="none";
    document.getElementById("Boton_copiar").style.display="block";
    document.getElementById("Encriptado").style.display="block";
    document.getElementById("Parrafo").style.display="none";
    document.getElementById("No_se_encontro_mensaje").style.display="none";
   
  

    let TextoEncriptado = Texto_Entrada
     .replace (/e/gi, "enter")
     .replace(/i/gi, "imes")
     .replace(/a/gi, "ai")
     .replace(/o/gi, "ober")
     .replace(/u/ig, "ufat");
    
 if(document.getElementById("Texto_Entrada").value.length !=0){


        let tets =document.getElementById('Texto_Entrada').value;
        let validar = new RegExp('[A-ZÁÉÍÓÚáéíóú0-9!"#$%&/())==?¡><]')
        if(validar.test(tets)){
           
            swal("Caracter Invalido","Por favor ingresa solo letras minúsculas y sin acentos.", "error");
            Condiciones_Iniciales();
            document.getElementById("Texto_Entrada").value="";
        }

    
    document.getElementById("Encriptado").innerHTML=TextoEncriptado;
  
  
}else{
    swal("Debes ingresar algun texto","Por favor ingresa el texto a encriptar", "error");
    document.getElementById("Parrafo").style.display="block";
    document.getElementById("No_se_encontro_mensaje").style.display="block";
    document.getElementById("Muneco").style.display="block";
    Condiciones_Iniciales();
    document.getElementById("Texto_Entrada").value="";
    
}
}

//Funcion Desencriptar//Limpia el campo luego de desencriptar//

function Desencriptar(){
    let Texto_Salida = document.getElementById("Texto_Entrada").value;
    document.getElementById("Muneco").style.display="none";
    document.getElementById("Boton_copiar").style.display="block";
    document.getElementById("Encriptado").style.display="block";
    document.getElementById("Parrafo").style.display="none";
    document.getElementById("No_se_encontro_mensaje").style.display="none";

    let Texto_Desencriptado= Texto_Salida

     .replace(/enter/gi, "e")
     .replace(/imes/gi, "i")
     .replace(/ai/gi, "a")
     .replace(/ober/gi, "o")
     .replace(/ufat/ig, "u");


     if(document.getElementById("Texto_Entrada").value.length !=0){
        document.getElementById("Encriptado").innerHTML=Texto_Desencriptado
        document.getElementById("Texto_Entrada").value="";

     }else{
        swal("Debes ingresar algun texto","Por favor ingresa el texto a desencriptar", "error");
        Condiciones_Iniciales();
     }
     }




function Copiar(){
    var copiar =Encriptado.value;
    navigator.clipboard.writeText(copiar);
    
    
    setTimeout(() => {
        anuncio.style.display = "none";
        salidaTexto.value = "";
        mostrar();
    });


    swal("Copiado","Texto copiado con exito.", "success");
    document.getElementById("Texto_Entrada").value="";
    Condiciones_Iniciales();
}