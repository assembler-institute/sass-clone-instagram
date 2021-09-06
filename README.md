`#sass` `#css` `#html` `#master-in-software-engineering`

## What is SASS? What does SASS stand for?

Sass is a stylesheet language that’s compiled to CSS. It allows you to use variables, nested rules, mixins, functions, and more, all with a fully CSS-compatible syntax. Sass helps keep large stylesheets well-organized and makes it easy to share design within and across projects.

## What is a CSS pre-processor?

A CSS preprocessor is a program that lets you generate CSS from the preprocessor's own unique syntax. There are many CSS preprocessors to choose from, however most CSS preprocessors will add some features that don't exist in pure CSS, such as mixin, nesting selector, inheritance selector, and so on. These features make the CSS structure more readable and easier to maintain.
https://developer.mozilla.org/en-US/docs/Glossary/CSS_preprocessor

## What does a pre-processor have to do with SASS?

Sass is a pre-processor that compiles a specific syntax into native CSS code.

## Why use SASS?

Stylesheets are getting larger, more complex, and harder to maintain. This is where a CSS pre-processor can help.
Sass allows the use of features that do not exist in CSS, like variables, nested rules, mixins, imports, inheritance, built-in functions, and other stuff. 

## Which are some disadvantages of SASS?

· The developer must have enough time to learn new features present in this preprocessor before using it.
· Using Sass may cause losing benefits of the browser's built-in element inspector.
· Code has to be compiled previously into CSS because browsers don’t process Sass syntax.
· Difficult Troubleshooting.

## What is a SASS Variable? Explain why they are useful.

A variable is a named reference used to store a value that we could reuse multiple times throughout our stylesheet. Thus, instead of specifying the value, the name of the variable that stores it is typed. Sass uses the reserves the $ symbol to define variables.
 
## Explain the SASS variables property with an example.

  $cyan:    #0dcaf0;

  .my-box {
    background-color: $cyan;
  }

## What is a mixin? Why is it important? Give an example.

A mixin allows us to make groups of CSS declarations that can be reused throughout our stylesheet. Mixins are an important feature because can be used to encapsulate styles that can be dropped into a single style rule; can contain style rules of their own that can be nested in other rules or included at the top level of the stylesheet; or they can just serve to modify variables.

## What is SCSS? Give an example:

  $font-stack: Helvetica,sans-serif;
  $primary-color: #333;

  body{
    font:100% $font-stack;
    color:$primary-color;
  }

## What is SASS? Give an example:

  $font-stack: Helvetica,sans-serif
  $primary-color: #333

  body
    font:100% $font-stack
    color:$primary-color

## What is the difference between .scss and .sass syntax?

SCSS uses the .scss file extension whose syntax is fully compliant with CSS, meaning that it uses curly braces to delimit declaration blocks, whereas SASS uses the .sass file extension, it replaces the curly braces with strict indentation and line breaks like in YAML, and doesn’t use the semicolon at the end of a declaration.

## In which cases would we use SCSS? And in which cases would we use SASS?

The use of SCSS or SASS is under personal preference, but many CSS and UI Frameworks use SCSS over SASS by default.

## Can we create functions with SASS? If it is true, give an example.

  @function pow($base, $exponent) {
    $result: 1;
    @for $_ from 1 through $exponent {
      $result: $result * $base;
    }
    @return $result;
  }

## What is nesting? Is it useful? Give an example of nesting.

Nesting is a style rule that allows us to write style rules inside another declaration block. Thus, Sass will combine the outer rule’s selector with the inner rule’s. Nested rules are useful to avoid the repetition of the same selector over and over again.

  .user-table {
    border: 1px solid rgba(0,0,0,10%);
    border-spacing: 0.125rem;
    border-radius: 0.25rem;
    box-shadow: 0 0 4px rgba(0,0,0,25%);

    &__cell {
      padding: 0.5rem 2rem;
      text-align: center;
      border: 1px solid rgba(0,0,0,10%);
      border-radius: 0.25rem;
    }
  }
 
## Difference between @use & @import? Give an example:

The new @use is similar to @import. but has some notable differences:
· With @use, the file is only imported once, no matter how many times you @use it in a project.
· With @use, variables, mixins, and functions (what Sass calls “members”) that start with an underscore (_) or hyphen (-) are considered private, and not imported.
· With @use, members from the used file are only made available locally, but not passed along to future imports.
· With @use, all imported members are namespaced by default.

## How can we import other CSS/SASS files in SASS? Give an example:

Yes, with the use of the at-rule @use that allows us to import other Sass and CSS files like modules.

  // _base.scss
  $font-stack:    Helvetica, sans-serif;
  $primary-color: #333;

  // styles.scss
  @use 'base';

  .inverse {
    background-color: base.$primary-color;
    color: white;
  }
 
## Why use @extend? Give an example:

Using @extend lets you share a set of CSS properties from one selector to another. 

  %message-shared {
    border: 1px solid #ccc;
    padding: 10px;
    color: #333;
  }

  .message {
    @extend %message-shared;
  }

