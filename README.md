# Java

function getNumRand(min, max) {
    return Math.round(Math.random()*(max-min) + parseInt(min))
}

function creePersonaje() {
    let saludo = confirm("Bienvenido al coliseo, por favor, preparese:")
    seleccioneSexo(saludo)
}

function seleccioneSexo(a) {
    if (a) {
        let seleccioneSexo = prompt("Seleccione su sexo; 1- Mujer y 2- Hombre:")
        switch (seleccioneSexo) {
            case "1":
                alert("Perfecto, ahora seleccione su clase:")
                validarSexoM(seleccioneSexo)
                break;
            case "2":
                alert("Perfecto, ahora seleccione su clase:")
                validarSexoH(seleccioneSexo)
                break;
        }
    } else {
        alert("Decides que no quieres entrar, mueres en el acto.")
        creePersonaje(true)
        return(creePersonaje)
    }
}

function validarSexoM(b) {
    let seleccioneClaseM = prompt("Seleccione su clase: Guerrera Acrobata (1), Asesina (2), Hechicera (3).")
    if (b == 1) {
        alert("Ahora tire los dados para sus estadisticas:")
        validarEstadisticasM(validarSexoM)
    } else if (b == 2) {
        alert("Ahora tire los dados para sus estadisticas:")
        validarEstadisticasM(validarSexoM)
    } else if (b == 3) {
        alert("Ahora tire los dados para sus estadisticas:")
        validarEstadisticasM(validarSexoM)
    } else 
        alert("Por favor seleccione una clase.")
        validarSexoM(true)
        return (creePersonaje)
}

function validarSexoH(c) {
    let seleccioneClaseH = prompt("Seleccione su clase: Guerrero (1), Paladin (2), Warlock (3).")
    if (c == 1) {
        alert("Ahora tire los dados para sus estadisticas:")
        validarEstadisticasH(validarSexoH)
    } else if (c == 2) {
        alert("Ahora tire los dados para sus estadisticas:")
        validarEstadisticasH(validarSexoH)
    } else if (c == 3) {
        alert("Ahora tire los dados para sus estadisticas:")
        validarEstadisticasH(validarSexoH)
    } else
    alert("Por favor seleccione una clase.")
    validarSexoH(true)
    return (validarSexoM)
}

function validarEstadisticasM(dados) {
    let azar = alert("Tire los dados")
        while(dados != "") {
            let dado1 = getNumRand(4, 10);
            let dado2 = getNumRand(4, 10);
            let dado3 = getNumRand(4, 10);
            let dado4 = getNumRand(4, 10);
            let dado5 = getNumRand(4, 10);
            let dado6 = getNumRand(4, 10);
        }
    alert("Sus estadisticas.")
}

function validarEstadisticasH(dados) {
    let dado1 = getNumRand(4, 10);
    let dado2 = getNumRand(4, 10);
    let dado3 = getNumRand(4, 10);
    let dado4 = getNumRand(4, 10);
    let dado5 = getNumRand(4, 10);
    let dado6 = getNumRand(4, 10);
    alert(dado1, dado2, dado3, dado4, dado5, dado6)
}



creePersonaje()
