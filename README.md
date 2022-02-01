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
- [Theory Questions](#questions)
- [Repository](#repository)
- [Technologies used](#technologies-used)
- [Project delivery](#project-delivery)
- [Resources](#resources)

## Requirements

- You must use variables at least once in the project.
- You must use nesting.
- You must use inheritance at least once in the project.
- You cannot use third party libraries for the development of this pill

## Questions

 What is SASS? What does SASS stand for?
  >Is an extension of CSS that enables you to use things like variables, nested rules, inline imports and more. It also helps to keep things organised and allows you to create style sheets faster
 What is a CSS pre-processor?
  >CSS preprocessors are scripting languages that extend the default capabilities of CSS. They enable us to use logic in our CSS code, such as variables, nesting, inheritance, mixins, functions, and mathematical operations. CSS preprocessors make it easy to automate repetitive tasks
 What does a pre-processor have to do with SASS?
  >Processes the information and compiles it before sending it to the CSS reader.
 Why use SASS?
  > -It offers variables for whatever you want
    -It's CSS syntax friendly
    -It uses nested syntax
    -It includes mixins
    -If you know SASS, you can customize Bootstrap 4
 SASS has disadvantages? Which are?
  > -Using Sass may cause losing benefits of browser's built-in element inspector.
    -Code has to be compiled.
    -Difficult Troubleshooting.
    -The developer must have enough time to learn new features present in this preprocessor before using it.
 What is a SASS Variable? Explain why are useful
  >A variable allows you to store a value or a set of values, and to reuse these variables throughout your SASS files as many times you want and wherever you want. 
 Explain the SASS variables property with an example.
  ```
  $blue: #004BB4;
  $ubuntu-font: 'Ubuntu', 'Arial', 'Helvetica', sans-serif;
  $nunito-font: 'Nunito', 'Arial', 'Helvetica', sans-serif; 
  ```
  >Once you have created the variables, you can use them wherever you need to, like this:
  ```
  h1 {
    font: $ubuntu-font;
    color: $blue;
  }
  a {
    font: $nunito-font;
    background-color: $blue;
    padding: 6px;
  }
  ```
 What is a mixin? Why is it important? Give an example
  >Mixins are like functions in other programming languages. They return a value or set of values and can take parameters including default values.
  ```
  @mixin set-color($color){
    border-color:$color;
    background-color:$color;
    color:$color;
  }
  div{
    @include set-color(red);
  }
  ```
 What is SCSS? Give an example
  > SCSS (Sassy CSS) and used throughout this reference, is an extension of the syntax of CSS. This means that every valid CSS stylesheet is a valid SCSS file with the same meaning. This syntax is enhanced with the Sass features described below. Files using this syntax have the .scss extension.
 What is SASS? Give an example
  >The second and older syntax, known as the indented syntax (or sometimes just “Sass”), provides a more concise way of writing CSS. It uses indentation rather than brackets to indicate nesting of selectors, and newlines rather than semicolons to separate properties. Files using this syntax have the .sass extension.
 What is the difference between .scss and .sass syntax.
  >The difference is syntax. in .sass extension you don't have to put brackets, neither ";".
 In which cases would we use SCSS? And in which cases would we use SASS?
  >We should use SCSS everycase, because SASS will be deprecated soon.
 Explain how traditional CSS and Preprocessed CSS workflows are different.
  >
 Can we create functions with SASS? If it is true, give an example.
  >Yes, we can create it with mixin rule.
  ```
  @mixin set-color($color){
    border-color:$color;
    background-color:$color;
    color:$color;
  }
  div{
    @include set-color(red);
  }
  ```
 What is nesting? Is it useful? Give an example of nesting
  > is a type of rule in css, it allow us to select multiple tags in CSS, it's more easier in SASS.
  >Example
  ```
  nav {
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }
    li {
      display: inline-block;
    }
    a {
      display: block;
      padding: 6px 12px;
      text-decoration: none;
    }
  }
  ```
 Difference between @use & @import? Give an example
  >@use will import the file only once, @import will import all the entire document, including other imports in the imported file, it's more usefull the @use.
 How can we import other CSS/SASS files in SASS? Give an example
  > @import/@use "urlFile";
 Explain the concept of inheritance in SASS.
  >Using @extend lets you share a set of CSS properties from one selector to another. In our example we're going to create a simple series of messaging for errors, warnings and successes using another feature which goes hand in hand with extend, placeholder classes. A placeholder class is a special type of class that only prints when it is extended, and can help keep your compiled CSS neat and clean.
 Why use @extend? Give an example
  >The @extend directive lets you share a set of CSS properties from one selector to another.

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
