`#sass` `#css` `#html` `#master-in-software-engineering`

# SASS - Clone Instagram <!-- omit in toc -->

<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0-blue.svg?cacheSeconds=2592000" />
</p>

> Sass (which stands for 'Syntactically awesome style sheets) is an extension of CSS that enables you to use things like variables, nested rules, inline imports and more
>
> The purpose of this project is to learn the basics of SASS and put them into practice by building a visual replica of Instagram

What is SASS? What does SASS stand for?

>SASS stands for Syntactically Awesome Stylesheets. Helps you to not repeat code by using Variables, Mixins, Extensions, thus resulting in less time consumption.

What is a CSS pre-processor?

>CSS Pre-processors help compile CSS code and increase Front-End productivity. SASS is the most popular Pre-processor.

Why use SASS?

>Work in a more organized manner.
>Easy to change code. 
>Saves Time.
>Can be used to do things which with normal CSS wouldnt be possible.

SASS has disadvantages? Which are?

>Requires a lot of learning through trial and error.
>Code does not compile if you have a small bit of mistake. like a floating ".".

What is a SASS Variable? Explain why are useful

>Example $myColor: #8e8e8e;
>$cardHeight: 20px;
>You can declare a variable by adding a  "$" before and name of variable, assign it a specific CSS property or even many different properties with mixins.

What is a mixin? Why is it important? Give an example

>Following are Examples of Mixins.
@mixin flex {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

@mixin footer {
    text-decoration: none;
    color: #8e8e8e;
    padding: 0 1rem 0 0;
}

>In order to apply these properties to a certain element, you simply need to use "@include *name of mixin*" in CSS. 
>Mixins are useful when you have to apply same style to different elements, e.g. Flex box. You simply @include the mixin and You're good to go. you dont have to write 5-6 lines of code. 

What is SCSS? Give an example
>SCSS is the type of File extension used by SASS.

What is the difference between .scss and .sass syntax.
In which cases would we use SCSS? And in which cases would we use SASS?

>Sass (Syntactically Awesome StyleSheets) have two syntaxes:

>a newer: SCSS (Sassy CSS)
and an older, original: indent syntax, which is the original Sass and is also called Sass.
So they are both part of Sass preprocessor with two different possible syntaxes.

>The most important difference between SCSS and original Sass:

SCSS:

-Syntax is similar to CSS (so much that every regular valid CSS3 is also valid SCSS, but the relationship in the other direction obviously does not happen)
-Uses braces {}
-Uses semi-colons ;
-Assignment sign is :
-To create a mixin it uses the @mixin directive
-To use mixin it precedes it with the @include directive
-Files have the .scss extension.

Original Sass:

-Syntax is similar to Ruby
-No braces
-No strict indentation
-No semi-colons
-Assignment sign is = instead of :
-To create a mixin it uses the = sign
-To use mixin it precedes it with the + sign
-Files have the .sass extension.

