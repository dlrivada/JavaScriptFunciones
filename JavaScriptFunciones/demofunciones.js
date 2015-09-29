var saludo = function (e) {
    alert("1. Hola " + e.button.toString());
}

function saludando(e) {
    alert("2. Hola " + e);
}

//Función autoinvocada
(function () {

    //Función anónima
    document.getElementById("btn1").onclick = function (e) {
        alert("1. Hola " + e.button.toString());
    };

    //Función variable
    document.getElementById("btn2").onclick = saludando;

    //Autoinvocación de funciones
    var x = (function () { return (5 + 6) })();
    document.writeln('<br />' + typeof (x) + '<br />');
    document.writeln(x);

})();

