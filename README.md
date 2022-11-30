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

## SASS questions

- What is SASS? What does SASS stand for?

    SASS →  syntactically awesome style sheets.
    
    Preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS). SassScript is the scripting language itself. 
 
- What is a CSS pre-processor?
    A CSS preprocessor is a program that lets you generate CSS from the preprocessor's own unique syntax.
    What does a pre-processor have to do with SASS?
    The pre-processor is in charge of interpreting SASS code and turning it into CSS code.
    Why use SASS?
    Sass lets you use features that do not exist in CSS, like variables, nested rules, mixins, imports, inheritance, built-in functions, and other stuff.
    It also helps to maintain large CSS style sheets and shortens the way developers generate CSS code.

- SASS has disadvantages? Which are?
 
    1. The developer must have enough time to learn new features present in this preprocessor before using it.
    2. Using Sass may cause losing benefits of browser’s built-in element inspector.
    3. Code has to be compiled
    4. Difficult  Troubleshooting
 
- What is a SASS Variable? Explain why are useful
  
    A SASS variable is just a way to store an specific value that will be used to assign it to a property that accepts it when required. 

- Explain the SASS variables property with an example.
  
    Variable definition and declaration → $variableName: value;
  
    Ex:

    $myGreen: #8FBC8F;

    Use → 
    body { font-family: Helvetica, sans-serif; 
    font-size: 18px; 
    color: $myGreen;
    }

- What is a mixin? Why is it important? Give an example
    
    A mixin lets you make groups of CSS declarations that you want to reuse throughout your site. It is basically a snippet of code that receives properties and values as parameters.

    Ex:

    //SCSS 

    @mixin transform($property) { 
    -webkit-transform: $property; 
    -ms-transform: $property; 
    transform: $property; 
    } 

    .box { @include transform(rotate(30deg)); } 

    //CSS 

    .box { 
    -webkit-transform: rotate(30deg); 
    -ms-transform: rotate(30deg); 
    transform: rotate(30deg); 
    }

- What is SCSS? Give an example
 
    SASS that uses the Block syntax.
    
    Block syntax → Code block are defined by opening and closing curly brackets (file.scss extension).
    
    Ex:

    $font-stack: Helvetica,sans-serif; 
    $primary-color:#333; 
    
    body{ 
    font:100% $font-stack; 
    color:$primary-color; 
    } 

- What is SASS? Give an example
 
    SASS that uses the indent syntax.
  
    Indent syntax → Code blocks are defined by indentations (file.sass extension).
    Ex:
    
    $font-stack: Helvetica,sans-serif 
    $primary-color:#333
    
    body
    font:100% $font-stack 
    color:$primary-color 

- What is the difference between .scss and .sass syntax.
  
    .scss → uses Block syntax
    .sass → uses Indentation syntax

- In which cases would we use SCSS? And in which cases would we use SASS?
  
    Either one is fine in all cases.

- Explain how traditional CSS and Preprocessed CSS workflows are different.

    The difference between traditional CSS and Preprocessed CSS workflows is that traditional CSS basically applies a CSS stylesheet to the HTML file, whereas preprocessed CSS needs to compile the SASS code file and then generate the CSS stylesheet.

- Can we create functions with SASS? If it is true, give an example.

    Yes. Functions are mainly used to do some calculations that might be needed for an specific value to assign to a property in the SASS code.

    Ex:

    SCSS

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

    CSS

    .sidebar {
      float: left;
      margin-left: 64px;
    }

- What is nesting? Is it useful? Give an example of nesting

    Nesting is nesting your CSS code or SASS code using the exactly the same hierarchy as the one used in the HTML file that includes the CSS stylesheet.
    The utility of nesting is that it allows the developer to have inner nested HTML elements inherit CSS from nested HTML elements that belong to upper layers in the hierarchy.

    Ex:

    SCSS

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

    CSS

    nav ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }
    nav li {
      display: inline-block;
    }
    nav a {
      display: block;
      padding: 6px 12px;
      text-decoration: none;
    }

- Difference between @use & @import? Give an example

    @import is meant to be used as many times as required throughout the different files and once a file is imported if another file imports a file that includes imported files, these imported files are also imported along with the file they were included in. 
    @use is meant to be used only once per file and a file that already includes a used file will not have that used file imported along with itself. To import several files using @use a new file which includes all the files to be imported needs to be created. All files in this new file need to be imported using @forward. Then, finally using @use newFilePath the new file is imported when required.
    The final difference is that @import imports every member despite the privacy level of the member in the file, whereas @use imports everything except private members.

- How can we import other CSS/SASS files in SASS? Give an example

    Two methods are available for now. Those methods are @import and @use, although @import will be deprecated by around the end 2021. 

    General Ex of a file to import:

    // _base.scss 

    $font-stack: Helvetica, sans-serif; 
    $primary-color: #333; 

    @import Ex:

    // styles.scss 

    @import 'base'; 
    .inverse { 
    background-color: base.$primary-color; 
    color: white; 
    } 

    @use Ex:

    // styles.scss 

    @use 'base'; 
    .inverse { 
    background-color: base.$primary-color; 
    color: white; 
    } 

    * It is important to note that there are some difference between the two methods. For more details about that check the     previous question.

- Explain the concept of inheritance in SASS.

    Preparing a block snippet of SASS code to be reused whenever it is required. Inheritance allows for not only the reusability of the snippet of code, but it also allows for its application on pseudo classes. This last mentioned feature is implemented by adding the “&” symbol just before the pseudo class. The “&” symbol works as a place-holder for the class or id that extends the inherited snippet of SASS code.

- Why use @extend? Give an example
    
    Using @extend saves a lot of time in the long run if the snippets of SASS code are prepared properly due to the concept of inheritance. For further details check the previous question.

    Ex:

    SCSS

    %toolbelt {
      box-sizing: border-box;
      border-top: 1px rgba(#000, .12) solid;
      padding: 16px 0;
      width: 100%;
    
      &:hover { border: 2px rgba(#000, .5) solid; }
    }
    
    .action-buttons {
      @extend %toolbelt;
      color: #4285f4;
    }
    
    
    .reset-buttons {
      @extend %toolbelt;
      color: #cddc39;
    }

    CSS
    
    .action-buttons, .reset-buttons {
      box-sizing: border-box;
      border-top: 1px rgba(0, 0, 0, 0.12) solid;
      padding: 16px 0;
      width: 100%;
    }
    .action-buttons:hover, .reset-buttons:hover {
        border: 2px rgba(0, 0, 0, 0.5) solid;
    }
    
    .action-buttons {
        color: #4285f4;
    }
    
    .reset-buttons {
      color: #cddc39;
    }
