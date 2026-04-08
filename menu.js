let NormalMenu = [
    { imagen: "img/obj1.png", titulo: "Nombre del Cafe", descripcion: "Descripcion del cafe", precio: "$10.00" },
    { imagen: "img/obj1.png", titulo: "Nombre del Cafe", descripcion: "Descripcion del cafe", precio: "$10.00" },
    { imagen: "img/obj1.png", titulo: "Nombre del Cafe", descripcion: "Descripcion del cafe", precio: "$10.00" },
    { imagen: "img/obj1.png", titulo: "Nombre del Cafe", descripcion: "Descripcion del cafe", precio: "$10.00" },
];

let EspecialesMenu = [
    { imagen: "img/obj1.png", titulo: "Nombre del Cafe", descripcion: "Descripcion del cafe", precio: "$10.00" },
    { imagen: "img/obj1.png", titulo: "Nombre del Cafe", descripcion: "Descripcion del cafe", precio: "$10.00" },
];


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
                <div class="container-price">
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
                <div class="container-price">
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
}

MenuReference.innerHTML = TextMenu;
MenuEspeciales.innerHTML = TextEspe;

let contador = 0;

function buttons() {
    contador++;
    console.log(contador);
}