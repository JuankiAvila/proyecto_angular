var llave = 0;

function randomizarLLave() {
    llave = Math.floor((Math.random() * 2));
    console.log(llave);
}

//mano_seleccionada:
//                  0:izquierda
//                  1:derecha            
function mostrarMano(mano_seleccionada) {
    switch (parseInt(llave)) {
        case 0:
            $("#izquierda").attr("src", "imagenes/key.jpg");
            $("#derecha").attr("src", "imagenes/right.png");
            break;
        case 1:
            $("#izquierda").attr("src", "imagenes/left.png");
            $("#derecha").attr("src", "imagenes/key.jpg");
            break;
    }

    if (mano_seleccionada == parseInt(llave)) {
        $("#contador_player").text(parseInt($("#contador_player").text()) + 1);
    } else {
        $("#contador_ia").text(parseInt($("#contador_ia").text()) + 1);
    }
}

function reinicioPartida() {
    $("#texto_pista").text("");
    $("#texto_esperando").text("Esperando jugada...");
    randomizarLLave();
    $("#izquierda").attr("src", "imagenes/closed1.png");
    $("#derecha").attr("src", "imagenes/closed2.png");
}

$(document).ready(function () {
    $("img").width(200);
    randomizarLLave();

    $("#izquierda").click(function () {
        $(this).attr("src", "imagenes/left.png");
        $("#texto_esperando").text("");
        mostrarMano(0);
        setTimeout(() => { reinicioPartida(); }, 1000);
    });

    $("#derecha").click(function () {
        $(this).attr("src", "imagenes/right.png");
        $("#texto_esperando").text("");
        mostrarMano(1);
        setTimeout(() => { reinicioPartida(); }, 1000);
    });

    $("#boton_reinicio").click(function () {
        $("#contador_player").text(0);
        $("#contador_ia").text(0);
        randomizarLLave();
    });

    $("#boton_pista").click(function () {
        switch (parseInt(llave)) {
            case 0:
                $("#texto_pista").text("Llave está en la mano izquierda");
                break;
            case 1:
                $("#texto_pista").text("Llave está en la mano derecha");
                break;
        }
    });
});