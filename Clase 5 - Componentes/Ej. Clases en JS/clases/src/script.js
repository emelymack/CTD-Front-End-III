class Coches {

    constructor(marca,modelo,puertas) {

        this.marca=marca;
        this.modelo=modelo;
        this.puertas=puertas;

    }

    mostrarAuto() {

        document.body.innerHTML+=`
        <h1>${this.marca}</h1>
        <h2>${this.modelo}</h2>
        <h2>${this.puertas} puertas</h2>
        `
    }

}


let coche1 = new Coches("Chevrolet","Onix","4");
let coche2 =new Coches("Hyundai","Atos","4")
console.log(coche1);
console.log(coche2);

coche1.mostrarAuto();
coche2.mostrarAuto();
coche1.mostrarAuto();