# Scrimba - Moon Base

This is a solution to the [Scrimba Frontedn Career Path - Module 1](https://scrimba.com/learn/frontend/why-learning-web-development-is-a-superpower-cPkK7mUE).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users will be able to:

- Understand & Apply basic HTML consepts
- Understand & Apply basic CSS consepts

### Screenshot

![Desktop](./images/desktop.png)
![Desktop Menu](./images/desktop-menu.png)
![Desktop](./images/mobile.png)
![Desktop Menu](./images/mobile-menu.png)

### Links

- Solution URL: [GitHub](https://github.com/Rod-Barbosa)
- Live Site URL: [rodrigo-moonbase.netlify.app](https://rodrigo-moonbase.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

This would be easier to build using scss, it would save a lot of repetition and the css would be easier to read

It would also make it easier on the index page. I hate doing double updates and using mob/desk properties to display a different version of the same picture
```html
    <div class="bot-pics">
      <img src="./images/mobile/image-gallery-milkbottles.jpg" class="bot-pic mob">
      <img src="./images/desktop/image-gallery-milkbottles.jpg" class="bot-pic desk">
    </div>
```

The position fixed helps with the mobile menu
```css
.topnav #myLinks {
    display: none;
    position: fixed;
}
```

Simple function 
```js
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
```
Connects with html, and the href makes the function work in a way
```html
<a href="javascript:void(0);" class="icon" onclick="myFunction()">
```
But it doesn't make the menu disappear when I click outside of it, which I would like better than the current behaviour

### Continued development

Sass and scss is obviously the way to go from here

### Useful resources

- [Hamburguer Menu](https://www.w3schools.com/howto/howto_js_mobile_navbar.asp) - This is the bare bones version of what the challenge is aiming at

- [Full Screen Screenshot](https://support.mozilla.org/en-US/kb/take-screenshots-firefox) - This is good for showing the entire design, not just the tip of hte page

## Author

- Website - [Rodrigo Barbosa](https://www.gelatodigital.com)
- Frontend Mentor - [@Rod-Barbosa](https://www.frontendmentor.io/profile/Rod-Barbosa)

## Acknowledgments

Thank you for my buddy Steven for reminding me how useful the screenshot tool on firefox is. I'll probably switch to developing in firefox
