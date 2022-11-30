`#sass` `#css` `#html` `#assembler-institute` `#master-in-software-engineering`

# Assembler Institute - SASS - Clone Instagram <!-- omit in toc -->

<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0-blue.svg?cacheSeconds=2592000" />
</p>

> The purpose of this project is to learn the basics of SASS and put them into practice by building a visual replica of Instagram

## Index <!-- omit in toc -->

- [Theory](#theory)
- [Requirements](#requirements)
- [Repository](#repository)
- [Technologies used](#technologies-used)
- [Project delivery](#project-delivery)
- [Resources](#resources)

## Theory

### What is SASS? What does SASS stand for?

SASS (which stands for 'Syntactically awesome style sheets’) is an extension of CSS that enables you to use things like variables, nested rules, inline imports and more. It also helps to keep things organised and allows you to create style sheets faster.

### What is a CSS pre-processor?

A CSS preprocessor is a program that lets you generate CSS from the preprocessor's own unique syntax. There are many CSS preprocessors to choose from, however most CSS preprocessors will add some features that don't exist in pure CSS, such as mixin, nesting selector, inheritance selector, and so on. These features make the CSS structure more readable and easier to maintain.

### What does a pre-processor have to do with SASS?

SASS is one of a bunch of CSS pre-processor

### Why use SASS?

Here are seven benefits of using SASS:

- Uses the same CSS syntax
- Use of variables
- Nested syntax
- It includes mixins
- Use of modules
- It has a large community and is well documented
- If you know SASS, you can customize Bootstrap 4

### SASS has disadvantages? Which are?

- The developer must have enough time to learn new features present in this preprocessor before using it.
- Using Sass may cause losing benefits of browser’s built-in element inspector.
- Code has to be compiled
- Difficult Troubleshooting

### What is a SASS Variable? Explain why are useful

A variable allows you us store a value or a set of values, and to reuse these variables throughout our SASS files as many times we want and wherever we want. Easy, powerful, and useful.

### Explain the SASS variables property with an example.

```css
$blue: #004bb4;
$ubuntu-font: "Ubuntu", "Arial", "Helvetica", sans-serif;
$nunito-font: "Nunito", "Arial", "Helvetica", sans-serif;
```

```css
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

### What is a mixin? Why is it important? Give an example

Mixins are like functions in other programming languages. They return a value or set of values and can take parameters including default values. Note that SASS also has functions, so do not confuse a mixin with a function.

For example:

```css
@mixin set-font($family: "Ubuntu", $weight: 400, $style: normal) {
  font-family: $family, "Arial", "Helvetica", sans-serif;
  font-style: $style;
  font-weight: $weight;
}
```

```css
h1 {
  @include set-font;
  color: $blue;
}
```

### What is SCSS? Give an example

SCSS (Sassy CSS): Uses the .scss file extension and is fully compliant with CSS syntax. It is the new version of SASS.

### What is SASS? Give an example

Indented (simply called 'Sass'): Uses .sass file extension and indentation rather than brackets; it is not fully compliant with CSS syntax, but it's quicker to write. It’s the old version of SASS, but it will never be deprecated!

### What is the difference between .scss and .sass syntax.

Example.sass - sass is the older syntax

```css
$font-stack: Helvetica,sans-serif;
$primary-color:#333;
body{
font:100% $font-stack;
color:$primary-color;
}
Extension *.scss
Requires the use of {}
Requires the use of ;
```

Example.scss - sassy css is the new syntax as of Sass 3

```css
$font-stack: Helvetica,sans-serif
$primary-color:#333
body
font:100% $font-stack
color:$primary-color
Extension *.sass
Does not requires the use of {}
Does not requires the use of ;
```

### In which cases would we use SCSS? And in which cases would we use SASS?

In large projects where there is a lot of code we will use SCSS, and if we have a little code we can use SASS to

### Explain how traditional CSS and Preprocessed CSS workflows are different.

### Can we create functions with SASS? If it is true, give an example.

### What is nesting? Is it useful? Give an example of nesting

### Difference between @use & @import? Give an example

### How can we import other CSS/SASS files in SASS? Give an example

### Explain the concept of inheritance in SASS.

### Why use @extend? Give an example

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
