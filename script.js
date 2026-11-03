// 1. Click: muestra una alerta
const btnAlerta = document.getElementById("btnAlerta");

btnAlerta.addEventListener("click", function () {
  alert("Hola Mundo");
});

// 2. Mouse: entra y sale del cuadro
const cuadro = document.getElementById("cuadro");

function cursorEntra() {
  console.log("El cursor entró al cuadro");
}

function cursorSale() {
  console.log("El cursor salió del cuadro");
}

cuadro.addEventListener("mouseenter", cursorEntra);
cuadro.addEventListener("mouseleave", cursorSale);

// 3. Teclado: se escucha en toda la ventana
document.addEventListener("keydown", function (evento) {
  console.log("Tecla pulsada:", evento.key);

  if (evento.key.toLowerCase() === "f") {
    console.log("¡Presionaste la tecla F!");
  }
});

// 4. Input: muestra lo que se escribe como saludo
const campoNombre = document.getElementById("campoNombre");
const saludo = document.getElementById("saludo");

campoNombre.addEventListener("input", function () {
  const nombre = campoNombre.value;
  saludo.textContent = nombre ? "Hola, " + nombre : "";
});

// 5. Una sola vez: el listener se elimina después del primer clic
const btnUnaVez = document.getElementById("btnUnaVez");

function unaVez() {
  console.log("Esto solo se ejecuta una vez.");
  btnUnaVez.removeEventListener("click", unaVez);
}

btnUnaVez.addEventListener("click", unaVez);
