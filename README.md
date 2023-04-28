# Practica_p5
----------------------------------------------------------------------------------------------------------------------------------
## Introduccion:
El presente código realizado en la plataforma p5 de JavaScript pertenece a una practica donde se utilizan los temas 'Herencia' y 'Polimorfismo'. la herencia es una de las tres características principales de la programación orientada a objetos. La herencia permite crear clases que reutilizan, extienden y modifican el comportamiento definido en otras clases. La clase cuyos miembros se heredan se denomina clase base y la clase que hereda esos miembros se denomina clase derivada. Una clase derivada solo puede tener una clase base directa, pero la herencia es transitiva. Si ClassC se deriva de ClassB y ClassB se deriva de ClassA, ClassC hereda los miembros declarados en ClassB y ClassA. [Herencia - Microsoft Learn](https://learn.microsoft.com/es-es/dotnet/csharp/fundamentals/object-oriented/inheritance)

El 'Polimorfismo' suele considerarse el tercer pilar de la programación orientada a objetos, después de la encapsulación y la herencia. Polimorfismo es una palabra griega que significa "con muchas formas" y tiene dos aspectos diferentes:

* En tiempo de ejecución, los objetos de una clase derivada pueden ser tratados como objetos de una clase base en lugares como parámetros de métodos y colecciones o matrices. Cuando se produce este polimorfismo, el tipo declarado del objeto ya no es idéntico a su tipo en tiempo de ejecución.
* Las clases base pueden definir e implementar métodosvirtuales, y las clases derivadas pueden invalidarlos, lo que significa que pueden proporcionar su propia definición e implementación. En tiempo de ejecución, cuando el código de cliente llama al método, CLR busca el tipo en tiempo de ejecución del objeto e invoca esa invalidación del método virtual. En el código fuente puede llamar a un método en una clase base y hacer que se ejecute una versión del método de la clase derivada. [Polimorfismo - Microsoft Learn](https://learn.microsoft.com/es-es/dotnet/csharp/fundamentals/object-oriented/polymorphism)

## Explicación de código:
La clase padre se llama Figura y tiene un constructor que inicializa los atributos de la figura, como su posición (como un objeto vectorial de p5.js), su altura y su ancho, así como los valores de relleno para su color.

La clase FiguraInteractiva hereda de Figura y agrega un método llamado interactuar, que será implementado de forma diferente para cada una de sus clases hijas.

La clase hija Boton hereda de FiguraInteractiva y agrega atributos específicos para un botón, como un texto y una acción a realizar cuando se hace clic en el botón. Además, tiene un contador inicializado en cero, que se incrementa cada vez que se hace clic en el botón. También tiene métodos para dibujar el botón, interactuar con él y moverlo a una posición aleatoria.

En el código principal, se crea una instancia de Boton en el método setup y se llama a su método deshabilitar después de un tiempo determinado. En el método draw, se dibuja el botón si existe una instancia de Boton, y en el método mousePressed, se llama al método interactuar del botón si existe una instancia de Boton y si el clic del mouse está dentro del área del botón.

En general, este código muestra cómo se puede utilizar la herencia y la polimorfismo en JavaScript para crear objetos que tienen comportamientos específicos, pero que comparten características comunes. Además, se demuestra cómo se pueden utilizar los métodos de temporizador y eventos del mouse en p5.js para hacer interacciones interactivas en el navegador web.

## Link al código: