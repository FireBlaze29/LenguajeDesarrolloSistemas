let NormalMenu = [
    { imagen: "img/obj1.png", titulo: "Nombre del Cafe", descripcion: "Descripcion del cafe", precio: "$10.00", id: "cafe001"},
    { imagen: "img/obj1.png", titulo: "Nombre del Cafe", descripcion: "Descripcion del cafe", precio: "$10.00", id: "cafe002"},
    { imagen: "img/obj1.png", titulo: "Nombre del Cafe", descripcion: "Descripcion del cafe", precio: "$10.00", id: "cafe003"},
    { imagen: "img/obj1.png", titulo: "Nombre del Cafe", descripcion: "Descripcion del cafe", precio: "$10.00", id: "cafe004"}
];

let EspecialesMenu = [
    { imagen: "img/obj1.png", titulo: "Nombre del Cafe", descripcion: "Descripcion del cafe", precio: "$10.00", id: "cafe101"},
    { imagen: "img/obj1.png", titulo: "Nombre del Cafe", descripcion: "Descripcion del cafe", precio: "$10.00", id: "cafe102"}
];

let IdList = [];

let MenuReference = document.getElementById("n-menu");
let MenuEspeciales = document.getElementById("e-menu");

let TextMenu = ``;
let TextEspe = ``;

for (let data of NormalMenu) {
    TextHtml = `
        <div class="general-container">
            <div class="container-text">
                <div>
                    <h1>
                        ${data.titulo}
                    </h1>
                    <h4>
                        ${data.descripcion}
                    </h4>
                </div>
                <div class="container-price" id=${data.id}>
                    <h4>
                        ${data.precio}
                    </h4>
                    <button class="add-button" onclick="buttons()">
                        <img src="https://www.svgrepo.com/show/423634/add-square.svg" class="svg-icon">
                    </button>
                </div>
            </div>
            <div class="circle">
                <img src="${data.imagen}" class="img-circle">
            </div>
        </div>`;
    
    TextMenu += TextHtml;

    IdList.push(data.id)
}

for (let data of EspecialesMenu) {
    TextHtml = `
        <div class="general-container">
            <div class="container-text">
                <div>
                    <h1>
                        ${data.titulo}
                    </h1>
                    <h4>
                        ${data.descripcion}
                    </h4>
                </div>
                <div class="container-price" id=${data.id}>
                    <h4>
                        ${data.precio}
                    </h4>
                    <button class="add-button" onclick="buttons()">
                        <img src="https://www.svgrepo.com/show/423634/add-square.svg" class="svg-icon">
                    </button>
                </div>
            </div>
            <div class="circle">
                <img src="${data.imagen}" class="img-circle">
            </div>
        </div>`;
    
    TextEspe += TextHtml;

    IdList.push(data.id)
}

MenuReference.innerHTML = TextMenu;
MenuEspeciales.innerHTML = TextEspe;

let Ncarrito = document.getElementById("n-carrito");

let contador = 0;

function buttons() {
    contador++;
    console.log(contador);

    TextHtml =`
        <h3 class="carrito-contador pixel-font">${contador}</h3>
        <div class="circle-carrito">
            <img src="img/obj2.png" class="pixel-img img-circle">
        </div>`;

    Ncarrito.innerHTML = TextHtml;
}
