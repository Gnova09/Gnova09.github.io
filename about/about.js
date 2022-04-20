
var database = [
    {
        user:"Georges",
        pass:"Bueno"
    },
    {
        user:"Miguel",
        pass:"Nova"
    }
];


//-------------Cambiando texto del HTML-----------
function nomchange(){//nombro la funcino para llamarla en el html con onclick
//document.getElementById("tt").innerText = prompt("Que texto quieres?"); 
var user = prompt("Usuario:");
var pass = prompt("Contraseña:");
    if(user === database[0].user && pass === database[0].pass){
        document.getElementById("tt").innerText = "sesion iniciada"; 
    }else{
        document.getElementById("tt").innerText = "Error al iniciar"; 
    }

}
/*
document = para saber que buscaremos en el html
getelementbyid = para saebr que debemos buscar por el id
innerhtml = para cambiar el text del objeto creado hace lo mismo que innerText
*/ 




//------------Objects-------------------
/*
var list = [
    user = {
        usuario: prompt("Usuario: "),//preguntamos por un valor, tambien podemos indicar el valor
        password: prompt("Contraseña: "), 
    }
];*/



//----------------COMO USAR LOS ARREGLOS-----------------------
/*
var list = ["perro", "gato", "conejo", "tortuga"];
var animal = prompt("Numero?");
alert(list[animal]);*/


/*
--------COMO CREAR FUNCIONES E USARLAS---------------------------
function CarKeyless(age){

    if (Number(age) < 18) {
        alert("Eres un niño");
    } else if (Number(age) > 18) {
        alert("Adelante");
    } else if (Number(age) === 18) {
        alert("Primer año");
    }
}

CarKeyless(age);
--------COMO CREAR FUNCIONES E USARLAS---------------------------
*/
