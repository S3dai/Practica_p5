# Practica_p5
----------------------------------------------------------------------------------------------------------------------------------
## Introduccion:
El presente código realizado en la plataforma p5 de JavaScript pertenece a una practica donde se utilizan los temas 'Herencia' y 'Polimorfismo'. la herencia es una de las tres características principales de la programación orientada a objetos. La herencia permite crear clases que reutilizan, extienden y modifican el comportamiento definido en otras clases. La clase cuyos miembros se heredan se denomina clase base y la clase que hereda esos miembros se denomina clase derivada. Una clase derivada solo puede tener una clase base directa, pero la herencia es transitiva. Si ClassC se deriva de ClassB y ClassB se deriva de ClassA, ClassC hereda los miembros declarados en ClassB y ClassA. [Herencia - Microsoft Learn](https://learn.microsoft.com/es-es/dotnet/csharp/fundamentals/object-oriented/inheritance)

El 'Polimorfismo' suele considerarse el tercer pilar de la programación orientada a objetos, después de la encapsulación y la herencia. Polimorfismo es una palabra griega que significa "con muchas formas" y tiene dos aspectos diferentes:

* En tiempo de ejecución, los objetos de una clase derivada pueden ser tratados como objetos de una clase base en lugares como parámetros de métodos y colecciones o matrices. Cuando se produce este polimorfismo, el tipo declarado del objeto ya no es idéntico a su tipo en tiempo de ejecución.
* Las clases base pueden definir e implementar métodosvirtuales, y las clases derivadas pueden invalidarlos, lo que significa que pueden proporcionar su propia definición e implementación. En tiempo de ejecución, cuando el código de cliente llama al método, CLR busca el tipo en tiempo de ejecución del objeto e invoca esa invalidación del método virtual. En el código fuente puede llamar a un método en una clase base y hacer que se ejecute una versión del método de la clase derivada. [Polimorfismo - Microsoft Learn](https://learn.microsoft.com/es-es/dotnet/csharp/fundamentals/object-oriented/polymorphism)

## Explicación de código:
Este es un código JavaScript que define tres clases: "Figura", "FiguraInteractiva" y "Boton". "Figura" es la clase principal, que define una forma básica con propiedades como posición, altura, anchura y color de relleno. "FiguraInteractiva" es una subclase de "Figura" que agrega un método "interactuar()", que se puede usar para interactuar con la forma de diferentes maneras. "Boton" es una subclase de "FiguraInteractiva" que representa un botón con propiedades adicionales como texto y acción.

En la función "setup()", se crea el lienzo con un tamaño de 400 por 400 píxeles. Se crea un nuevo objeto "Boton" llamado "rectangulo" con una posición de (100, 100), un tamaño de 50 por 100 píxeles y texto "Haz click". La acción del botón se define mediante una función anónima que registra un mensaje en la consola cuando se hace clic.

Se utiliza la función "setTimeout()" para llamar al método "deshabilitar()" del objeto "rectangulo" después de un retraso de 10 segundos (especificado por la constante "tiempoLimite"). El método "deshabilitar()" establece el color de relleno del botón en gris, cambia su acción para registrar un mensaje sobre el tiempo agotado y deshabilita su capacidad para moverse haciendo clic.

En la función "draw()", el fondo se establece en gris claro (valor RGB 220). Si el objeto "rectangulo" existe (es decir, no es nulo), se llama a su método "draw()" para dibujar el botón en el lienzo.

La función "mousePressed()" se llama cada vez que se presiona el botón del ratón. Si el objeto "rectangulo" existe, se llama a su método "interactuar()" para comprobar si el ratón está sobre el botón y, si es así, realizar su acción (es decir, registrar un mensaje y mover el botón a una posición aleatoria).

## Link al código: