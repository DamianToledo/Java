//Math.ceil(Math.random()*10)


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
        validarEstadisticasM(estadisticasM)
    } else if (b == 2) {
        alert("Ahora tire los dados para sus estadisticas:")
        validarEstadisticasM(estadisticasM)
    } else if (b == 3) {
        alert("Ahora tire los dados para sus estadisticas:")
        validarEstadisticasM(estadisticasM)
    } else 
        alert("Por favor seleccione una clase.")
        validarSexoM(true)
        return (validarSexoM)
}

function validarSexoH(c) {
    let seleccioneClaseH = prompt("Seleccione su clase: Guerrero (1), Paladin (2), Warlock (3).")
    if (c == 1) {
        alert("Ahora tire los dados para sus estadisticas:")
        validarEstadisticasH(estadisticasH)
    } else if (c == 2) {
        alert("Ahora tire los dados para sus estadisticas:")
        validarEstadisticasH(estadisticasH)
    } else if (c == 3) {
        alert("Ahora tire los dados para sus estadisticas:")
        validarEstadisticasH(estadisticasH)
    } else
    alert("Por favor seleccione una clase.")
    validarSexoH(true)
    return (validarSexoM)
}

function validarEstadisticasM(dados) {
    let estadisticasM = alert("Ahora veremos las estadisticas dejadas al azar:")
    if (dados) {
        let azar = alert(Math.ceil(Math.random()*10))
    }

}



creePersonaje()