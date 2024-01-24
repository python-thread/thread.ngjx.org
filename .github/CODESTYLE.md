# Code Style
The following is a general guide on how to style your work so that the project
remains consistent throughout all files. Please read this document in 
it's entirety
and refer to it throughout the development of your contribution.

> [!NOTE]  
> You might find some instances throughout the codebase where the code style
> doesn't align with the code style mentioned here. As time goes on we aim to
> align the codebase with the styles found here.


## Table of Contents
 - [Indentation](#indentation)
 - [Documentation and Commenting](#documentation-and-commenting)
 - [Commit Message Guidelines](#commit-message-guidelines)
 - [Markdown Guidelines](#markdown-guidelines-mdx-documentation)



## Indentation
It is generally recommended that you indent using 2 spaces, instead of 4. So 
make sure that you change your code editor to align with these desires :)

```Javascript
/** Example */
<div className="text-red-600">
  <ul>
    <li>example item</li>
    <li>example item</li>
    <li>example item</li>
    <li>example item</li>
  </ul>
</div>
```



## Documentation and Commenting
Here are some guidelines to keep the commenting of website consistent.

### React and JavaScript
```javascript
/** Utilizing multiline comments are good */
// since line comments as well
```

With React components it is fine to comment components in the following manner.

```javascript
function HomePage() {
  return (
    <div>
      {/* Nesting the Header component */}
      <Header />
    </div>
  );
}
```

### HTML & CSS
As for HTML and CSS, feel free to utilize the follow styles.
```HTML
<!-- make sure to include before and after the comment as seen here -->
<!--
This is a
Multiline comment
-->
```

```CSS
/* This is a single-line comment! */
/*
This is a multiline 
comment!
*/
```



## Commit Message Guidelines
When committing, commit messages are prefixed with a `+` or `-`. Depending on 
the type of change made 
influences which prefix is used.

 - `+` when something is added.
 - `-` when something is removed.
 - none: when neither is applicable, like merge commits.

Commit messages are also to begin with an uppercase character. Below list some 
example commit messages.

```
git commit -m "+ Added README.md"
git commit -m "- Removed README.md"
git commit -m "Moved README.md"
```



## Markdown Guidelines (MDX Documentation)
Documentation with MDX is quite similar to regular markdown, as it just Markdown files that allow for JSX syntax.
 - Headings are to be separated with 3 lines
 - Use of HTML comments is appreciated
 - Use of HTML is permitted
 - [reference style links](https://www.markdownguide.org/basic-syntax/#reference-style-links) 
 are not required by are appreciated
 - Exceedingly long lines are to be broken (we prefer around 80 characters)
 - The indents are to be two spaces
 - Imports of react components used in the MDX files are to be put at the top of the file
 - Use the shorthand for codeblocks (e.g `py` instead of `python`)

```
/* Example MDX Document */
import { ExampleComponent } from '@components/examples'

# Section
Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore 
magna aliqua. Ut enim ad minim veniam, quis nostrud 
exercitation ullamco laboris nisi ut aliquip ex ea 
commodo consequat.




# Section 2
<ul>
  <li> Apple
  <li> Orange
  <li> Pineapple
</ul>

<ExampleComponent/>

<!-- example comment -->
[Lorem Ipsum Generator]: https://loremipsum.io/generator/

```py
print('hello world')
\```
<!-- \ is there to ignore markdown formatting -->

```



### Callouts
When writing callouts, in Nextra, callouts are defined by the following.

```JavaScript
/* Remeber when importing components please put it at the top of the document */
import { Callout } from 'nextra/components'
 
<Callout type="warning">
  This API will be deprecated soon.
</Callout>
```

There are 4 types you can use:
 - Lightbulb (no arguments / default)
 - Info `type="info"`
 - Warning `type="warning"`
 - Error `type="error"`

For more detailed information head over to the [Nextra component documentation.](https://nextra.site/docs/guide/built-ins/callout)



### Class Documentation