## What is SASS? What does SASS stand for?

>Sass (which stands for “Syntactically awesome style sheets”) is the most mature, stable, and powerful professional grade CSS extension language in the world. Sass enables you to use things like variables, nested rules, inline imports and more. It also helps to keep things organised and allows you to create style sheets faster.

## What is a CSS pre-processor?

>CSS preprocessors are scripting languages that extend the default capabilities of CSS. They enable us to use logic in our CSS code, such as variables, nesting, inheritance, mixins, functions, and mathematical operations.


## What does a pre-processor have to do with SASS?

>Each CSS preprocessor has its own syntax that they compile into regular CSS so that browsers can render it on the client side. CSS preprocessors all do similar things but in a different way and with their own syntaxes.


## Why use SASS?

>With CSS you can design web pages according to your ideas and your taste. However, the cascading style sheet language has its limits. With this style sheet language you can greatly simplify the design work. It reduces the time to create and maintain CSS. It allows a modular organization of styles, which is vital for large projects. It provides advanced structures typical of programming languages, such as variables, lists, functions and control structures. It allows to generate different types of output, compressed, normal or minimized, working both in development and production, and it is very easy to do. It allows to watch the files, in such a way that, if there has been a change in the stylesheet, it is automatically regenerated (watch mode).


## SASS has disadvantages? Which are?

>Like everything, Sass has some disadvantages, which are extensible to any other preprocessor you use: You have to learn how to use a new tool, which for someone is a disadvantage. There is a time consumption in the process of generating or compiling the CSS, especially if the SCSS file is very large. It's not a lot of time, but there is that small delay and it has a more complex syntax than CSS.


## What is a SASS Variable? Explain why are useful

>Sass allows the use of variables that can store information you can use throughout your style sheet. For example, you can store a colour value in a variable at the top of the file, and then use this variable when setting the colour of your elements. This enables you to quickly change your colours without having to modify each line separately.


## Explain the SASS variables property with an example.

>For example, if we have the following code in sass:
```
$text-color: red;
$main-color: blue;
 
body {
  color: $text-color;
  background-color: $main-color;
}
```
>The properties color and background-color are setted by the variables $text-color and $main-color, so the final result will be:
```
body {
  color: red;
  background-color: blue;
}
```

## What is a mixin? Why is it important? Give an example.

>One of the advantages of using preprocessors is their ability to take complex, long-winded code and simplify it. This is where mixins come in handy! For example, if you need to include the vendor prefixes, you can use a mixin instead. Take a look at this example for border-radius:
```
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
      -ms-border-radius: $radius;
          border-radius: $radius;
}
.box { @include border-radius(10px); }
```
>Notice the @mixin directive at the top. It has been given the name border-radius and uses the variable $radius as its parameter. This variable is used to set the radius value for each element. Later, the @include directive is called, along with the mixin name (border-radius) and a parameter (10px). Thus .box { @include border-radius(10px); }.
The following CSS is produced:
```
.box {
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  border-radius: 10px;
}
```


## What is SCSS? Give an example

>SCSS (Sassy CSS) is one of the two syntax options that Sass includes. SCSS uses the .scss file extension and is fully compliant with CSS syntax
```
$text-color: red;
$main-color: blue;
 
body {
  color: $text-color;
  background-color: $main-color;
}

```

## What is SASS? Give an example
>SASS is the other one of the two syntax options that Sass includes. SASS uses .sass file extension and indentation rather than brackets; it is not fully compliant with CSS syntax, but it's quicker to write. It doesn't use either ‘;’.
```
$text-color: red
$main-color: blue
 
body
     color: $text-color
     background-color: $main-color

```


## What is the difference between .scss and .sass syntax.

>SCSS uses brackets and semicolon (;) and SASS doesn’t use semicolon (;) and uses indentation instead of brackets.


## In which cases would we use SCSS? And in which cases would we use SASS?

>SCSS is an extension of the syntax of CSS. This means that every valid CSS stylesheet is a valid SCSS file with the same meaning. SASS provides a more concise way of writing CSS. It uses indentation rather than brackets to indicate nesting of selectors, and newlines rather than semicolons to separate properties.


## Explain how traditional CSS and Preprocessed CSS workflows are different

>CSS is ready to use and preprocessed CSS must be preprocessed before getting the css ready to use.


## Can we create functions with SASS? If it is true, give an example.

>Yes we can, by using the @function directive.
```
$col-count: 12;
 
@function col-pct($columns) {
    @return unquote((100/$col-count)*$columns+”%”);
}

```

## What is nesting? Is it useful? Give an example of nesting

>Nesting is a shortcut to creating CSS rules. So instead of writing so many lines of CSS just to be specific on the style we want to apply to an element, we simply nest it.
Without nesting:

```
#sidebar {
    background-color: black;
    color: white;
}
#sidebar ul li {
    background-color: white;
    color: black;
}

```
>With nesting:

```
#sidebar {
    background-color: black;
    color: white;
    ul {
        li {
            background-color: white;
            color: black;
        }
    }
}

```

## Difference between @use & @import? Give an example

>The new @use is similar to @import. but has some notable differences:
The file is only imported once, no matter how many times you @use it in a project.
Variables, mixins, and functions (what Sass calls “members”) that start with an underscore ( _ ) or hyphen (-) are considered private, and not imported.
Members from the used file (buttons.scss in this case) are only made available locally, but not passed along to future imports.
Similarly, @extends will only apply up the chain; extending selectors in imported files, but not extending files that import this one.
All imported members are namespaced by default.


## How can we import other CSS/SASS files in SASS? Give an example

```
@import 	"design.sass","about.css"; 	

```


## Explain the concept of inheritance in SASS.

>This is one of the most useful features of Sass. Using @extend lets you share a set of CSS properties from one selector to another. It helps keep your Sass very DRY.


## Why use @extend? Give an example

>Lets you share a set of CSS properties from one selector to another. 
```
%message-shared {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}
 
.message {
  @extend %message-shared;
}

```
