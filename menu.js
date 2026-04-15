let NormalMenu = [
    { imagen: "img/obj1.png", titulo: "Nombre del Cafe", descripcion: "Descripcion del cafe", precio: "$10.00", id: "cafe001", btn: "btn001", btnn: "btnn001"},
    { imagen: "img/obj1.png", titulo: "Nombre del Cafe", descripcion: "Descripcion del cafe", precio: "$10.00", id: "cafe002", btn: "btn002", btnn: "btnn002"},
    { imagen: "img/obj1.png", titulo: "Nombre del Cafe", descripcion: "Descripcion del cafe", precio: "$10.00", id: "cafe003", btn: "btn003", btnn: "btnn003"},
    { imagen: "img/obj1.png", titulo: "Nombre del Cafe", descripcion: "Descripcion del cafe", precio: "$10.00", id: "cafe004", btn: "btn004", btnn: "btnn004"}
];

let EspecialesMenu = [
    { imagen: "img/obj1.png", titulo: "Nombre del Cafe", descripcion: "Descripcion del cafe", precio: "$10.00", id: "cafe101", btn: "btn101", btnn: "btnn101"},
    { imagen: "img/obj1.png", titulo: "Nombre del Cafe", descripcion: "Descripcion del cafe", precio: "$10.00", id: "cafe102", btn: "btn102", btnn: "btnn102"}
];

let IdList = {};

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
                    <button class="quit-button" onclick="quitButtons(this)" id=${data.btnn}></button>
                    <button class="add-button" onclick="buttons(this)" id=${data.btn}>
                        <img src="https://www.svgrepo.com/show/423634/add-square.svg" class="svg-icon">
                    </button>
                </div>
            </div>
            <div class="circle">
                <img src="${data.imagen}" class="img-circle">
            </div>
        </div>`;
    
    TextMenu += TextHtml;

    IdList[`${data.btn}`] = 0;
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
                    <button class="quit-button" onclick="quitButtons(this)" id=${data.btnn}></button>
                    <button class="add-button" onclick="buttons(this)" id=${data.btn}>
                        <img src="https://www.svgrepo.com/show/423634/add-square.svg" class="svg-icon">
                    </button>
                </div>
            </div>
            <div class="circle">
                <img src="${data.imagen}" class="img-circle">
            </div>
        </div>`;
    
    TextEspe += TextHtml;

    IdList[`${data.btn}`] = 0;
}

MenuReference.innerHTML = TextMenu;
MenuEspeciales.innerHTML = TextEspe;

let Ncarrito = document.getElementById("n-carrito");

let contador = 0;

function IDbutton(btn) {

    let cantidad = IdList[`${btn}`];
    cantidad++;
    IdList[`${btn}`] = cantidad
    console.log(btn, " ", IdList[`${btn}`])

    let reference = document.getElementById(btn);

    TextHtml =``

    if(IdList[`${btn}`] > 0) {
        TextHtml =`
        <p>${cantidad}</p>
        <img src="https://www.svgrepo.com/show/423634/add-square.svg" class="svg-icon">`
    }

    reference.innerHTML = TextHtml;
}

function buttons(boton) {
    contador++;
    console.log(contador);

    IDbutton(boton.id)

    TextHtml =`
        <h3 class="carrito-contador pixel-font">${contador}</h3>
        <div class="circle-carrito">
            <img src="img/obj2.png" class="pixel-img img-circle">
        </div>`;

    Ncarrito.innerHTML = TextHtml;

    console.log(IdList)
}

function quitButtons(boton) {
    contador--;
    TextHtml =``;

    let reference = document.getElementById(boton.id);

    if (contador > 0) {
        console.log(contador)
        TextHtml =`<img src="https://www.svgrepo.com/show/522962/minus-square.svg" class="svg-icon">`
        reference.innerHTML = TextHtml;
    }else{
        TextHtml =``;
        reference.innerHTML = TextHtml;
    }
}