<h1 align="center">Hi 👋, We are Jordi and Einar</h1>
<h3 align="center">We are passionate fullstack developers students from Spain.</h3>

- 🔭 We are currently working on **SASS - Instagram Clone**

- 🌱 We are currently learning **SASS**

- 👨‍💻 All of Einar's projects are available at [https://github.com/imalovelyghost](https://github.com/imalovelyghost)
- 👨‍💻 All of Jordi's projects are available at [https://github.com/JordixArnau](https://github.com/JordixArnau)
- 📫 How to reach Einar **grelsare13@gmail.com**
- 📫 How to reach Jordi **aejordi@gmail.com**

- ⚡ Fun fact about Einar **Amante de la tecnología, bateriste en mis ratos libres y LTBIQ+ activiste.**
- ⚡ Fun fact about Jordi **¡Hago el mejor brownie del mundo!**

<h3 align="left">Connect with Einar:</h3>
<p align="left">
<a href="https://linkedin.com/in/https://www.linkedin.com/in/grecia-sanchez1994/" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/neutral-icons/src/images/icons/Social/linked-in-alt.svg" alt="https://www.linkedin.com/in/grecia-sanchez1994/" height="30" width="40" /></a>
</p>

<h3 align="left">Connect with Jordi:</h3>
<p align="left">
<a href="https://linkedin.com/in/https://www.linkedin.com/in/jordi-arnau-esteban/" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/neutral-icons/src/images/icons/Social/linked-in-alt.svg" alt="https://www.linkedin.com/in/jordi-arnau-esteban/" height="30" width="40" /></a>
</p>

<h3 align="left">Languages and Tools:</h3>
<p align="left"> <a href="https://www.w3schools.com/css/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://sass-lang.com" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="40" height="40"/> </a> </p>

<h3 align="left">Lessons learned in this project:</h3>

## What is SASS? What does SASS stand for?

<p align="left">
Stands for "Syntactically Awesome Style Sheets." Sass is an extension of cascading style sheets (CSS), the language used to define the layout and formatting of HTML documents. It uses fully-compatible CSS syntax, but provides additional features like CSS variables and nested rules that make CSS more efficient and easier to edit.</p>

## What is a CSS pre-processor?

<p align="left">
A CSS preprocessor is a program that lets you generate CSS from the preprocessor's own unique syntax. There are many CSS preprocessors to choose from, however most CSS preprocessors will add some features that don't exist in pure CSS, such as mixin, nesting selector, inheritance selector, and so on.</p>

## What does a pre-processor have to do with SASS?

<p align="left">
CSS on its own can be fun, but stylesheets are getting larger, more complex, and harder to maintain. This is where a preprocessor can help. Sass lets you use features that don't exist in CSS yet like variables, nesting, mixins, inheritance and other nifty goodies that make writing CSS fun again.
Once you start tinkering with Sass, it will take your preprocessed Sass file and save it as a normal CSS file that you can use in your website.</p>
 
## Why use SASS?
- It's CSS syntax friendly
- It offers variables for whatever you want
- It uses nested syntax
- It includes mixins
- You can divide and conquer
- It has a large community and is well documented
- If you know SASS, you can customize Bootstrap 4

## SASS has disadvantages? Which are?

- The developer must have enough time to learn new features present in this preprocessor before using it.
- Using Sass may cause losing benefits of browser's built-in element inspector.
- Code has to be compiled.
- Difficult Troubleshooting.

## What is a SASS Variable? Explain why are useful

<p align="left">
Think of variables as a way to store information that you want to reuse throughout your stylesheet. You can store things like colors, font stacks, or any CSS value you think you'll want to reuse. Sass uses the $ symbol to make something a variable.</p>
 
## Explain the SASS variables property with an example.
<p align="left">
A variable declaration looks a lot like a property declaration: it’s written <variable>: <expression>. Unlike a property, which can only be declared in a style rule or at-rule, variables can be declared anywhere you want. To use a variable, just include it in a value.</p>

```
$base-color: #c6538c;
$border-dark: rgba($base-color, 0.88);
.alert {
border: 1px solid $border-dark;
}
```

## What is a mixin? Why is it important? Give an example

<p align="left">
The @mixin directive lets you create CSS code that is to be reused throughout the website.</p>

```
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
```

## What is SCSS? Give an example

<p align="left">
SCSS, that stands for "Sassy CSS", is the file format that SASS uses to preprocess the CSS. It has
the same syntax as CSS but including, of course, all the useful functions from SASS.
</p>

```
.description-comments-class {
  span {
    color: gray;
  }
  h3 {
    font-weight: 600;
    display: inline-block;
  }
  p {
    margin: 5px 0;
  }
}
```

## What is SASS? Give an example

<p align="left">
SASS is the original file format that SASS uses to preprocess the CSS. It doesn't use
the same syntax as SCSS or CSS, removing all the "{}" and ";" from it and working only
with indentation. 
</p>

<p align="left">SASS files are still valid and won't be deprecated in the future.</p>

```
.description-comments-class
  span
    color: gray

  h3
    font-weight: 600;
    display: inline-block;

  p
    margin: 5px 0;
```

## What is the difference between .scss and .sass syntax.

<p align="left">
The main difference between .scss and .sass syntax is the absolut absence of "{}"
and ";" in the .sass files. As said before, .scss files use almost the same syntax
as CSS, but .sass files removes all the symbols that mark semantic groups and does
it through indentation.
</p>

## In which cases would we use SCSS? And in which cases would we use SASS?

<p align="left">
Both work perfectly with SASS and the CSS that is created from then, so at the end
it comes to a personal preference. If the user likes the CSS syntax and comes from
it, is probable that will feel more comfortable with SCSS format.
</p>

## Explain how traditional CSS and Preprocessed CSS workflows are different.

<p align="left">
There's many differences when creating a project with vanilla CSS and with a Preprocessed
CSS, starting with the capacity to bind different stylesheet in a unic file. This allows
the developer to separate, reuse and optimize the code a 100%.
</p>

<p align="left">
For example, with a CSS preprocessor you can create a file that only contains the basic
variables (with colors for example), mixins and main styles to be used for all the other
stylesheets, that can be used to style unique pages or components.
</p>

## Can we create functions with SASS? If it is true, give an example.

<p align="left">
Yes, that's what "mixins" are created for: you can pass paramethers to them and use code
that would be repeated many times.
</p>

```
@mixin postsProfileBig($profileUrl2, $profileSize) {
  height: $profileSize;
  width: $profileSize;
  border-radius: 50%;
  background-image: url($profileUrl2);
  background-position: center;
  background-size: cover;
  display: inline-block;
}
```

## What is nesting? Is it useful? Give an example of nesting

<p align="left">
Nesting is the capacity of SASS to include some elements inside their
parents in a graphic way. As HTML children are literally inside their parents,
you can do the same in SASS or SCSS documents:
</p>

```
.other-options-class {
  color: b.$my_gray_text;
  margin: 10px 0;
  h3 {
    display: inline-block;
    padding: 0 3px;
  }
}
```

## Difference between @use & @import? Give an example

<p align="left">
Both are ways to import one stylesheet into another in SASS, but  "@import" has
a wider scope than "@use". This means that "@use" will only be loaded once in the
final CSS, and also that all the elements included in it will only be accessible
to the file where it has been imported. Besides, "@use" allows you to create private
data adding "-" or "_" before declaring them in the main folder.
</p>

## How can we import other CSS/SASS files in SASS? Give an example

<p align="left">
There are three methods to import other files in SASS: "@import", "@use" and "@forward".
</p>

<p align="left">
"@import" allows you to load all the data of the file into another file, and all this information
will be shared to all the other files imported in the receiving file.
</p>

<p align="left">
"@use", as explained on the las question, is an import method that allows a more restricted scope
and allows the developer to create private styles and variables.
</p>

<p align="left">
Last, "@forward" is the correct way to share data within a the file structure with a wider scope. This
method allows you to share all the data from an imported file with the receiving file and all the other
stylesheets which are related to it.
</p>

```
@forward "../base/base";
@use "../base/base" as b;
@import "../home/home";
```

## Explain the concept of inheritance in SASS.

<p align="left">
Inheritance in SASS is a capability that allows you to assign a global scope to a group of properties
so they can be used in another file.
</p>

## Why use @extend? Give an example

<p align="left">
"@extend" is the method to use an inheritance element so it is loaded in the actual file.
</p>

**File 1**

```
%transparent {
  background-color: transparent;
  border: 0px solid transparent;
  outline: transparent;
}
```

**File 2**

```
  input {
    width: 95%;
    border-radius: 3px;
    padding: 8px;
    @extend %transparent;
  }
```
