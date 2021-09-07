●	What is SASS? What does SASS stand for?
Sass is an extension to CSSS, is a CSS pre-processor completely compatible with all versions of CSS that reduces repetition of CSS and therefore saves time. SASS = Syntactically Awesome Style Sheets.

●	What is a CSS pre-processor?
CSS preprocessors are scripting languages that extend the default capabilities of CSS. They enable us to use logic in our CSS code, such as variables, nesting, inheritance, mixins, functions, and mathematical operations.


●	What does a pre-processor have to do with SASS?
SASS is a pre-processor. A browser does not understand Sass code. Therefore, you will need a Sass pre-processor to convert Sass code into standard CSS.

●	This process is called transpiling. So, you need to give a transpiler (some kind of program) some Sass code and then get some CSS code back.


●	Why use SASS?
Stylesheets are getting larger, more complex, and harder to maintain. This is where a CSS pre-processor can help.
Sass lets you use features that do not exist in CSS, like variables, nested rules, mixins, imports, inheritance, built-in functions, and other stuff.

●	SASS has disadvantages? Which are?
The developer must have enough time to learn new features present in this preprocessor before using it.
Using Sass may cause losing benefits of browser’s built-in element inspector.
Code has to be compiled.
Difficult  Troubleshooting.


●	What is a SASS Variable? Explain why are useful.
Variables are a way to store information that you can re-use later. They are really useful because after the variables are declared, you can use the variables wherever you want. For example variable like myFont, myColor, myFontSize, my width…


●	Explain the SASS variables property with an example.
Sass variables are simple: you assign a value to a name that begins with $, and then you can refer to that name instead of the value itself. Example:

$base-color: #c6538c;
$border-dark: rgba($base-color, 0.88);

.alert {
  border: 1px solid $border-dark;
}


●	What is a mixin? Why is it important? Give an example
The @mixin directive lets you create CSS code that is to be reused throughout the website.
The @include directive is created to let you use (include) the mixin. Example:

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


●	What is SCSS? Give an example
SCSS is the main syntax for the SASS which builds on top of the existing CSS syntax. Example:

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


●	What is SASS? Give an example.
SASS (Syntactically Awesome Style Sheets) is a pre-processor scripting language that will be compiled or interpreted into CSS. SassScript is itself a scripting language. Example:

$primary-color: green
$primary-bg: red

body
  color: $primary-color
  background: $primary-bg


●	What is the difference between .scss and .sass syntax.
SASS is used when we need an original syntax, code syntax is not required for SCSS.
SASS follows strict indentation, SCSS has no strict indentation.
SASS has a loose syntax with white space and no semicolons, the SCSS resembles more to CSS style and use of semicolons and braces are mandatory.
SASS file extension is .sass and SCSS file extension is .scss.



●	In which cases would we use SCSS? And in which cases would we use SASS?
SASS is used when we need an original syntax, code syntax is not required for SCSS.


●	Explain how traditional CSS and Preprocessed CSS workflows are different.
Even though CSS is an integral part of website development, we are limited by its conventions of selectors and properties. Preprocessors are programs that offer the variables missing in CSS. Preprocessors were created to organize CSS via nested definitions, making your code easier to maintain. Preprocessors extend CSS with variables, operators, interpolations, functions, mixins, and many other usable assets.

●	Essentially, a preprocessor takes code that you’ve written in the preprocessed language and converts it into simple CSS code. The preprocessor is comprised of a language, the code that you write, and a compiler that converts the code into standard CSS which is easily read and processed by any web browser.

●	Even though preprocessors have different syntax, they all support a CSS output. More importantly, the resulting CSS file that preprocessors produce functions as regular CSS, so there is no incompatibility with your program.


●	Can we create functions with SASS? If it is true, give an example.
Functions allow you to define complex operations on SassScript values that you can re-use throughout your stylesheet. They make it easy to abstract out common formulas and behaviors in a readable way. Example:

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


●	What is nesting? Is it useful? Give an example of nesting
Sass lets you nest CSS selectors in the same way as HTML. Example:
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



●	Difference between @use & @import? Give an example
The file is only imported once, no matter how many times you @use it in a project.
Variables, mixins, and functions (what Sass calls "members") that start with an underscore (_) or hyphen (-) are considered private, and not imported.
Members from the used file (buttons.scss in this case) are only made available locally, but not passed along to future imports.
Similarly, @extends will only apply up the chain; extending selectors in imported files, but not extending files that import this one.
All imported members are namespaced by default.

@use '_styles.scss';
@import '_styles.scss';


●	How can we import other CSS/SASS files in SASS? Give an example
Sass extends CSS's @use rule with the ability to import Sass and CSS stylesheets, providing access to mixins, functions, and variables and combining multiple stylesheets' CSS together. Unlike plain CSS imports, which require the browser to make multiple HTTP requests as it renders your page, Sass imports are handled entirely during compilation.


●	Explain the concept of inheritance in SASS.
This is one of the most useful features of Sass. Using @extend lets you share a set of CSS properties from one selector to another. It helps keep your Sass very DRY. In our example we're going to create a simple series of messaging for errors, warnings and successes using another feature which goes hand in hand with extend, placeholder classes. A placeholder class is a special type of class that only prints when it is extended, and can help keep your compiled CSS neat and clean.


●	Why use @extend? Give an example
The @extend directive lets you share a set of CSS properties from one selector to another. It is useful if you have almost identically styled elements that only differ in some small details. Example:

.button-basic  {
  border: none;
  padding: 15px 30px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
}

.button-report  {
  @extend .button-basic;
  background-color: red;
}


