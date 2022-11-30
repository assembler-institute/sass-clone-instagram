`#sass` `#css` `#html` `#assembler-institute` `#master-in-software-engineering`

# Assembler Institute - SASS - Clone Instagram <!-- omit in toc -->

<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0-blue.svg?cacheSeconds=2592000" />
</p>

> Sass (which stands for 'Syntactically awesome style sheets) is an extension of CSS that enables you to use things like variables, nested rules, inline imports and more
>
> The purpose of this project is to learn the basics of SASS and put them into practice by building a visual replica of Instagram

## SASS introductory questions

#### What is SASS? What does SASS stand for?

> Extension of CSS that enables to use variables, nested rules, inline imports, etc.
> It helps to organise things and allows us to create style sheets in a faster way.
> SASS: Syntactically Awesome Stylesheet.

#### What is a CSS pre-processor?

> Is a program that let us generate CSS from the preprocessor's own unique syntax and compile its file into a generic `style.css`.

#### What does a pre-processor have to do with SASS?

> SASS is a pre-processor that allows us use its syntax and compile it to a final `style.css` file.

#### Why use SASS?

> It let us use some features that don't exist in pure CSS, such as variables, nested rules, mixins, imports, inheritance, built-in functions, and so on.

#### SASS has disadvantages? Which are?

> - Insufficient Data Security.
> - Code has to be compiled.
> - Low performance.
> - Time to learn the new syntax.

#### What is a SASS Variable? Explain why are useful

> A way to store information that we can re-use later avoiding the need to change a value in multiple places.
> We can store information in variables, like: strings, numbers, colors, booleans, lists and nulls.

#### Explain the SASS variables property with an example.

> The generic way of creating a variable:
>
> ```
> $variableName: varibleValue;
> ```

> Declaring a variable to store a color value.
>
> ```
> /* Defining variable */
> $first-color: rgb(240, 239, 125);
>
> /* Using variable */
> body {
> 	color: $first-color;
> }
> ```

#### What is a mixin? Why is it important? Give an example.

> A `@mixin` is a way of storing and grouping set of styles in one specific declaration while, moreover, being able to pass parameters and modify the styles declared inside.
>
> The main strength of mixins is that they are re-usable and adaptable to each item we want to apply it to. They also make it easy to avoid using non-semantic classes like `.float-left`, and to distribute collections of styles in libraries.
>
> The generic way of creating and importing a mixin:
>
> ```
> /* Defining the mixin */
> @mixin nameOfMixin($variable1){
> 	css-property-1: value;
> 	css-property-2: value;
> 	css-property-3: $variable;
> }
>
> /* Importing the mixin */
> @include nameOfMixin(value);
> ```
>
> Declaring a mixin to change background color and border radius to an element
>
> ```
> @mixin backgroundAndRadius($color, $width) {
> 	background-color: $color;
> 	border-radius: $width;
> }
>
> .my-class {
> 	@include backgroundAndRadius(blue, 3px);
> }
> ```

#### What is SCSS? Give an example

> It is the new version of SASS that makes it fully compliant with CSS with the use of CSS syntax such as `{}` and `;` while allowing us working with nesting, modules, partials and separated styling files in general
>
> It uses the `.scss` file extension.
>
> ```
> /* SCSS syntax */
> #myID{
>     display: flex;
>     border: 1px solid black;
> }
> ```

#### What is SASS? Give an example

> The idented syntax for styling that, instead of using `{}` and `;` it works just with indented blocks of code and nesting.
>
> It uses the `.sass` file extension.

> ```
> /* SASS syntax */
> #myID
>     display: flex
>     border: 1px solid black
>
> ```

#### What is the difference between .scss and .sass syntax.

> - SCSS uses `{}` and `;` and it is fully compilant with CSS.
> - SASS uses indentation and it needs more compilation to generate the CSS file.

#### In which cases would we use SCSS? And in which cases would we use SASS?

> SASS:
>
> - Is a pre-processor scritping language that will be compiled/interpreted into CSS.
> - Used when we need a original syntax for the development.
> - Follows strict indentation.
> - Has more developer community and support than SCSS.
> - Makes CSS more popwerful with math and varaible support.
> - It supports all the versions of CSS.
>
> SCSS:
>
> - Is the main syntax for the SASS which builds on top of the existing CSS syntax.
> - Extension of the syntax CSS.
> - Used when there is no requirement about the code syntax used.
> - It supports cross platform operating system.
> - It is more expressive and more syntax oriented.

#### Explain how traditional CSS and Preprocessed CSS workflows are different.

> Whilte pure CSS tends to work with one file or separated one, CSS preprocessors give us the benefit of variables, partials and nesting.

#### Can we create functions with SASS? If it is true, give an example.

> Yes, they are parsed function calls and compiled as-is to CSS. All special function calls return unquoted strings.
>
> The generic way of creating a function:
>
> ```
> @function my-function($parameter1, $parameter2);
>
> ```
>
> Creating a function to alter the margin left
>
> ```
> /* Creating the function */
> @function pow($base, $exponent)
>   $result: 1
>   @for $_ from 1 through $exponent
>     $result: $result * $base
>
>   @return $result
>
> /* Using the function */
> .sidebar
>   float: left
>   margin-left: pow(4, 3) * 1px
> ```

#### What is nesting? Is it useful? Give an example of nesting

> Is the way of giving hierachy to elements by indenting them and placing them inside other declarations.
>
> ```
> /* CSS indentation */
> nav {
> 	ul {
> 		margin: 0;
> 		padding: 0;
> 		list-style: none;
> 			li {
> 			display: inline-block;
> 			}
> 	   }
> }
> ```

#### Difference between @use & @import? Give an example

> `@use`:
>
> - They have only effect on the file they are imported to unless we use `@forward`.
> - Provide acces to mixins, functions, variables.
> - Partial files loaded by @use are called: modules.
>
> ```
> /* Importing the partial _colors.scss */
> @use "colors";
>
> /* Changing the default namespace */
> @use "colors" as c;
> ```
>
> `@import`:
>
> - Has the ability to import SASS and CSS files
> - Provide acces to mixins, functions, variables and combine multiple stylesheets together.
> - Handled entirely during compilation.
> - Include the content of one file in another.
>
> ```
> /* Importing the partial _colors.scss */
> @import "colors";
>
> /* Changing the default namespace */
> @import "colors" as c;
> ```

#### How can we import other CSS/SASS files in SASS? Give an example

> ```
> @import "fileName1.scss";
> @import "fileName2.css";
>
> ```

#### Explain the concept of inheritance in SASS.

> The way of declaring reusable sets of CSS properties in `@mixin` and `%`/`@extend` declarations.

#### Why use @extend? Give an example

> Let us share a set of CSS properties from one SCSS/SASS file to another and multiple times
> Is useful if we want have almost identically styled elements that only differ some small details.
>
> ```
> %button-basic {
> 	cursor: pointer;
> 	font-size: 20px;
> }
> .button-report {
> @extend %button-basic;
> }
> ```

## Index <!-- omit in toc -->

- [Requirements](#requirements)
- [Repository](#repository)
- [Technologies used](#technologies-used)
- [Project delivery](#project-delivery)
- [Resources](#resources)

## Requirements

- You must use variables at least once in the project.
- You must use nesting.
- You must use inheritance at least once in the project.
- You cannot use third party libraries for the development of this pill

### Installing

In this project you must use the VSCode SASS extension in order to compile SASS into CSS.

First of all you will need to install the extension:

- [Live SASS Compiler](https://marketplace.visualstudio.com/items?itemName=glenn2223.live-sass)

When the extension is installed correctly, having a SASS file open, you must click on "Watch Sass":

<img src="https://raw.githubusercontent.com/ritwickdey/vscode-live-sass-compiler/master/images/Screenshot/AnimatedPreview.gif" width="600px">

If you want to change some configuration of "Live SASS Compiler" you can check this official resource:

- [Live SASS Compiler Settings](https://github.com/glenn2223/vscode-live-sass-compiler/blob/master/docs/settings.md)

## Technologies used

\* SASS

\* CSS

\* HTML

## Project delivery

To deliver this project you must follow the steps indicated in the document:

- [Submitting a solution](https://www.notion.so/Submitting-a-solution-524dab1a71dd4b96903f26385e24cdb6)

## Resources

- [Trello board](https://trello.com/b/cyoR9OKh/instagram-clone)
- [SASS documentation](https://sass-lang.com/)
- [W3S SASS](https://www.w3schools.com/sass/)
- [SASS Guidelines](https://sass-guidelin.es/es/)
- [Organizing SASS Projects](https://blog.prototypr.io/how-i-organize-sass-projects-e2d7760df86f)
- [Why don't use @import](https://www.youtube.com/watch?v=CR-a8upNjJ0)
- [Unsplash photo library](https://unsplash.com/)

## Collaborators

👤 Kendra Lambillon

👤 Ricard Garcia
