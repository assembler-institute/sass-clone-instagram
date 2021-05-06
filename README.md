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
- [How to](#how-to-use)
- [Theory](#theory)
- [Resources](#resources)

## Repository

This is a forked repository of Assembler's repo.

### How to use

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

## Theory

- What is SASS? What does SASS stand for?

  Sass (short for syntactically awesome style sheets) is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS). SassScript is the scripting language itself.

- What is a CSS pre-processor?

  A CSS preprocessor is a program that processes its input data to produce an CSS output later used by the browser.

- What does a pre-processor have to do with SASS?

- Why use SASS?

  It enables you to use things like variables, nested rules, inline imports and more.
  It also helps to keep things organized and allows you to create style sheets faster.

- SASS has disadvantages? Which are?

  - The developer must have enough time to learn new features present in this preprocessor before using it.
  - Using Sass may cause losing benefits of browser’s built-in element inspector.
  - Code has to be compiled. If compilation fails the CSS wont work at all.
  - Difficult Troubleshooting
  - It creates too specific selectors due to nesting

- What is a SASS Variable? Explain why are useful

  Think of variables as a way to store information that you want to reuse throughout your stylesheet. You can store things like colors, font stacks, or any CSS value you think you'll want to reuse. Sass uses the $ symbol to make something a variable.

- Explain the SASS variables property with an example.

  ```
  $font-stack:    Helvetica, sans-serif;
  $primary-color: #333;

  body {
    font: 100% $font-stack;
    color: $primary-color;
  }
  ```

- What is a mixin? Why is it important? Give an example

  Some things in CSS are a bit tedious to write, especially with CSS3 and the many vendor prefixes that exist. A mixin lets you make groups of CSS declarations that you want to reuse throughout your site. You can even pass in values to make your mixin more flexible. A good use of a mixin is for vendor prefixes. Here's an example for transform.

  ```
  @mixin transform($property) {
    -webkit-transform: $property;
    -ms-transform: $property;
    transform: $property;
  }
  .box { @include transform(rotate(30deg)); }
  ```

- What is SCSS? Give an example

  SCSS is an extension of the syntax of CSS. This means that every valid CSS stylesheet is a valid SCSS file with the same meaning. This syntax is enhanced with the Sass features described below. Files using this syntax have the .scss extension.

- What is SASS? Give an example

  It is an older syntax, known as the indented syntax (or sometimes just “Sass”), provides a more concise way of writing CSS. It uses indentation rather than brackets to indicate nesting of selectors, and newlines rather than semicolons to separate properties. Files using this syntax have the .sass extension.

- What is the difference between .scss and .sass syntax.

  The difference is UI. Underneath the textual exterior they are identical. This is why sass and scss files can import each other. Actually, Sass has four syntax parsers: scss, sass, CSS, and less. All of these convert a different syntax into an Abstract Syntax Tree which is further processed into CSS output or even onto one of the other formats via the sass-convert tool.

- In which cases would we use SCSS? And in which cases would we use SASS?

  We use SCSS or SASS depending on personal preferences since the differences are seen at the breakpoints but have the same sintax.

- Explain how traditional CSS and Preprocessed CSS workflows are different.

  The main difference starts with the mindset for programming with each script language. With preprocessed CSS we need to structure the styles before we start writing, to take advantage of the preprocessor tools.

- Can we create functions with SASS? If it is true, give an example.

  Functions are defined using the @function at-rule. A function’s name can be any Sass identifier. It can only contain universal statements, as well as the @return at-rule which indicates the value to use as the result of the function call. Functions are called using the normal CSS function syntax.

  ```
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
  ```

- What is nesting? Is it useful? Give an example of nesting

  ass will let you nest your CSS selectors in a way that follows the same visual hierarchy of your HTML. Be aware that overly nested rules will result in over-qualified CSS that could prove hard to maintain and is generally considered bad practice.

  With that in mind, here's an example of some typical styles for a site's navigation:

  ```
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
  ```

- Difference between @use & @import? Give an example

  Fundamentally both rules do the same thing - load members inside another module. The main differences is how they handle members. @import makes everything globally accessible in the target file, while @use reduces the scope.

- How can we import other CSS/SASS files in SASS? Give an example

  Import works for _.css the same way as for _.scss files - just omit the extension:

  ```
  @use "path/to/file";
  ```

- Why use @extend? Give an example

  This is one of the most useful features of Sass. Using @extend lets you share a set of CSS properties from one selector to another. It helps keep your Sass very DRY. In our example we're going to create a simple series of messaging for errors, warnings and successes using another feature which goes hand in hand with extend, placeholder classes. A placeholder class is a special type of class that only prints when it is extended, and can help keep your compiled CSS neat and clean.

  ```
  /* This CSS will print because %message-shared is extended. */
  %message-shared {
    border: 1px solid #ccc;
    padding: 10px;
    color: #333;
  }

  // This CSS won't print because %equal-heights is never extended.
  %equal-heights {
    display: flex;
    flex-wrap: wrap;
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
  ```

  What the above code does is tells .message, .success, .error, and .warning to behave just like %message-shared. That means anywhere that %message-shared shows up, .message, .success, .error, & .warning will too. The magic happens in the generated CSS, where each of these classes will get the same CSS properties as %message-shared. This helps you avoid having to write multiple class names on HTML elements.

  You can extend most simple CSS selectors in addition to placeholder classes in Sass, but using placeholders is the easiest way to make sure you aren't extending a class that's nested elsewhere in your styles, which can result in unintended selectors in your CSS.

  Note that the CSS in %equal-heights isn't generated, because %equal-heights is never extended.

## Resources

- [SASS documentation](https://sass-lang.com/)
- [W3S SASS](https://www.w3schools.com/sass/)
- [SASS Guidelines](https://sass-guidelin.es/es/)
- [Organizing SASS Projects](https://blog.prototypr.io/how-i-organize-sass-projects-e2d7760df86f)
- [Why don't use @import](https://www.youtube.com/watch?v=CR-a8upNjJ0)
