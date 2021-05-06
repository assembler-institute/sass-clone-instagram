`#sass` `#css` `#html` `#master-in-software-engineering`

# SASS - Clone Instagram <!-- omit in toc -->

<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0-blue.svg?cacheSeconds=2592000" />
</p>

> Sass (which stands for 'Syntactically awesome style sheets) is an extension of CSS that enables you to use things like variables, nested rules, inline imports and more
>
> The purpose of this project is to learn the basics of SASS and put them into practice by building a visual replica of Instagram

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

## Repository

First of all you must fork this project into your GitHub account.

To create a fork on GitHub is as easy as clicking the “fork” button on the repository page.

<img src="https://docs.github.com/assets/images/help/repository/fork_button.jpg" alt="Fork on GitHub" width='450'>

### Installing

In this project you must use the VSCode SASS extension in order to compile SASS into CSS.

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



> Armando and Erick
> DELIVERY QUESTIONS:

## What is SASS? What does SASS stand for?
Sass is a stylesheet language that’s compiled to CSS. It allows you to use variables, nested rules, mixins, functions, and more, all with a fully CSS-compatible syntax. Sass helps keep large stylesheets well-organized and makes it easy to share design within and across projects.

## What is a CSS pre-processor?
CSS preprocessors are scripting languages that extend the default capabilities of CSS. They enable us to use logic in our CSS code, such as variables, nesting, inheritance, mixins, functions, and mathematical operations. CSS preprocessors make it easy to automate repetitive tasks, reduce the number of errors and code bloat, create reusable code snippets, and ensure backward compatibility.

What does a pre-processor have to do with SASS?
Once you start tinkering with Sass, it will take your preprocessed Sass file and save it as a normal CSS file that you can use in your website.

## Why use SASS?
CSS on its own can be fun, but stylesheets are getting larger, more complex, and harder to maintain. This is where a preprocessor can help. Sass lets you use features that don't exist in CSS yet like variables, nesting, mixins, inheritance and other nifty goodies that make writing CSS fun again.

## SASS has disadvantages? Which are?
The developer must have enough time to learn new features present in this preprocessor before using it.
Using Sass may cause losing benefits of browser's built-in element inspector.
Code has to be compiled.
Difficult Troubleshooting.

## What is a SASS Variable? Explain why are useful
Variables are a way to store information that you can re-use later. With Sass, you can store information in variables, like: strings. numbers.

## Explain the SASS variables property with an example.
you can write --> color:black; in CSS, but with sass you can make a variable with the name you want $myVariable: black; and sass will write your code with his preprocessor. then you only needs to update your variable once.

## What is a mixin? Why is it important? Give an example
The @mixin directive lets you create CSS code that is to be reused throughout the website. The @include directive is created to let you use (include) the mixin.

## What is SCSS? Give an example
$color: #ffffff;
$width: 800px;

@mixin body{
 width: $width;
 color: $color;

 content{
  width: $width;
  background:$color;
 }
}

## What is SASS? Give an example
$color: #ffffff
$width: 800px
$stack: Helvetica, sans-serif

body
  width: $width
  color: $color
  font: 100% $stack

  content
    width: $width
    background:$color

## What is the difference between .scss and .sass syntax.
In SASS however, the whole structure is visually quicker and cleaner than SCSS.
It is sensitive to white space when you are using copy and paste,
It seems that it doesn't support inline CSS currently.


## In which cases would we use SCSS? And in which cases would we use SASS?
SASS is used when we need a original syntax, code syntax is not required for SCSS. SASS follows strict indentation, SCSS has no strict indentation. SASS has a loose syntax with white space and no semicolons, the SCSS resembles more to CSS style and use of semicolons and braces are mandatory.

## Explain how traditional CSS and Preprocessed CSS workflows are different.
Essentially, a preprocessor takes code that you’ve written in the preprocessed language and converts it into simple CSS code. The preprocessor is comprised of a language, the code that you write, and a compiler that converts the code into standard CSS which is easily read and processed by any web browser.

## Can we create functions with SASS? If it is true, give an example.
yes, Functions are defined using the @function at-rule, which is written @function <name>(<arguments...>) { ... }. A function’s name can be any Sass identifier. It can only contain universal statements, as well as the @return at-rule which indicates the value to use as the result of the function call. Functions are called using the normal CSS function syntax.
@function pow($base, $exponent) {
  $result: 1;
  @for $_ from 1 through $exponent {
    $result: $result * $base;
  }
  @return $result;
}

.sidebar {
  float: left;
  margin-left: pow(4, 3) * 1px;
}

## What is nesting? Is it useful? Give an example of nesting.
The CSS Nesting module introduces the ability to nest one style rule inside another, with the selector of the child rule relative to the selector of the parent rule. This increases the modularity and maintainability of CSS stylesheets. This is a followup to #998, and a long-time request from developers

## Difference between @use & @import? Give an example.
The new @use is similar to @import . but has some notable differences: The file is only imported once, no matter how many times you @use it in a project. Variables, mixins, and functions (what Sass calls “members”) that start with an underscore (_) or hyphen (-) are considered private, and not imported.

## How can we import other CSS/SASS files in SASS? Give an example
@import "anothermodule";

## Explain the concept of inheritance in SASS.
Inheritance is a feature of Sass that allows classes to share a set of properties with one another. Selectors that @extend a class in Sass will have their selector included right up next to the class it is extending, resulting in a comma separated list.

## Why use @extend? Give an example
In Sass, @extend is used to share a set of CSS properties from one selector to another. It is a very important and useful feature of Sass.
The @extend feature of Sass allows classes to share a set of properties with one another. In complicated CSS where many classes are put together, duplication of properties may occurs. The @extend features makes your code less and facilitates you to rewrite it repeatedly.

.foo {
  color: black;
  border: 1px solid black;
}

.bar {
  @extend .foo;
  background-color: red;
}