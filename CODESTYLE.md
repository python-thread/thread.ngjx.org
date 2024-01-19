# Code Style
The following are some general guidelines for how to structure your code so that
the codebase remains consistent.

> [!NOTE]  
> You might find some instances throughout the codebase where the code style
> doesn't align with the code style mentioned here. As time goes on we aim to
> align the codebase with the styles found here

--- 


## Table of Contents
 - [Indentation](#indentation)
 - [Commit Message Guidelines](#commit-message-guidelines)
 - [Documentation and Commenting](#documentation-and-commenting)


## Indentation
It is generally recommended that you indent using 2 spaces, instead of 4. So make sure that you change your code editor to align with these desires :)

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

## Commit Message Guidelines
When committing, commit messages are prefixed with a `+` or `-`. Depending on the type of change made 
influences which prefix is used.

 - `+` when something is added.
 - `-` when something is removed.
 - none: when neither is applicable, like merge commits.

Commit messages are also to begin with an uppercase character. Below list some example commit messages.

```
git commit -m "+ Added README.md"
git commit -m "- Removed README.md"
git commit -m "Moved README.md"
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


