# InstagramClone

What is SASS? What does SASS stand for?
SASS (which stands for 'Syntactically awesome style sheets’) is an extension of CSS that enables you to use things like variables, nested rules, inline imports and more. It also helps to keep things organised and allows you to create style sheets faster.

What is a CSS pre-processor?
Style sheets in the advanced syntax are processed by the pre-processor, and turned into regular CSS style sheets. However, they do not extend the CSS standard itself.

What does a pre-processor have to do with SASS?
SASS is the most useed CSS pre-processor

Why use SASS?
Sass lets you use features that do not exist in CSS, like variables, nested rules, mixins, imports, inheritance, built-in functions, and other stuff.

SASS has disadvantages? Which are?

- The developer must have enough time to learn new features present in this preprocessor before using it.
- Using Sass may cause losing benefits of browser’s built-in element inspector.
- Code has to be compiled
- Difficult Troubleshooting

What is a SASS Variable? Explain why are useful
Sass Variables allow you to define a value once and use it in multiple places. Variables begin with dollar signs and are set like CSS properties. if you wanted to set the same height for two different selectors

Explain the SASS variables property with an example.
You could create a variable called -> $height: 100%

What is a mixin? Why is it important? Give an example
Mixin allows the developer to use CSS features like it's a programming language, using parameters to reuse the same code with different values.

What is SCSS? Give an example
SCSS (Sassy CSS): Uses the .scss file extension and is fully compliant with CSS syntax. It is the new version of SASS.

What is SASS? Give an example
Indented (simply called 'Sass'): Uses .sass file extension and indentation rather than brackets; it is not fully compliant with CSS syntax, but it's quicker to write. It’s the old version of SASS, but it will never be deprecated!

What is the difference between .scss and .sass syntax.
.scss uses brackets and .sass uses indentation instead of brackets

In which cases would we use SCSS? And in which cases would we use SASS?
It's about preferences, but most people uses SCSS because it's more like CSS

Explain how traditional CSS and Preprocessed CSS workflows are different.
CSS is read by the browser while Preprocessed CSS need to be compiled

Can we create functions with SASS? If it is true, give an example.
Mixins are some kind of common functions on programming languages.

Example:
@mixin textTransform ($value) {
text-transform: $value;
}
We can call that using the @include in a selector like:
.title {
@include textTransform(uppercase);
}

What is nesting? Is it useful? Give an example of nesting
Nesting allows the developer to includes selectors inside other selectors like:
.body {
color:white;
.title {
font-weight: bold
}
}

Difference between @use & @import? Give an example
Fundamentally both rules do the same thing - load members inside another module. The main differences is how they handle members. @import makes everything globally accessible in the target file. This enables an endless chain of imported files where it's difficult to trace where your variables and mixins are coming from. It also allows for overlap and makes it difficult to trace back why your perfect css breaks. This is a problem especially with complex file structures and projects with multiple contributors and global libraries, which is why @import is no longer recommended by Sass.
Same as @import, @use rule enables us to break our stylesheet into more practical, smaller sections and load them inside other stylesheets. The key difference is how you access the original files' members. To do this you will need to refer to the namespace of the original file. Here's an example of simple SCSS partials.

How can we import other CSS/SASS files in SASS? Give an example
@use "relative path";

Explain the concept of inheritance in SASS.
You can use %(element name) to declare a selector with it's own css attributes

Why use @extend? Give an example
If you already created an %element, you can use it these base elements with @extend
%card {
border: 1px solid black;
}
.little-card {
@extend %card;
width: 20%
}
