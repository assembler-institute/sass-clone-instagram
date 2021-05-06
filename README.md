# What is the difference between .scss and .sass syntax

> La sintaxis de .scss es como la sintaxis de .css, es decir, con {} y ;
> En cambio en la sintaxis de .sass se omiten dichos signos.

# In which cases would we use SCSS? And in which cases would we use SASS?

> El caso más claro es según el estilo de programación usado cuando el documento va a ser compartido con otros equipos. Fanes de la sintaxis de .css usaran .scss, en cambio, si el equipo prefiere un código más limpio y claro, utilizaran .sass por sus menos caracteres y líneas.

# Explain how traditional CSS and Preprocessed CSS workflows are different.

> El workflow puede ser diferente, desde la optimización de archivos mas modulares, un archivo para colores, otro para formularios, etc, hasta que el código debe ser compilado, la existencia de un mayor esfuerzo para solucionar los problemas que puedan surgir.

# Can we create functions with SASS? If it is true, give an example.

> Si, es posible y una de sus ventajas. Ejem: @mixin transform($property) {
> -webkit-transform: $property;
> -ms-transform: $property;
> transform: $property;}
> .box { @include transform(rotate(30deg)); }

# What is nesting? Is it useful? Give an example of nesting

> El nesting consiste en anidar diferentes elementos dentro de otros. Ejem: footer{
> ul,p{
> @include displayFlex();
> font-size: .8em;
> color: rgb(153, 151, 151);
> list-style: none;
> line-height: 14px;
> cursor: pointer;
> }

> }

# Difference between @use & @import? Give an example

> El @import permite incluir un archivo en otro. El @use permite incluir un archivo una SOLA VEZ, no importa cuantas veces uses este comando. Ejem:
> // \_base.scss
> $font-stack: Helvetica, sans-serif;
> $primary-color: #333;
> // styles.scss
> @use 'base';

# How can we import other CSS/SASS files in SASS? Give an example

> Es necesario unar un modulo namespace. Ejem: @use "src/corners" (url) as c (namespace);
> .button {
> @include c.rounded;

# Explain the concept of inheritance in SASS.

> La herencia, un mecanismo por el cual un selector puede recibir estilos CSS que nos llegan de declaraciones realizadas con anterioridad. Conseguir este objetivo es sencillo gracias a la directiva @extend y las denominadas "placeholder class", que son una construcción de Sass que no tiene representación en el CSS hasta que no la usemos

# Why use @extend? Give an examples

> El uso de @extend le permite compartir un conjunto de propiedades CSS de un selector a otro. Una clase placeholder es un tipo especial de
> clase que solo imprime cuando es extended, y puede ayudar a mantener su compilado CSS ordenado y limpio. Ejem:
> %message-shared {
> border: 1px solid #ccc;
> padding: 10px;
> color: grey;
> }
> .message {
> @extend %message-shared;
> }
> .success {
> @extend %message-shared;
> border-color: green;
> }
