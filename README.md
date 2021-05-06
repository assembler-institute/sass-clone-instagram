
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
