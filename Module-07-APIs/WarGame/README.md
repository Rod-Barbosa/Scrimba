# Scrimba Frontend Career Path - (Game of War - Module 07)

This is a solution to the [Scrimba Frontend Career Path - (Module07-APIs/Game of War)](https://scrimba.com/learn/frontend).

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

A game of war: Each player draws a card, highest value wins. At the end of the deck, the player with most points winds

I should be able to Code/Understand:

- CALLBACKS
- Functions as first-class objects
- Built own .filter()
- PROMISES
- Three states(pensing, fullfiled, rejected)
- .then() and chaining
- WAR
- Deck of Cards API
- Styling & Layout
- Algorithms
- UX improvements
- ASYNC/AWAIT

### Screenshot

![](./img/start.png)
![](./img/deck.png)
![](./img/drawCard.png)
![](./img/keepScore.png)
![](./img/end.png)

### Links

- Solution Github URL: [https://github.com/Rod-Barbosa/WarGame](https://github.com/Rod-Barbosa/WarGame)
- Live Site URL: [https://rodrigo-game-of-war.netlify.app/](https://rodrigo-game-of-war.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- JavaScript

### What I learned

CSS has a calc function, that spares me the job of doing math/ adjust values dynamicly
```css
calculating dimensions for a5/7 ratio card
div.card-slot {
    border: 1px solid black;
    border-radius: 5px;
    height: 120px;
    width: calc(120px * 5 / 7);
}
```

Other than :hover and :focus, :disabled also exists as a pseudo-class
```css
button:disabled {
    cursor: not-allowed;
}

```


### Continued development

I could make a version with discard piles, with drawing 3 cards at a time for each player... closer to a real world game of WAR. Who knows? The future is the future

### Useful resources

- [Json lint](https://jsonlint.com/) - for validating json, make sure it is all correct
- [JSON.stringify()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) - to read fetch options object body property correctly, you got to JSON.stringigy()… JSON in all caps, not json like in the res handling
- [Disable Button with Javascript](https://www.w3schools.com/jsref/prop_pushbutton_disabled.asp) - When disabling a button, remember to make cursor: not-allowed; for the dramatic effect
- [Array of DOMElement's children](https://developer.mozilla.org/en-US/docs/Web/API/Element/children) - A DOMElement's childrens are proving more and more usefull

## Author

- Website - [Rodrigo Portfolio](https://www.gelatodigital.com)
- Frontend Mentor - [@Rod-Barbosa](https://www.frontendmentor.io/profile/Rod-Barbosa)
- Github - [@Rod-Barbosa](https://github.com/Rod-Barbosa)

## Acknowledgments

