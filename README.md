· What is SASS? What does SASS stand for?

  - Sass is a CSS preprocessor, which adds special features such as variables, nested rules and mixins     into regular CSS.

  - Syntactically Awesome Style Sheets

· What is a CSS pre-processor?

  - A CSS preprocessor is a program that allows you to generate CSS from the preprocessor's unique syntax. There are several CSS preprocessors to choose from, however most CSS preprocessors will add some features that do not exist in pure CSS, such as variables, mixins, nested selectors, among others. These features make the CSS structure more readable and easy to maintain.

· What does a pre-processor have to do with SASS?

  - SASS is a pre-processor

· Why use SASS?

  - CSS has evolved over recent years and the problems that lead developers to Sass in the first place seem to be less of an issue today. An example of CSS catching up with Sass is the introduction of CSS Variables.Sass functionality like nesting (when used carefully), mixins & partials still provide value to front-end developers and are not (yet) supported in vanilla CSS.

· SASS has disadvantages? Which are?

  - The developer must have enough time to learn new features present in this preprocessor before using it.
  - Using Sass may cause losing benefits of browser’s built-in element inspector.
  - Code has to be compiled
  - Difficult  Troubleshooting

· What is a SASS Variable? Explain why are useful

  - Sass variables are simple: you assign a value to a name that begins with $, and then you can refer to that name instead of the value itself.

  - Variables make it possible to reduce repetition, do complex math, configure libraries, and much more.

· Explain the SASS variables property with an example.

  - A property’s name can include interpolation, which makes it possible to dynamically generate properties as needed. You can even interpolate the entire property name

  - Sass makes this easier and less redundant by allowing property declarations to be nested. The outer property names are added to the inner, separated by a hyphen.

  .enlarge
    font-size: 14px
  transition:
    property: font-size
    duration: 4s
    delay: 2s

  &:hover
    font-size: 36px

  - If a declaration’s value is null or an empty unquoted string, Sass won’t compile that declaration to CSS at all.

  $rounded-corners: false

  .button
    border: 1px solid black
    border-radius: if($rounded-corners, 5px, null)

· What is a mixin? Why is it important? Give an example

  - A mixin lets you make groups of CSS declarations that you want to reuse throughout your site. You can even pass in values to make your mixin more flexible. A good use of a mixin is for vendor prefixes. Here's an example for transform.

  @mixin transform($property) {
    -webkit-transform: $property;
    -ms-transform: $property;
    transform: $property;
  }
  .box { @include transform(rotate(30deg)); }

· What is SCSS? Give an example

  - SCSS is the syntax of CSS but with all the advantages of SASS

· What is the difference between .scss and .sass syntax.

  - SCSS have the syntax of pure CSS and SASS don't use breaks or curly braces

· In which cases would we use SCSS? And in which cases would we use SASS?

  - I wil use SCSS if I'm more advanced programmer and SASS if I'm a beginer 

· Explain how traditional CSS and Preprocessed CSS workflows are different.

  - Traditional CSS is added to HTML and changes are applied once the page is loaded. With SASS, the .sass document is first compiled, a .css document is created and this is the one that applies the changes.

. Can we create functions with SASS? If it is true, give an example.

  - Yes.

    @function mult($base, $exponent) {
      $result: 1;
      $exponent: $result * $base;
      @return $exponent;
    }

· What is nesting? Is it useful? Give an example of nesting.

  - Sass will let you nest your CSS selectors in a way that follows the same visual hierarchy of your HTML. Is useful for have more organized CSS.

  nav
  ul
    margin: 0
    padding: 0
    list-style: none

  li
    display: inline-block

  a
    display: block
    padding: 6px 12px
    text-decoration: none

· Difference between @use & @import? Give an example

  - Fundamentally both rules do the same thing - load members inside another module. The main differences is how they handle members. @import makes everything globally accessible in the target file. Same as @import, @use rule enables us to break our stylesheet into more practical, smaller sections and load them inside other stylesheets. The key difference is how you access the original files' members. To do this you will need to refer to the namespace of the original file.

  // _box.scss

  @use 'button';

  .boxButton {
      @include button.buttonSmall;
      margin: 1rem + button.$radius;
  }

- How can we import other CSS/SASS files in SASS? Give an example

· Explain the concept of inheritance in SASS.

  - Using @extend lets you share a set of CSS properties from one selector to another.

· Why use @extend? Give an example

  - Lets you share a set of CSS properties from one selector to another.

  %message-shared {
    border: 1px solid #ccc;
    padding: 10px;
    color: #333;
  }

  .message {
    @extend %message-shared;
  }