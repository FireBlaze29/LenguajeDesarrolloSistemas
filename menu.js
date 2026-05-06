let NormalMenu = [
    { imagen: "img/cafe001.png", titulo: "CAFE AMERICANO", descripcion: "Cafe natural suave y ligero preparado al instante.", precio: "$8.00", id: "cafe001", btn: "btn001", btnn: "btnn001"},
    { imagen: "img/cafe002.png", titulo: "CAPPUCCINO", descripcion: "Hecho de Leche y Café con un toque cremoso.", precio: "$10.00", id: "cafe002", btn: "btn002", btnn: "btnn002"},
    { imagen: "img/cafe003.png", titulo: "ESPRESSO", descripcion: "Café de aroma  y  sabor intenso", precio: "$12.00", id: "cafe003", btn: "btn003", btnn: "btnn003"},
    { imagen: "img/cafe004.png", titulo: "ESPRESSO DOBLE", descripcion: "Café puro e intenso, con doble deenergía para empezar el dia", precio: "$13.00", id: "cafe004", btn: "btn004", btnn: "btnn004"},
    { imagen: "img/cafe005.png", titulo: "CAFE CON LECHE", descripcion: "Ligeramente amargo pero equilibrado con leche y azúcar al gusto", precio: "$10.00", id: "cafe005", btn: "btn005", btnn: "btnn005"}
];

let EspecialesMenu = [
    { imagen: "img/cafe006.png", titulo: "INFUCIONES", descripcion: "Té, Anis, Manzanilla, Frutos Rojos", precio: "$6.00", id: "cafe101", btn: "btn101", btnn: "btnn101"},
    { imagen: "img/cafe007.png", titulo: "CHOCOLATADA", descripcion: "Elabora con una tableta de chocolate con leche pero dulce y suave", precio: "$12.00", id: "cafe102", btn: "btn102", btnn: "btnn102"}
];

class coffes {
    constructor(listaN, listaE) {
        this.NormalMenu = listaN;
        this.EspecialesMenu = listaE;
        this.IdList = {};
        this.SellBackUp = [];
        this.totalItems = 0;
        this.totlaPrice = 0;
        this.contador = 0;

        // IMPORTANTE: Enlazar todos los métodos que se usan como callbacks
        this.buttons = this.buttons.bind(this);
        this.quitButtons = this.quitButtons.bind(this);
        this.comprar = this.comprar.bind(this);
        this.PrintMenu = this.PrintMenu.bind(this);
        this.PintContentMenu = this.PintContentMenu.bind(this);
        this.generarCompra = this.generarCompra.bind(this);
        this.ButtonVolver = this.ButtonVolver.bind(this);
        this.compareCart = this.compareCart.bind(this);
    }
  
    PrintMenu() {
        this.contador = 0;
        let allPag = document.getElementById("all-pag");
        
        let TextHtml = `
            <h2 class="pixel-font text-tabla">Menu</h2>
            <div class="pixel-font pixel-img central-container" id="n-menu"></div>
            <h2 class="pixel-font text-tabla">Especiales del día</h2>
            <div class="pixel-font pixel-img central-container" id="e-menu"></div>
            <div class="carrito-general">
                <div id="n-carrito"></div>
                <div class="circle-carrito">
                    <button class="sellcart" id="sellcart">
                        <img src="img/obj2.png" class="pixel-img img-circle">
                    </button>
                </div>
            </div>`;

        allPag.innerHTML = TextHtml;
        this.PintContentMenu();

        // Obtener el botón del carrito y configurarlo
        let sellcart = document.getElementById("sellcart");
        if (sellcart) this.compareCart(false);
    }

    PintContentMenu() {
        let MenuReference = document.getElementById("n-menu");
        let MenuEspeciales = document.getElementById("e-menu");

        let TextMenu = "";
        let TextEspe = "";

        for (let data of this.NormalMenu) {
            let TextHtml = `
                <div class="general-container efect-menu">
                    <div class="container-text">
                        <div>
                            <h1>${data.titulo}</h1>
                            <h2>${data.descripcion}</h2>
                        </div>
                        <div class="container-price" id="${data.id}">
                            <h4>${data.precio}</h4>
                            <button class="quit-button" id="${data.btnn}"></button>
                            <button class="add-button" id="${data.btn}">
                                <img src="https://www.svgrepo.com/show/423634/add-square.svg" class="svg-icon">
                            </button>
                        </div>
                    </div>
                    <div class="circle">
                        <img src="${data.imagen}" class="img-circle">
                    </div>
                </div>`;
            
            TextMenu += TextHtml;
            this.IdList[data.btn] = 0;
        }

        for (let data of this.EspecialesMenu) {
            let TextHtml = `
                <div class="general-container efect-menu">
                    <div class="container-text">
                        <div>
                            <h1>${data.titulo}</h1>
                            <h2>${data.descripcion}</h2>
                        </div>
                        <div class="container-price" id="${data.id}">
                            <h4>${data.precio}</h4>
                            <button class="quit-button" id="${data.btnn}"></button>
                            <button class="add-button" id="${data.btn}">
                                <img src="https://www.svgrepo.com/show/423634/add-square.svg" class="svg-icon">
                            </button>
                        </div>
                    </div>
                    <div class="circle">
                        <img src="${data.imagen}" class="img-circle">
                    </div>
                </div>`;
            
            TextEspe += TextHtml;
            this.IdList[data.btn] = 0;
        }

        MenuReference.innerHTML = TextMenu;
        MenuEspeciales.innerHTML = TextEspe;
        this.asignarEventos();
    }

    asignarEventos() {
        const addButtons = document.querySelectorAll('.add-button');
        addButtons.forEach(button => {
            // Remover eventos previos para evitar duplicados
            button.removeEventListener('click', this.buttons);
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                this.buttons(button);
            });
        });

        const quitButtons = document.querySelectorAll('.quit-button');
        quitButtons.forEach(button => {
            button.removeEventListener('click', this.quitButtons);
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                this.quitButtons(button);
            });
        });
    }
    
    compareCart(bool) {
        let sellcart = document.getElementById("sellcart");
        if (!sellcart) return;
        // Evitar duplicar el evento
        sellcart.removeEventListener('click', this.comprar);
        sellcart.addEventListener('click', this.comprar);
        sellcart.disabled = !bool;
    }

    IDbutton(btn) {
        let cantidad = this.IdList[btn];
        cantidad++;
        this.IdList[btn] = cantidad;

        let reference = document.getElementById(btn);
        if (!reference) return;

        let TextHtml = "";
        if (this.IdList[btn] > 0) {
            TextHtml = `<p class="pixel-font svg-number">${cantidad}</p><img src="https://www.svgrepo.com/show/423634/add-square.svg" class="svg-icon">`;
        }
        reference.innerHTML = TextHtml;
    }

    buttons(boton) {
        let Ncarrito = document.getElementById("n-carrito");
        this.contador++;
        this.IDbutton(boton.id);

        let TextHtml = `<h3 class="carrito-contador pixel-font">${this.contador}</h3>`;
        if (Ncarrito) Ncarrito.innerHTML = TextHtml;

        let contenedor = boton.parentElement;
        let NBoton = contenedor.children[1]; // botón quit
        let reference2 = document.getElementById(NBoton.id);
        if (reference2 && this.contador > 0) {
            reference2.innerHTML = `<img src="https://www.svgrepo.com/show/522962/minus-square.svg" class="svg-icon">`;
        }

        this.compareCart(true);
    }

    quitButtons(boton) {
        if (this.contador <= 0) return;
        this.contador--;

        let reference = document.getElementById(boton.id);
        let contenedor = boton.parentElement;
        let NBoton = contenedor.children[2]; // botón add correspondiente
        let reference2 = document.getElementById(NBoton.id);

        let cantidad = this.IdList[NBoton.id];
        if (cantidad > 0) cantidad--;
        this.IdList[NBoton.id] = cantidad;

        let Ncarrito = document.getElementById("n-carrito");
        if (Ncarrito) {
            Ncarrito.innerHTML = `<h3 class="carrito-contador pixel-font">${this.contador}</h3>`;
        }

        let TextHtmlNboton = "";
        if (cantidad > 0) {
            if (reference) reference.innerHTML = `<img src="https://www.svgrepo.com/show/522962/minus-square.svg" class="svg-icon">`;
            TextHtmlNboton = `<p class="pixel-font svg-number">${cantidad}</p><img src="https://www.svgrepo.com/show/423634/add-square.svg" class="svg-icon">`;
        } else {
            if (reference) reference.innerHTML = "";
            TextHtmlNboton = `<img src="https://www.svgrepo.com/show/423634/add-square.svg" class="svg-icon">`;
        }

        if (reference2) reference2.innerHTML = TextHtmlNboton;

        if (this.contador < 1) {
            if (Ncarrito) Ncarrito.innerHTML = "";
            this.compareCart(false);
        }
    }

    comprar() {
        let allPag = document.getElementById("all-pag");
        let TextHtml = `
        <div class="color-fond pixel-font">
            <div class="items-sell">
                <h2 class="compras-titulo">CARRITO DE COMPRAS</h2>
                <div class="all-conteiner-sell" id="all-conteiner-sell">
                    <div class="comprar-item">
                        <div class="div1">
                            <div class="sell-circle">
                                <img src="img/obj1.png" class="pixel-img img-circle">
                            </div>
                            <h3>Nombre del Producto</h3>
                        </div>
                        <div class="div2">
                            <h4>1</h4>
                            <h5>$10.00</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sell-top">
                <div class="total">
                    <h2>MONTO A PAGAR</h2>
                    <div class="total-sell">
                        <h4 id="cantidad-items">1</h4>
                        <h3 id="cantidad-prices">$10.00</h3>
                    </div>
                </div>
                <div class="cash-buttons">
                    <button id="button-volver">VOLVER</button>
                    <a href="tarjeta.html"><button>COMPRAR</button></a>
                </div>
            </div>
        </div>`;
        allPag.innerHTML = TextHtml;
        this.generarCompra();
    }

    generarCompra() {
        // Reiniciar acumuladores
        this.totalItems = 0;
        this.totlaPrice = 0;
        this.SellBackUp = [];

        let AllConteinerSell = document.getElementById("all-conteiner-sell");
        if (!AllConteinerSell) return;

        let TextHtml = "";

        for (let i in this.IdList) {
            if (this.IdList[i] > 0) {
                this.totalItems += this.IdList[i];
                let objeto;
                if (this.convertirDecimal(i) < 1) {
                    objeto = this.NormalMenu.find(item => item.btn === i);
                } else {
                    objeto = this.EspecialesMenu.find(item => item.btn === i);
                }
                if (objeto) this.SellBackUp.push(objeto);
            }
        }

        for (let data of this.SellBackUp) {
            let cantidad = this.IdList[data.btn];
            const precioNum = parseFloat(data.precio.replace('$', ''));
            let totalPrice = precioNum * cantidad;

            let metaText = `
                <div class="comprar-item">
                    <div class="div1">
                        <div class="sell-circle">
                            <img src="${data.imagen}" class="pixel-img img-circle">
                        </div>
                        <h3>${data.titulo}</h3>
                    </div>
                    <div class="div2">
                        <h4>${cantidad}</h4>
                        <h5>$${totalPrice.toFixed(2)}</h5>
                    </div>
                </div>`;
            TextHtml += metaText;
            this.totlaPrice += precioNum * cantidad;
        }

        AllConteinerSell.innerHTML = TextHtml || "<p>No hay productos en el carrito</p>";
        document.getElementById("cantidad-items").textContent = this.totalItems;
        document.getElementById("cantidad-prices").textContent = `$${this.totlaPrice.toFixed(2)}`;

        this.ButtonVolver();
    }

    convertirDecimal(btnStr) {
        const numeros = btnStr.match(/\d+$/);
        if (!numeros) return 0;
        const valorEntero = parseInt(numeros[0], 10);
        return valorEntero / 100;
    }

    ButtonVolver() {
        let buttonVolver = document.getElementById("button-volver");
        if (buttonVolver) {
            buttonVolver.removeEventListener('click', this.PrintMenu);
            buttonVolver.addEventListener('click', this.PrintMenu);
        }
    }
}

// Iniciar la aplicación
const inicio = new coffes(NormalMenu, EspecialesMenu);
inicio.PrintMenu();