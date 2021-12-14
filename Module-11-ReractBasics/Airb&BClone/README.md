# Scrimba Frontend Career Path - (AirB&B Clone - Module 11)

This is a solution to the [Scrimba Frontend Career Path - (Module11-React Basics/AirB&B Clone)](https://scrimba.com/learn/frontend).

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

Clone part of the AirBnB experience website using React

After this Challenge I should be able to Code/Understand:

- React Baisc file structure
- Consuming JSON data
- Passing props
- Conditional Rendering in React

### Screenshot

![](./solution.png)

### Links

- Solution Github URL: [github.com/Rod-Barbosa/AirbnbClone](https://github.com/Rod-Barbosa/AirbnbClone)
- Live Site URL: [rodrigo-airbnbclone.netlify.app/](https://rodrigo-airbnbclone.netlify.app/)

## My process

### Built with

- React
- JavaScript
- JSON
- CSS custom properties

### What I learned

Google fonts go on the index.html that sits on the public folder:
```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="preconnect" href="https://fonts.googleapis.com"> 
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> 
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;600&display=swap" rel="stylesheet">
```

For passing images as props:

```React
import dataSet from "../data.json"

function App (){
const eventsArray = dataSet.map(activity=>
    <Card 
        img={activity.coverImg}
        rating={activity.stats.rating}
        reviewCount={activity.stats.reviewCount}
        country={activity.location}
        title={activity.title}
        price={activity.price}
    />
)
    return (
        <div className="container">
            <Navbar />
            <Hero />
            {eventsArray}
        </div>
```
Plus this line in the Card component:

```React
<img src={`../images/${props.img}`}
```

This is a neat little trick for conditional rendering. Instead of putting the full if statement, I can use && and it works just fine
```React
{props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>}
```

For passing props one can just simply use the spread operator, but must always explicitly declare the key value (in case you are using map function)

```React
export default function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
```

### Continued development

This project is one and done. A lot mor eunderstanding about file structure is needed befor eI can comprehend why changing the images folder around has such a breaking/fixing effect. But that will come with more projects

### Useful resources

- [passing props by spreading the object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals) - It makes Card Componentit prettier, but makes it harder for human to read
                  
## Author

- Website - [Rodrigo Portfolio](https://www.gelatodigital.com)
- Frontend Mentor - [@Rod-Barbosa](https://www.frontendmentor.io/profile/Rod-Barbosa)
- Github - [@Rod-Barbosa](https://github.com/Rod-Barbosa)

## Acknowledgments

