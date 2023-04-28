class Figura {
  constructor(x, y, alto, ancho) {
    this.posicion = createVector(x, y);
    this.alto = alto;
    this.ancho = ancho;
    this.fillred = 144;
    this.fillgreen = 25;
    this.fillblue = 255;
  }
}

class FiguraInteractiva extends Figura {
  interactuar() {
    // Método para interactuar con el mouse de diferentes maneras
  }
}

// Clase Hijo (FiguraInteractiva)
class Boton extends FiguraInteractiva {
  constructor(x, y, alto, ancho, texto, accion) {
    super(x, y, alto, ancho);
    this.texto = texto;
    this.accion = accion;
    this.contador = 0; // contador inicializado en cero
  }
  
  draw() {
    fill(this.fillred, this.fillgreen, this.fillblue);
    rect(this.posicion.x, this.posicion.y, this.ancho, this.alto);
    textSize(16);
    fill(255);
    textAlign(CENTER);
    text(this.texto, this.posicion.x + this.ancho / 2, this.posicion.y + this.alto / 2);
    text("Contador: " + this.contador, this.posicion.x + this.ancho / 2, this.posicion.y + this.alto / 2 + 20); // dibujar contador
  }

  interactuar() {
    if (mouseX >= this.posicion.x && mouseX <= this.posicion.x + this.ancho &&
        mouseY >= this.posicion.y && mouseY <= this.posicion.y + this.alto) {
      this.accion();
      this.mover();
      this.contador++; // incrementar contador
    }
  }

  mover() {
    this.posicion.x = random(width - this.ancho);
    this.posicion.y = random(height - this.alto);
  }
  
  deshabilitar() {
    this.accion = function() {
      console.log("El tiempo se ha acabado.");
    };
    this.fillred = 100;
    this.fillgreen = 100;
    this.fillblue = 100;
  }
}

let rectangulo = null; // inicializar la variable con un valor nulo
const tiempoLimite = 10000; // tiempo en milisegundos para terminar el juego

function setup() {
  createCanvas(400, 400);
  rectangulo = new Boton(100, 100, 50, 100, "Haz click", function() { console.log("¡Haz hecho click!"); });
  
  setTimeout(function() {
    rectangulo.deshabilitar();
  }, tiempoLimite);
}

function draw() {
  background(220);
  if (rectangulo) {
    rectangulo.draw();
  }
}

function mousePressed() {
  if (rectangulo) {
    rectangulo.interactuar();
  }
}
