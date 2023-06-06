const mensaje = document.getElementById("texto-a-desencriptar");
const texto = document.getElementById('texto-a-encriptar');


document.getElementById('encriptar').onclick = function() {
    var value = encriptar(document.getElementById('texto-a-encriptar').value);
    mensaje.value = value;
    texto.value = "";
    mensaje.style.backgroundImage = "none";
    
    
}



function encriptar(stringEncriptador){
    let codigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptador = stringEncriptador.toLowerCase()

    for(let i = 0; i < codigo.length; i++){
        if(stringEncriptador.includes(codigo[i][0])){

            stringEncriptador = stringEncriptador.replaceAll(codigo[i][0], codigo[i][1])

        }

    }
    return stringEncriptador
}

document.getElementById('desEncriptar').onclick = function() {
    var value = desencriptar(document.getElementById('texto-a-encriptar').value);
    mensaje.value = value;
    texto.value = "";
    mensaje.style.backgroundImage = "none";
    
    
}

function desencriptar(stringDesEncriptador){
    let codigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesEncriptador = stringDesEncriptador.toLowerCase()

    for(let i = 0; i < codigo.length; i++){
        if(stringDesEncriptador.includes(codigo[i][1])){

            stringDesEncriptador = stringDesEncriptador.replaceAll(codigo[i][1], codigo[i][0])

        }

    }
    return stringDesEncriptador
}

document.getElementById('copiar').onclick = function() {

    navigator.clipboard.writeText(mensaje.value);

}