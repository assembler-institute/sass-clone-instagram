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

## Theory

- What is SASS? What does SASS stand for?

  Sass (short for syntactically awesome style sheets) is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS).

- What is a CSS pre-processor?

  A CSS preprocessor is a program that lets you generate CSS from the preprocessor's own unique syntax.

- What does a pre-processor have to do with SASS?

  SASS is itself a pre-processor, and it extends CSS' capabilities immensely.

- Why use SASS?

  SASS enables you to use things like variables, nested rules, inline imports and more. It also helps to keep things organised and allows you to create style sheets faster. Sass is compatible with all versions of CSS.

- SASS has disadvantages? Which are?

  SASS has many disadvantages
  · The developer must have enough time to learn new features present in this preprocessor before using it.
  · Using Sass may cause losing benefits of browser’s built-in element inspector.
  · Code has to be compiled
  · Difficult Troubleshooting

- What is a SASS Variable? Explain why are useful

  Sass variables are simple: you assign a value to a name that begins with $ , and then you can refer to that name instead of the value itself.

- Explain the SASS variables property with an example.

  Sass variables are simple: you assign a value to a name that begins with $, and then you can refer to that name instead of the value itself. But despite their simplicity, they're one of the most useful tools Sass brings to the table. Variables make it possible to reduce repetition, do complex math, configure libraries, and much more.

  $base-color: #c6538c;
  $border-dark: rgba($base-color, 0.88);

  .alert {
    border: 1px solid $border-dark;
  }

- What is a mixin? Why is it important? Give an example

  Mixins allow you to define styles that can be re-used throughout your stylesheet. They make it easy to avoid using non-semantic classes like . float-left , and to distribute collections of styles in libraries. ... A mixin's name can be any Sass identifier, and it can contain any statement other than top-level statements.

  @mixin reset-list {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  @mixin horizontal-list {
    @include reset-list;

    li {
      display: inline-block;
      margin: {
        left: -2px;
        right: 2em;
      }
    }
  }

  nav ul {
    @include horizontal-list;
  }

- What is SCSS? Give an example

  SCSS is a special type of file for SASS, a program written in Ruby that assembles CSS style sheets for a browser, and for information, SASS adds lots of additional functionality to CSS like variables, nesting and more which can make writing CSS easier and faster.

  /* .scss file */
  $bgcolor: blue;
  $textcolor: red;
  $fontsize: 25px;

  /* Use the variables */
  body {
    background-color: $bgcolor;
    color: $textcolor;
    font-size: $fontsize;
  }

- What is SASS? Give an example

  SASS (Syntactically Awesome Style Sheets) is a pre-processor scripting language that will be compiled or interpreted into CSS.

  /* SASS */
  $primary-color: green
  $primary-bg: red

  /* Use the variables */
  body
    color: $primary-color
    background: $primary-bg

- What is the difference between .scss and .sass syntax.

  .scss uses enclosures and ; , while .sass uses indentation

- In which cases would we use SCSS? And in which cases would we use SASS?

  We should mostly use scss, since it's better to code and has all the advantages of sass.

- Explain how traditional CSS and Preprocessed CSS workflows are different.

  Traditional CSS is directly interpreted by the browser, but Pre-processed CSS must be compiled and converted before it can be understood by the browser.

- Can we create functions with SASS? If it is true, give an example.

  Functions allow you to define complex operations on SassScript values that you can re-use throughout your stylesheet. They make it easy to abstract out common formulas and behaviors in a readable way.

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

- What is nesting? Is it useful? Give an example of nesting

  It's basically including sublocks inside of blocks of code. Among others, it can be applied to loops in JS, and it can also be applied in Sass:

  nav {
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    li { display: inline-block; }

    a {
      display: block;
      padding: 6px 12px;
      text-decoration: none;
    }
  }

- Difference between @use & @import? Give an example

  The main difference is that when using "@use" file is only imported once, which when using "@import" it's not necessarely the case.

- How can we import other CSS/SASS files in SASS? Give an example

  The @use rule loads mixins, functions, and variables from other Sass stylesheets, and combines CSS from multiple stylesheets together. Stylesheets loaded by @use are called "modules". Sass also provides built-in modules full of useful functions.

  // foundation/_code.scss
  code {
    padding: .25em;
    line-height: 0;
  }

  // foundation/_lists.scss
  ul, ol {
    text-align: left;

    & & {
      padding: {
        bottom: 0;
        left: 0;
      }
    }
  }

  // style.scss
  @use 'foundation/code';
  @use 'foundation/lists';

- Explain the concept of inheritance in SASS.

  Inheritance allows you to directly apply the set of properties from one selector to another. Unfortunately, you have to inherit them all, it can't be done selectively.

- Why use @extend? Give an example

  @extend is a feature of Sass that allows classes to share a set of properties with one another. Selectors that @extend a class in Sass will have their selector included right up next to the class it is extending, resulting in a comma separated list.

  Usage:

  .foo {
    color: black;
    border: 1px solid black;
  }

  .bar {
    @extend .foo;
    background-color: red;
  }