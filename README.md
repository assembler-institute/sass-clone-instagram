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
- [Theory](#theory)

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

## Theory

- **What is SASS? What does SASS stand for?**
  Sass (short for syntactically awesome style sheets) is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS)

- **What is a CSS pre-processor?**
  CSS preprocessors are scripting languages that extend the default capabilities of CSS. They enable us to use logic in our CSS code, such as variables, nesting, inheritance, mixins, functions, and mathematical operations.

- **What does a pre-processor have to do with SASS?**
  SASS is a preprocessor

- **Why use SASS?**
  Sass lets you use features that do not exist in CSS, like variables, nested rules, mixins, imports, inheritance, built-in functions, and other stuff.

- **SASS has disadvantages? Which are?**
  Is neccessary a transpilator to convert into CSS the code

- **What is a SASS Variable? Explain why are useful**
  Using variables avoids repeating code. Variables are a way to store information that you want to reuse throughout your stylesheet. You can store things like colors, font stacks, or any CSS value you think you'll want to reuse. Sass uses the $ symbol to make something a variable.

- **Explain the SASS variables property with an example.**
  $font-stack: Helvetica, sans-serif;
  $primary-color: #333;

  body {
    font: 100% $font-stack;
    color: $primary-color;
  }

- **What is a mixin? Why is it important? Give an example**
  A mixin lets you make groups of CSS declarations that you want to reuse throughout your site.
  To create a mixin you use the @mixin directive and give it a name. We've named our mixin transform. We're also using the variable $property inside the parentheses so we can pass in a transform of whatever we want. After you create your mixin, you can then use it as a CSS declaration starting with @include followed by the name of the mixin.

  @mixin transform($property) {
    -webkit-transform: $property;
    -ms-transform: $property;
    transform: $property;
  }
  .box { @include transform(rotate(30deg)); }

- **What is SCSS? Give an example**
  SCSS (Sassy CSS): Uses the .scss file extension and is fully compliant with CSS syntax. It is the new version of SASS.
  body{
    font:100% $font-stack;
    color:$primary-color;
  }

- **What is SASS? Give an example**
  Indented (simply called 'Sass'): Uses .sass file extension and indentation rather than brackets; it is not fully compliant with CSS syntax, but it's quicker to write. It’s the old version of SASS, but it will never be deprecated!
  body
    font:100% $font-stack
    color:$primary-color

- **What is the difference between .scss and .sass syntax.**
  .scss requires the use of {} and ;, and .sass don't

- **In which cases would we use SCSS? And in which cases would we use SASS?**

- **Explain how traditional CSS and Preprocessed CSS workflows are different.**

- **Can we create functions with SASS? If it is true, give an example.**
  Functions are blocks of code that return a single value of any Sass data type. To create a custom function you need two Sass directives, @function and @return. The first creates the function and the second signals the value the function will return.
  @function some-func($param) {
    @return (100/$param);
  }

- **What is nesting? Is it useful? Give an example of nesting**
  Sass will let you nest your CSS selectors in a way that follows the same visual hierarchy of your HTML. Be aware that overly nested rules will result in over-qualified CSS that could prove hard to maintain and is generally considered bad practice.

- **Difference between @use & @import? Give an example**
  The **@import** directive imports the file and any variables or mixins defined in the imported file can then be used in the main file globally.

  The **@use** is similar, but the file is imported only once. 
  Variables, mixins, and functions (what Sass calls “members”) that start with an underscore (_) or hyphen (-) are considered private, and not imported.
  Members from the used file are only made available locally, but not passed along to future imports.
  All imported members are namespaced by default.

- **How can we import other CSS/SASS files in SASS? Give an example**


- **Explain the concept of inheritance in SASS.**
  In Sass, @extend is used to share a set of CSS properties from one selector to another. In complicated CSS where many classes are put together, duplication of properties may occurs. ... The @extend features makes your code less and facilitates you to rewrite it repeatedly.

- **Why use @extend? Give an example**
  The @extend directive helps keep your Sass code very clean.
  %grid { display: grid; grid-gap: 1rem;}
  .grid-2-columns { @extend %grid; color: red;}
  .grid-1-column { @extend %grid; color: blue; }
