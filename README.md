`#sass` `#css` `#html` `#master-in-software-engineering`

# SASS - Clone Instagram <!-- omit in toc -->

<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0-blue.svg?cacheSeconds=2592000" />
</p>

> Sass (which stands for 'Syntactically awesome style sheets) is an extension of CSS that enables you to use things like variables, nested rules, inline imports and more
>
> The purpose of this project is to learn the basics of SASS and put them into practice by building a visual replica of Instagram

## SASS introductory questions

· What is SASS? What does SASS stand for?
Extension of CSS that enables to use variables, nested rules, inline imports, etc.
It helps to organise things and allows us to create style sheets in a faster way.
SASS: Syntactically Awesome Stylesheet.

· What is a CSS pre-processor?
Is a program that let us generate CSS from the preprocessor's own unique syntax.

· What does a pre-processor have to do with SASS?
Help us to maintain larger and complex stylesheets.

· Why use SASS?
It let us use some features that don't exist in pure CSS, such as variables, nested rules, mixins, imports, inheritance, built-in functions, and so on.

· SASS has disadvantages? Which are?
Insufficient Data Security.
Difficulty with Regulations Compliance.
Cumbersome Data Mobility.
Low Performance.
Troublesome Software Integration.

· What is a SASS Variable? Explain why are useful
A way to store information that we can re-use later.
We can store information in variables, like: strings, numbers, colors, booleans, lists and nulls.
Use the $ symbol to declare a variable.

· Explain the SASS variables property with an example.
SASS variable syntax: $variablename: value;

Example:

```
/_ define color _/
$first-color: red;

/_ use the variable _/
body {
color: $first-color;
}
```

· What is a mixin? Why is it important? Give an example
Is a directive that let us create CSS code that is to be reused throughout our stylesheet.

They make it easy to avoid using non-semantic classes like .float-left, and to distribute collections of styles in libraries.

The @mixin is used to define a mixin.
The @include is used to let us use the mixin.

Example:
@mixin first-list {
list-style: none;
font-weight: bold;
}

.list {
@include first-list;
font-size: 20px;
}

· What is SCSS? Give an example
It's a superset of CSS and it's the easiest syntax to get used to and the most popular.
It uses the .scss file extension.

Example:
@mixin body-list() {
@include first-list;

    display: flex;
    border: 1px solid black;

}

· What is SASS? Give an example
The idented syntax.
It uses the .sass file extension.
It support all the same features as SCSS.
It uses indentation instead of {} and ; to describe the format of hte document.

Example:
@mixin body-list()
@include first-list

    display: flex
    border: 1px solid black

· What is the difference between .scss and .sass syntax.
SCSS uses {} and ;
SASS uses indentation

· In which cases would we use SCSS? And in which cases would we use SASS?
SASS:

- Is a pre-processor scritping language that will be compiled/interpreted into CSS.
- Used when we need a original syntax for the development.
- Follows strict indentation.
- Has more developer community and support than SCSS.
- Makes CSS more popwerful with math and varaible support.
- It supports all the versions of CSS.

SCSS:

- Is the main syntax for the SASS which builds on top of the existing CSS syntax.
- Extension of the syntax CSS.
- Used when there is no requirement about the code syntax used.
- It supports cross platform operating system.
- It is more expressive and more syntax oriented.

· Explain how traditional CSS and Preprocessed CSS workflows are different.
CSS preprocessors are the demand of the day. They give us the benefit of Variables, Partials and Nesting.

· Can we create functions with SASS? If it is true, give an example.
Yes, they are parsed function calls, resolved to plain CSS functions, and compiled as-is to CSS.
There are few exceptions. All special function calls return unquoted strings.

Example:
$padding: 15px

.sidebar
padding-left: max($padding, 30px)
  padding-right: max($padding, 30px)

· What is nesting? Is it useful? Give an example of nesting
Allows us to write selectors that mimic the structure of our HTML.
This allows us to use shortcuts to create our CSS.

nav {
ul {
margin: 0;
padding: 0;
list-style: none;
}
li {
display: inline-block;
}
}

· Difference between @use & @import? Give an example
@use:

- Combines CSS from multiple stylesheets together.
- Stylesheets loaded by @use are called: modules.
- The file is only imported once.

Example:
\_color.scss
-color.scss

@import:

- Has the ability to import SASS and CSS stylesheets
- Provide acces to mixins, functions, variables and combine multiple stylesheets together.
- Handled entirely during compilation.
- Include the content of ioone file in another.

Example:
\_color.scss

· How can we import other CSS/SASS files in SASS? Give an example

· Explain the concept of inheritance in SASS.

· Why use @extend? Give an example
Let us share a set of CSS properties from one selector to another.
Is useful if we want have almost identically styled elements that only differ some small details.

Exemple:
.button-basic {
cursor: pointer;
font-size: 20px;
}
.button-report {
@extend .button-basic;
background-color: red;
}

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
