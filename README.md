
## Pregunta 15

  El nesting es la capacidad de anidación de propiedades entre diferentes archivos, esta utilidad propia de SASS respecto CSS nos permite trabajar en diferentes archivos para modular según criterio de desarrollo

## Pregunta 16

  La principal diferencia reside en el scope al contenido importado, mientras que con el @use, solo podremos usar lo importado en el documento que lo llamamos, con el @import podemos extender el uso hacia todas los ficheros sass que esten relacionados.

## Pregunta 17

  @forward para mantener el scope disponible para una importación más.
  @use para mantener el scope exclusivamente en el archivo importado.
  @import para mantener el scope en todos los archivos disponibles

    ```
    /* style/_list.sass */
    @mixin list-style
    margin: 0
    padding: 0
    list-style: none

    /* main.sass */
    @forward "src/list"

    /* styles.sass */
    @use "main"
    li
    @include main.list-style
    ```

## Pregunta 18

  La Inheritance de Sass es la estructura sintáctica que nos permite construir bloques de propiedades de estilos a través de padres e hijos y mantener su exclusividad.

## Pregunta 19

  Usamos @extend para reutilizar propiedades que podemos repetir en varios elementos, simplificando la modularidad.
  Ejemplo:

      ```
      $heading {
        background-color: blanchedalmond;
        color: brown;
        font-family: 'Times New Roman', Times, serif;
      }
      h1 {
        @extend $heading;
        font-size: 2em;
      }
      ```
First of all you will need to install the extension:

- [Live SASS Compiler](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass)

When the extension is installed correctly, having a SASS file open, you must click on "Watch Sass":

<img src="https://raw.githubusercontent.com/ritwickdey/vscode-live-sass-compiler/master/images/Screenshot/AnimatedPreview.gif" width="600px">

If you want to change some configuration of "Live SASS Compiler" you can check this official resource:

- [Live SASS Compiler Settings](https://github.com/ritwickdey/vscode-live-sass-compiler/blob/master/docs/settings.md)

## Technologies used

\* SASS

\* CSS

\* HTML

## Project delivery

To deliver this project you must follow the steps indicated in the document:

- [Submitting a solution](https://www.notion.so/Submitting-a-solution-524dab1a71dd4b96903f26385e24cdb6)

## Resources

- [SASS documentation](https://sass-lang.com/)
- [W3S SASS](https://www.w3schools.com/sass/)
- [SASS Guidelines](https://sass-guidelin.es/es/)
- [Organizing SASS Projects](https://blog.prototypr.io/how-i-organize-sass-projects-e2d7760df86f)
- [Why don't use @import](https://www.youtube.com/watch?v=CR-a8upNjJ0)


## Pregunta 1

  Sass es un processador de CSS, que permite trabajar con css de modularmente. Ofrece la posibilidad de generar funciones con parametros exoprtables y convertir achivos enteros con comandos de Css en modulos, tambien exportables e importables. Esto permite crear tus propias plantillas de comandos css reutilizables.  

## Pregunta 2

  Son lenguajes que se anexan a css, y aplian las capacidades de este. El sentido de estos es en mayor parte automatizar processos u ordenes que son recurrentes en css.
      Ej; Sass, Less, Stylus..

## Pregunta 3

  Sass is a preprocessor.

## Pregunta 4

  La capacidad de trabajar modularmente agiliza trabajos de gran envergadura, ya que en estos es usual que los elemntos compartán estilos. Además estos modulos son reutilizables no solo en un mismo proyecto si no en proyectos futuros. Al final permite crear tu propia bibliotteca de estilos.

## Pregunta 5

  Existen pasos intermedios para compilar la hoja de estilos Css y los archivos Sass. Adés de la necessidad de la instalación de paquetes externos. Aunque no es una gran traba no deja de ser un elemento más del que se depende.

## Pregunta 6

  Es un espacio de memoria donde guardar valores de la propiedades css.
  És especialmente práctico a la hora de guradar valores que vana irse repitiendo dado que actuan en elemtos globales, como un background principal o una tipografía.

## Pregunta 7

  ```
    $font: 'Ubuntu', sans-serif;
    $backgroundC: #fafafa;

    body {
        background-color: $backgroundC;
        font-family: $font;
    }
  ```
## Pregunta 8

  Mixin es la palabra clave para declarar una función que va a contener proiedades y valores Css.
  está funcion puede ser importada y se le pueden pasar los valores de las propiedades como parametros.

  ```
  @mixin resetMarginPadding {
      margin: 0;
      padding: 0;
    }

    body {
      @include resetMarginPadding;
    }
  ```
## Pregunta 9

  Scss es la sintaxis de css extendida, con la que trabaja Sass.
  - Selector '&' : Permite llamar al mismo selector en varios estados;
  ```
  a{
      color:red;
      &:hover{
        color:blue
      }
  };
  ```

## Pregunta 10

  Sass es un processador de CSS, que permite trabajar con css de modularmente. tiene su propio lenguaje.
  - @maxim:   
    Declara las funciones que serán llamadas. 
  - @include: 
    Llama a las funciones dentro de los selectores.
  - @use: 
    Importa un archivo scss

## Pregunta 11

  Sass es un lenguaje en sí, mientras que scss engloba comandos que actuan de extensión del lenguaje css.

## Pregunta 12

  Usas Sass para importar modulos, funciones o variables que contienen estilos 
  Usas Scss para crear los estilos en los archivos scss.

## Pregunta 13

  Css no es modular, sus hojas de estilos no pueden vincularse entre ellas, tienen que ser llamadas cadauna de ellas en el archivo html. Eso te obliga a escoger entre dos opciones: o bien, haces una sola hoja de estilos muy larga donde estén todos los elementos,lo cual implica una lectura de la misma , tediosa y poco clara; o hacer varias hojas de estilos según las partes de tu web(Header, main, footer..),lo cual implica que cada una de ellas deba ser linkada individualmente en el archivo html, esto obliga al navegador a hacer muchas llamadas Http y relantiza la carga de la web.

  Sass nos brinda una tercera opción que es generar modulos de estilos distingidos y catalogados según la parte de la web en que incidan, estos pueden ser todo importados a un archivo sass que a su vez estará vinculado a una hoja de estilos css. No habrá necessidad de tocar el archivo css ya que este esta compilado con el archivo sass principal e irá reciviendo los cambios que reciva de él. De este modo la lectura y localización de los estilos es más clara ya que tenemos los estilos separados por archivos, y el navegador no hará más que una llamada a una sola hoja de estilos css.

## Pregunta 14

  - @maxim:   
    Declara las funciones que serán llamadas. 
  - @include: 
    Llama a las funciones dentro de los selectores.


