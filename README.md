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

What is SASS? What does SASS stand for?

Sass stands for Syntactically Awesome Stylesheet and is an extension to CSS.

Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.

What is a CSS pre-processor?

A CSS preprocessor is a program that lets you generate CSS from the preprocessor's own unique syntax. There are many CSS preprocessors to choose from, however most CSS preprocessors will add some features that don't exist in pure CSS, such as mixin, nesting selector, inheritance selector, and so on.These features make the CSS structure more readable and easier to maintain.

To use a CSS preprocessor, you must install a CSS compiler on your web server; Or use the CSS preprocessor to compile on the development environment, and then upload compiled CSS file to the web server.

What does a pre-processor have to do with SASS?

In short, Sass is a CSS preprocessor, which adds special features such as variables, nested rules and mixins (sometimes referred to as syntactic sugar) into regular CSS. The aim is to make the coding process simpler and more efficient.

Why use SASS?

SASS enables you to use things like variables, nested rules, inline imports and more. It also helps to keep things organised and allows you to create style sheets faster. Sass is compatible with all versions of CSS.

SASS has disadvantages? Which are?

-The developer must have enough time to learn new features present in this preprocessor before using it.
-Using Sass may cause losing benefits of browser's built-in element inspector.
-Code has to be compiled.
-Difficult Troubleshooting.

What is a SASS Variable? Explain why are useful

Variables are a way to store information that you can re-use later.

Explain the SASS variables property with an example.

$myFont: Helvetica, sans-serif;
$myColor: red;
$myFontSize: 18px;
$myWidth: 680px;

body {
  font-family: $myFont;
  font-size: $myFontSize;
  color: $myColor;
}

What is a mixin? Why is it important? Give an example

Mixins allow you to define styles that can be re-used throughout your stylesheet. They make it easy to avoid using non-semantic classes like .float-left, and to distribute collections of styles in libraries.

The @mixin directive lets you create CSS code that is to be reused throughout the website.

The @include directive is created to let you use (include) the mixin.

@mixin important-text {
  color: red;
  font-size: 25px;
  font-weight: bold;
  border: 1px solid blue;
}

.danger {
  @include important-text;
  background-color: green;
}

What is SCSS? Give an example

SCSS is a special type of file for SASS, a program written in Ruby that assembles CSS style sheets for a browser.

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

What is SASS? Give an example

Sass is a CSS pre-processor.

Sass reduces repetition of CSS and therefore saves time.

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

What is the difference between .scss and .sass syntax.

SASS follows strict indentation, SCSS has no strict indentation.
SASS has a loose syntax with white space and no semicolons, the SCSS resembles more to CSS style and use of semicolons and braces are mandatory.
SASS file extension is .sass and SCSS file extension is .scss.

Indentations: The original SASS (as opposed to SCSS) works with indentations and line breaks to structure the code. You don’t need parentheses to display nesting or semicolons to mark line ends.

Version 3 of SASS has SCSS as an official syntax. The biggest difference: the use of curly braces and semicolons.

In which cases would we use SCSS? And in which cases would we use SASS?

Sass supports two different syntaxes. Each one can load the other, so it's up to you and your team which one to choose.

The variations command fierce loyalty: Some users swear by the simple handling of the original SASS, where you don’t have to pay attention to the correct positioning of the parentheses when moving snippets of source code and can generally create slimmer, clearer code. You end up with fewer characters and lines overall as a result of the “indented syntax.” 

The SCSS enthusiasts, on the other hand, are happy to take the additional effort in stride, because it’s more similar to what you already know from using CSS.

Explain how traditional CSS and Preprocessed CSS workflows are different.

SASS should be transpiled before being interpreted by the browser.

Can we create functions with SASS? If it is true, give an example.

Yes.

 @function function-name($args) {  
 @return value-to-be-returned;  
}

@function column-width($col, $total) {  
 @return percentage($col/$total);  
}

.col-3 {  
 width: column-width(3, 8);  
}

.col-5 {  
 width: column-width(5, 8);  
}

.col-3 {  
 width: 37.5%;  
}

.col-5 {  
 width: 62.5%;  
}

more useful

$total: 8;

@function column-width($col) {  
 @return percentage($col/$total);  
}

@for $i from 1 through $total {  
 .col-#{$i} { width: column-width($i) };  
}

.col-1 { width: 12.5%; }  
.col-2 { width: 25%; }  
.col-3 { width: 37.5%; }  
.col-4 { width: 50%; }  
.col-5 { width: 62.5%; }  
.col-6 { width: 75%; }  
.col-7 { width: 87.5%; }  
.col-8 { width: 100%; }

What is nesting? Is it useful? Give an example of nesting

Rather than repeating the same selectors over and over again, you can write one style rules inside another. Sass will automatically combine the outer rule’s selector with the inner rule’s.

Nested rules are super helpful, but they can also make it hard to visualize how much CSS you’re actually generating. The deeper you nest, the more bandwidth it takes to serve your CSS and the more work it takes the browser to render it. Keep those selectors shallow!

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

Difference between @use & @import? Give an example

Import is deprecated but both do the same thing.

Fundamentally both rules do the same thing - load members inside another module. The main differences is how they handle members. @import makes everything globally accessible in the target file. This enables an endless chain of imported files where it's difficult to trace where your variables and mixins are coming from. It also allows for overlap and makes it difficult to trace back why your perfect css breaks. This is a problem especially with complex file structures and projects with multiple contributors and global libraries, which is why @import is no longer recommended by Sass.

Same as @import, @use rule enables us to break our stylesheet into more practical, smaller sections and load them inside other stylesheets. The key difference is how you access the original files' members.

How can we import other CSS/SASS files in SASS? Give an example

??

Explain the concept of inheritance in SASS.

Sass allows us to inherit properties from other selectors to reduce the amount of code we have to type and/or combining we have to do.

As an example, let’s consider that we have two buttons. They look exactly the same except for the font and background colors.

We can define a basic button style, then let each of the two buttons inherit all the properties from it and add their own custom ones.

To inherit a property from another selector, we use the @extend rule, followed by the name of the selector we want to inherit from

Why use @extend? Give an example

Using @extend lets you share a set of CSS properties from one selector to another. It helps keep your Sass very DRY.

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

better use mixing/include than abstract/extend class because it also inherit nested classes
