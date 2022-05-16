

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
window.addEventListener("keyup", ev => {
    if (ev.keyCode === 38) 
{ 

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
        return (creePersonaje)
    }
}

const clasesM = ["Guerrera Acrobata (1)", "Asesina (2)", "Hechicera (3)."]

function validarSexoM(b) {
    let clasesM = prompt("Seleccione su clase: Guerrera Acrobata (1), Asesina (2), Hechicera (3).")
    if (b == 1) {
        alert("Ahora tire los dados para sus estadisticas:")
        validarEstadisticasM(validarSexoM)
    } else if (b == 2) {
        alert("Ahora tire los dados para sus estadisticas:")
        validarEstadisticasM(validarSexoM)
    } else if (b == 3) {
        alert("Ahora tire los dados para sus estadisticas:")
        validarEstadisticasM(validarSexoM)
    } else if (b == "") {
        alert("Por favor seleccione una clase")
        validarEstadisticasM(validarSexoM)
        return (creePersonaje)
    } else 
        alert("Por favor seleccione una clase.")
    validarSexoM(true)
    return (creePersonaje)
}

const clasesH = ["Guerrero (1)", "Paladin (2)", "Warlock (3)."]

function validarSexoH(c) {
    let clasesH = prompt("Seleccione su clase: Guerrero (1), Paladin (2), Warlock (3).")
    if (c == 1) {
        alert("Ahora tire los dados para sus estadisticas:")
        validarEstadisticasH(validarSexoH)
    } else if (c == 2) {
        alert("Ahora tire los dados para sus estadisticas:")
        validarEstadisticasH(validarSexoH)
    } else if (c == 3) {
        alert("Ahora tire los dados para sus estadisticas:")
        validarEstadisticasH(validarSexoH)
    } else if (c == "") {
        alert("Por favor seleccione una clase")
        validarEstadisticasH(validarSexoH)
        return (creePersonaje)
    } else 
        alert("Por favor seleccione una clase.")
    validarSexoH(true)
    return (creePersonaje)
}

function validarEstadisticasM(dados){
    let dado1 = getRandom(4,10)
    let dado2 = getRandom(4,10)
    let dado3 = getRandom(4,10)
    let dado4 = getRandom(4,10)
    let dado5 = getRandom(4,10)
    let dado6 = getRandom(4,10)
    alert(dado1)
    alert(dado2)
    alert(dado3)
    alert(dado4)
    alert(dado5)
    alert(dado6)
} 

function validarEstadisticasH(dados){
    let dado1 = getRandom(4,10)
    let dado2 = getRandom(4,10)
    let dado3 = getRandom(4,10)
    let dado4 = getRandom(4,10)
    let dado5 = getRandom(4,10)
    let dado6 = getRandom(4,10)
    alert(dado1)
    alert(dado2)
    alert(dado3)
    alert(dado4)
    alert(dado5)
    alert(dado6)
} 

creePersonaje() 

document.body.innerHTML = "<h1 id='gameOn'>BIENVENIDO</h1>"
}
});


