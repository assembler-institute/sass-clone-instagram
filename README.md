`#sass` `#css` `#html`

# SASS - Clone Instagram <!-- omit in toc -->

<p>
  <img alt="login page" src="assets/img/login-page.PNG" />
</p>
<p>
  <img alt="login page" src="assets/img/home-page.PNG" />
</p>

> Sass (which stands for 'Syntactically awesome style sheets) is an extension of CSS that enables you to use things like variables, nested rules, inline imports and more

## Index <!-- omit in toc -->

- [Description](#description)
- [Installation](#installation)
- [Resources](#resources)
- [Theory](#theory)

## Description

This project aims to improve HTML skils, learn how to work with HTML and SASS, to improve front end and SASS knowledge.

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

## Resources

- [SASS documentation](https://sass-lang.com/)
- [W3S SASS](https://www.w3schools.com/sass/)
- [SASS Guidelines](https://sass-guidelin.es/es/)
- [Organizing SASS Projects](https://blog.prototypr.io/how-i-organize-sass-projects-e2d7760df86f)
- [Why don't use @import](https://www.youtube.com/watch?v=CR-a8upNjJ0)

## Theory

- SASS is a tool known as a CSS preprocessor, a scripting language that extend the default capabilities of CSS.
- SASS stands for Syntactically Awesome Style Sheet.
- CSS pre-processor is a program that let you generate CSS from the preprocessor’s own unique syntax.
- Using SASS we can write more readable, maintainable and reusable code.
- Using SASS variable is a way to store values for colors, fonts or any CSS value that you want to reuse. Use the $ symbol. This becomes extremely powerful when working on large Project.
- Mixins is a method to group together multiple CSS declarations for reuse throughout your project. To add mixin into our code, use @include directive.
- Sass functions can receive arguments and return a single value. We can do standard math: +, -, \*, /.
- Nesting is used nesting to nest child selectors inside of the parent selector as CSS lacks a visual structure to make it easier to read. The code will be cleaner and less repetitive.
- To import other CSS/SASS files in SASS, we divide up our Sass into separate files representing different components. Then we import the partial using an @import directive.
- Inheritance allows multiple classes to share a common set of properties with one another. We implement this using the @extend directive.
- The ampersand & operator is often used when nesting in SASS and is an extremely useful feature.
- Placeholder selectors are mainly useful when writing a SASS library where each style rule is optional.
