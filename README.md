`#sass` `#css` `#html` `#master-in-software-engineering`

## What is SASS? What does SASS stand for?

Sass is a stylesheet language that’s compiled to CSS. It allows you to use variables, nested rules, mixins, functions, and more, all with a fully CSS-compatible syntax. Sass helps keep large stylesheets well-organized and makes it easy to share design within and across projects.

## What is a CSS pre-processor?

A CSS preprocessor is a program that lets you generate CSS from the preprocessor's own unique syntax. There are many CSS preprocessors to choose from, however most CSS preprocessors will add some features that don't exist in pure CSS, such as mixin, nesting selector, inheritance selector, and so on. These features make the CSS structure more readable and easier to maintain.

## What does a pre-processor have to do with SASS?

Sass is a pre-processor that compiles a specific syntax into native CSS code.

## Why use SASS?

Stylesheets are getting larger, more complex, and harder to maintain. This is where a CSS pre-processor can help.
Sass allows the use of features that do not exist in CSS, like variables, nested rules, mixins, imports, inheritance, built-in functions, and other stuff. 

## Which are some disadvantages of SASS?

* The developer must have enough time to learn new features present in this preprocessor before using it.
* Using Sass may cause losing benefits of the browser's built-in element inspector.
* Code has to be compiled previously into CSS because browsers don’t process Sass syntax.
* Difficult Troubleshooting.

## What is a SASS Variable? Explain why they are useful.

A variable is a named reference used to store a value that we could reuse multiple times throughout our stylesheet. Thus, instead of specifying the value, the name of the variable that stores it is typed. Sass uses the reserves the $ symbol to define variables.
 
## Explain the SASS variables property with an example.

```
$cyan:    #0dcaf0;

.my-box {
  background-color: $cyan;
}
```

## What is a mixin? Why is it important? Give an example.

A __mixin__ is a rule that allows to define styles that can be reused throughout our stylesheet. There are many reasons by which mixins are an important feature:

* Mixins make it easy to avoid the use of non-semantic classes and to distribute collections of styles in libraries.
* Mixins encapsulate styles that can be dropped into a single style rule with the use of the __include__ rule. 
* Mixins can contain style rules of their own, that can be nested in other rules or included at the top level of the stylesheet
* Mixins be used to modify variables.
* Mixins are like functions, which can be parameterized and take arguments to customize the behaviour each time they are called with the __include__ rule.

## What is SCSS? Give an example:

```
$font-stack: Helvetica,sans-serif;
$primary-color: #333;

body{
  font:100% $font-stack;
  color:$primary-color;
}
```

## What is SASS? Give an example:

```
$font-stack: Helvetica,sans-serif
$primary-color: #333

body
  font:100% $font-stack
  color:$primary-color
```

## What is the difference between .scss and .sass syntax?

SCSS uses the .scss file extension whose syntax is fully compliant with CSS, meaning that it uses curly braces to delimit declaration blocks, whereas SASS uses the .sass file extension, it replaces the curly braces with strict indentation and line breaks like in YAML, and doesn’t use the semicolon at the end of a declaration.

## In which cases would we use SCSS? And in which cases would we use SASS?

The use of SCSS or SASS is under personal preference, but many CSS and UI Frameworks use SCSS over SASS by default.

## Can we create functions with SASS? If it is true, give an example.

```
@function pow($base, $exponent) {
  $result: 1;
  @for $_ from 1 through $exponent {
    $result: $result * $base;
  }
  @return $result;
}
```

## What is nesting? Is it useful? Give an example of nesting.

Nesting is a style rule that allows us to write style rules inside another declaration block. Thus, Sass will combine the outer rule’s selector with the inner rule’s. Nested rules are useful to avoid the repetition of the same selector over and over again.

Example in which the styles are defined for .user-table and .user-table__cell selectors:

```
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
```

## Difference between @use & @import? Give an example:

The new @use is similar to @import. but has some notable differences:
* With @use, the file is only imported once, no matter how many times you @use it in a project.
* With @use, variables, mixins, and functions (what Sass calls “members”) that start with an underscore (_) or hyphen (-) are considered private, and not imported.
* With @use, members from the used file are only made available locally, but not passed along to future imports.
* With @use, all imported members are namespaced by default.

Example where a custom separator line mixin is defined:

```
@use "../abstracts/colors";
@use "sass:map";

@mixin separator-template($stroke: 2px, $line-color: gray, $text-color: gray, $text-padding: 0.75rem, $font-size: 1rem, $font-weight: 600) {
	display: flex;
	justify-content: center;
	align-items: center;

	& > :nth-child(1),
	& > :nth-child(3) {
		flex-grow: 1;
		flex-shrink: 1;
		background-color: $line-color;
		height: $stroke;
	}

	& > :nth-child(2) {
		padding: $text-padding;
		flex-grow: 0;
		flex-shrink: 0;
		color: $text-color;
		font-size: $font-size;
		font-weight: $font-weight;
		text-align: center;
	}
}

.login-separator {
	@include mixins.separator-template(
		$font-size: 0.8rem,
		$text-color: map.get(colors.$colors, gray-03),
		$line-color: map.get(colors.$colors, gray-02),
		$stroke: 1px,
	)
}
```

## How can we import other CSS/SASS files in SASS? Give an example:

With the **@use** rule we can load *mixins*, *functions*, and *variables* from other Sass and CSS stylesheets, which allows to combine CSS from multiple stylesheets together. With use, single stylesheet files are loaded as a single __module__.

+ To import a module from a URL, it's written __@use "\<url\>"__.
+ To import a built-in Sass module, it's written __@use "sass:\<module\>"__.

Example:

```
// _base.scss
$font-stack:    Helvetica, sans-serif;
$primary-color: #333;

// _utilities.scss
$colors: (
	blue:    #0d6efd,
	indigo:  #6610f2,
	purple:  #6f42c1,
	pink:    #d63384,
	red:     #dc3545,
	orange:  #fd7e14,
	yellow:  #ffc107,
	green:   #198754,
	teal:    #20c997,
	cyan:    #0dcaf0,
);

// styles.scss
@use 'sass:map';
@use 'base';
@use 'utilities';

.add-color {
  background-color: base.$primary-color;
  color: map.get(utilities.$colors, blue);
}
```

With the __@forward__ rule we can make that module redirects to another Sass stylesheet available when the current stylesheet is loaded with the @use rule from another file. This makes it possible to organize Sass libraries across many files, while allowing to load a single entrypoint file.

Example:

```
// _base.scss
$font-stack:    Helvetica, sans-serif;
$primary-color: #333;

// _utilities.scss
$colors: (
	blue:    #0d6efd,
	indigo:  #6610f2,
	purple:  #6f42c1,
	pink:    #d63384,
	red:     #dc3545,
	orange:  #fd7e14,
	yellow:  #ffc107,
	green:   #198754,
	teal:    #20c997,
	cyan:    #0dcaf0,
);

// _index.scss
@forward 'base';
@forward 'utilities';

// styles.scss
@use 'sass:map';
@use 'index';

.add-color {
  background-color: base.$primary-color;
  color: map.get(utilities.$colors, blue);
}
```

## Why use @extend? Give an example:

The purpose of using the **@extend** rule is to maintain the relationships or hierarchical constraints within extended selectors, between rulesets. This gives an alternative to define relationships between selectors with the use of **placeholders**, instead of actual selectors. Placeholder selectors are defined with a **%** character at the beginning.

```
// 
%button {
  display: inline-block;
  // … button styles

  // Relationship: a %button that is a child of a %modal
  %modal > & {
    display: block;
  }
}

.button {
  @extend %button;
}

.modal {
  @extend %modal;
}
```
