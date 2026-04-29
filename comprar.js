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

class coffes {
    // Constructor: se ejecuta al crear una instancia
    constructor(listaN, listaE) {
        this.NormalMenu = listaN;
        this.EspecialesMenu = listaE;
        this.IdList = {};
        this.contador = 0;
        this.allPag = document.getElementById("all-pag");
        this.Ncarrito = document.getElementById("n-carrito");
        this.carritoCompra = document.getElementById("sellcart");

        this.buttons = this.buttons.bind(this);
        this.quitButtons = this.quitButtons.bind(this);
        this.comprar = this.comprar.bind(this);
    }
  
    PrintMenu() {
        let TextHtml = `
            <h2 class="pixel-font text-tabla">Menu</h2>
        
            <div class="pixel-font pixel-img central-container" id="n-menu"></div>
    
            <h2 class="pixel-font text-tabla">Especiales del día</h2>
    
            <div class="pixel-font pixel-img central-container" id="e-menu"></div>
    
            <div class="carrito-general" id="n-carrito">
                <div class="circle-carrito">
                    <button class="sellcart">
                        <img src="img/obj2.png" class="pixel-img img-circle">
                    </button>
                </div
            </div>`

        this.allPag.innerHTML = TextHtml;

        this.PintContentMenu();
    }

    PintContentMenu(){
        const self = this;

        let MenuReference = document.getElementById("n-menu");
        let MenuEspeciales = document.getElementById("e-menu");

        let TextMenu = ``;
        let TextEspe = ``;

        for (let data of this.NormalMenu) {
            let TextHtml = `
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
                            <button class="quit-button" id=${data.btnn}></button>
                            <button class="add-button" id=${data.btn}>
                                <img src="https://www.svgrepo.com/show/423634/add-square.svg" class="svg-icon">
                            </button>
                        </div>
                    </div>
                    <div class="circle">
                        <img src="${data.imagen}" class="img-circle">
                    </div>
                </div>`;
            
            TextMenu += TextHtml;

            this.IdList[`${data.btn}`] = 0;
        }

        for (let data of this.EspecialesMenu) {
            let TextHtml = `
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
                            <button class="quit-button" id=${data.btnn}></button>
                            <button class="add-button" id=${data.btn}>
                                <img src="https://www.svgrepo.com/show/423634/add-square.svg" class="svg-icon">
                            </button>
                        </div>
                    </div>
                    <div class="circle">
                        <img src="${data.imagen}" class="img-circle">
                    </div>
                </div>`;
            
            TextEspe += TextHtml;

            this.IdList[`${data.btn}`] = 0;
        }

        MenuReference.innerHTML = TextMenu;
        MenuEspeciales.innerHTML = TextEspe;

        this.asignarEventos();
    }

    asignarEventos() {
        // Asignar eventos a todos los botones "add-button"
        const addButtons = document.querySelectorAll('.add-button');
        addButtons.forEach(button => {
            button.removeEventListener('click', this.buttons);
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                this.buttons(button);
            });
        });

        // Asignar eventos a todos los botones "quit-button"
        const quitButtons = document.querySelectorAll('.quit-button');
        quitButtons.forEach(button => {
            button.removeEventListener('click', this.quitButtons);
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                this.quitButtons(button);
            });
        });

        const carrito = document.querySelector('.circle-carrito button');
        if (carrito) {
            carrito.removeEventListener('click', this.comprar);
            carrito.addEventListener('click', (e) => {
                e.stopPropagation();
                this.comprar();
            });
        }
    }

    IDbutton(btn) {

        let cantidad = this.IdList[`${btn}`];
        cantidad++;
        this.IdList[`${btn}`] = cantidad
        console.log(btn, " ", this.IdList[`${btn}`])

        let reference = document.getElementById(btn);

        let TextHtml =``

        if(this.IdList[`${btn}`] > 0) {
            TextHtml =`
            <p>${cantidad}</p>
            <img src="https://www.svgrepo.com/show/423634/add-square.svg" class="svg-icon">`
        }

        reference.innerHTML = TextHtml;
    }

    buttons(boton) {
        this.contador++;
        console.log(this.contador);

        this.IDbutton(boton.id)

        let TextHtml =`<h3 class="carrito-contador pixel-font">${this.contador}</h3>`;

        this.Ncarrito.innerHTML = TextHtml;

        let contenedor = boton.parentElement;
        let NBoton = contenedor.children[1];

        let reference2 = document.getElementById(NBoton.id);

        if (this.contador > 0) {
            let TextHtml2 =`<img src="https://www.svgrepo.com/show/522962/minus-square.svg" class="svg-icon">`
            reference2.innerHTML = TextHtml2;
        }

        console.log(this.IdList)
    }

    quitButtons(boton) {
        this.contador--;
        let TextHtml =``;

        let reference = document.getElementById(boton.id);

        let contenedor = boton.parentElement;
        let NBoton = contenedor.children[2];

        let reference2 = document.getElementById(NBoton.id);

        let cantidad = this.IdList[`${NBoton.id}`];
        cantidad--;
        this.IdList[`${NBoton.id}`] = cantidad

        let TextHtmlcart =`<h3 class="carrito-contador pixel-font">${this.contador}</h3>`;

        this.Ncarrito.innerHTML = TextHtmlcart;

        let TextHtmlNboton = ``;

        if (cantidad > 0) {

            console.log(this.contador)
            TextHtml =`<img src="https://www.svgrepo.com/show/522962/minus-square.svg" class="svg-icon">`
            reference.innerHTML = TextHtml;

            let TextHtmlcart =`<h3 class="carrito-contador pixel-font">${this.contador}</h3>`;
            this.Ncarrito.innerHTML = TextHtmlcart;

            TextHtmlNboton =`
                <p>${cantidad}</p>
                <img src="https://www.svgrepo.com/show/423634/add-square.svg" class="svg-icon">`

        }else {
            TextHtml =``;
            reference.innerHTML = TextHtml;

            TextHtmlNboton =`
                <img src="https://www.svgrepo.com/show/423634/add-square.svg" class="svg-icon">`
        } 
        
        if (this.contador < 1){

            TextHtmlcart =`<h3 class="carrito-contador pixel-font"> </h3>`;
            this.Ncarrito.innerHTML = TextHtmlcart;
        }

        reference2.innerHTML = TextHtmlNboton;
    }

    comprar(){

        let TextHtml = ``;

        this.allPag.innerHTML = TextHtml

    }

}

// --- USO DE LA CLASE ---

// Crear instancias (objetos)
const inicio = new coffes(NormalMenu, EspecialesMenu);
inicio.PrintMenu();