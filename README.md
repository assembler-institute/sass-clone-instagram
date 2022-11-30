`#sass` `#css` `#html` `#assembler-institute` `#master-in-software-engineering`

# Assembler Institute - SASS - Clone Instagram <!-- omit in toc -->

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

- [SASS documentation](https://sass-lang.com/)
- [W3S SASS](https://www.w3schools.com/sass/)
- [SASS Guidelines](https://sass-guidelin.es/es/)
- [Organizing SASS Projects](https://blog.prototypr.io/how-i-organize-sass-projects-e2d7760df86f)
- [Why don't use @import](https://www.youtube.com/watch?v=CR-a8upNjJ0)

## Answered Questions

● What is SASS? What does SASS stand for?
According to their official website, SASS is “CSS with superpowers”. It is a CSS extension language which allows more structured and planned layouts than raw CSS. Besides, it includes features that are more similar to a programming language. SASS stands for Syntactically Awesome Style Sheets.
● What is a CSS pre-processor?
Regular CSS tends to produce larger and more complex style sheets each day. That is why pre-processors are needed: they are prepared to translate and compile different documents, functions and languages into a single stylesheet understandable by the browser.
● What does a pre-processor have to do with SASS?
SASS documents are pre-processed files which accept more organized syntax and new features. They need to be “translated” into regular CSS before the browser can understand them.
● Why use SASS?
There are three main reasons to use SASS:

1. Being able to work in different and well-classified files, but only handling one for the browser to read.
2. Using a unique syntax which is better-organized and clearer.
3. Having a whole range of features which are not contemplated in plain CSS: variables, nesting, mixins or inheritance.
   ● SASS has disadvantages? Which are?
   The main and clearest disadvantage of SASS files is that they need to be processed and compiled before the browser can actually read them. That is why a terminal command is needed before being able to see the results of our code.
   Besides, there are some secondary disadvantages too: it can make more difficult to find and solve problems (since a single and huge CSS document is what arrives to the browser), it makes the browser’s inspector almost useless and it requires certain extra knowledge from the developer’s side.
   ● What is a SASS Variable? Explain why are useful
   Put in simple terms, a SASS variable is a useful way to save small pieces of information and reusing them all along one project: we just need to name it and store it after the character “$”, and then we do not need to repeat tags and names each time we want to use the same property.
● Explain the SASS variables property with an example.
If we were to use a main colour on our website, old and plain CSS would force us to repeat each time its reference:
h1 {color: #d8s9d7;} .user-wrapper {background-color: #d8s9d7} a:hover {border: 2px dotted #d8s9d7}
Since CSS last actualization, it allows to use variables, but with a not so useful syntax. It could be something like this:
:root {--main-color:  #d8s9d7;} h1 {color: var(--main-color);} .user-wrapper {background-color: var(--main-color);} a:hover {border: 2px dotted var(--main-color);}
SASS syntax is much more easy to reuse and can be very useful when the properties are being used frequently inside a project:
$main-color: #d8s9d7; h1 {color: $main-color;} .user-wrapper {background-color: $main-color;} a:hover {border: 2px dotted $main-color;}
● What is a mixin? Why is it important? Give an example
It is a middle point between a variable and a function: it can store a group of CSS declarations, so we can reuse them all along the document, but it also takes parameters so that variations can be made in each case. 
This way, we can save time and space. SASS code becomes shorter and more legible.
In the next example from SASS website, we see how the parameter $theme is reused with different colours each time, and how it defines the box shadow as well.
@mixin theme($theme: DarkGray) {
   background: $theme;
  box-shadow: 0 0 1px rgba($theme, .25);
   color: #fff;
   }

.info {
@include theme;
}
.alert {
@include theme($theme: DarkRed);
}
.success {
  @include theme($theme: DarkGreen);
}

● What is SCSS? Give an example
It is an optional syntax for SASS which keeps all the functionalities of the pre-processor but with a visual appearance closer to that of traditional CSS: it uses curly braces ({}) and semicolons (;) after each declaration.

div {
background-color: #dbdbdb;

    p {
        color: #fff;
    }

}

● What is SASS? Give an example
Documents .sass use the original SASS syntax, which discards the use of the curly braces and semicolons. Instead, it is based on indentation.

Div
Background-color: #dbdbdb
p
color: #fff

● In which cases would we use SCSS? And in which cases would we use SASS?
As the language is the same one in both cases, the use of either SCSS or SASS will come defined by the technical requirements of the project or the work environment in which we find ourselves.
● Explain how traditional CSS and Preprocessed CSS workflows are different.
Traditional CSS workflow is not quite problematic since all browsers work with it. But SASS demands some extra steps, especially of compilation and translation. We need to set up a build process that will first compile our Sass, then concatenate that output with an external CSS library we used, then automatically add prefixes for browser support, and then compress our entire CSS file into one line for a minimum file size.
● Can we create functions with SASS? If it is true, give an example.
Some of the main features of SASS are in fact functions, even though they are named otherwise: e.g., mixins. Besides, we can create functions with abstract content that can be used once and again.

@function invert($color, $amount: 100%) {
  $inverse: change-color($color, $hue: hue($color) + 180);
@return mix($inverse, $color, $amount);
}

● What is nesting? Is it useful? Give an example of nesting
Nesting is the practice of including some CSS elements or pseudo-classes inside others. That way we can see much better the HTML dependency, which was problematic in traditional CSS, and keep the properties ordered in some sort of “blocks”. Furthermore, it is very useful to easily select child elements without having to give many classes.
In the next example, we refer to all the <p> elements that are children of the elements with the “wrapper” class.

.wrapper {
p {
color: red;
}
}

● Difference between @use & @import? Give an example
The first method included by SASS to make a system of modules was @import, but it had many problems that were corrected by @use. Unlike @import, some of the features of @use are: The file is only imported once, no matter how many times you @use it in a project. Variables, mixins, and functions (what Sass calls “members”) that start with an underscore (\_) or hyphen (-) are considered private, and not imported. Members from the used file (buttons.scss in this case) are only made available locally, but not passed along to future imports. Similarly, @extends will only apply up the chain; extending selectors in imported files, but not extending files that import this one. All imported members are namespaced by default.
● How can we import other CSS/SASS files in SASS? Give an example
We can use other files, as we have seen, with the @use selector: it creates a module-based framework that can be very helpful to keep the code organized and clean. We can also use @forward to import a whole folder of CSS/SASS files, so that we do not need to import each of them manually. Finally, we can use some of the built-in modules that SASS offers (math, color, string, list, map, selector and meta) by including @use ‘sass:math’.
● Explain the concept of inheritance in SASS.
SASS tries to make things shorter and easier than the traditional CSS methods. In that sense, it allows to extend some CSS properties from one element to another so that the developer has to write less and the code appears much cleaner. One of the best SASS practices consists on creating ghost classes started by “%”, which will not be rendered when the code is compiled, and @extend its properties to other elements.
● Why use @extend? Give an example
@extend is the operator that allows to use the inheritance properties.
%message-shared {
border: 1px solid #ccc;
padding: 10px;
color: #333;
}

.message {
@extend %message-shared;
}

.success {
@extend %message-shared;
border-color: green;
}

.error {
@extend %message-shared;
border-color: red;
}

.warning {
@extend %message-shared;
border-color: yellow;
}
