const title = document.createElement("h1")
const reptiles = document.createElement("div")
const reptile = document.createElement("div")
const reptileImg = document.createElement("img")

title.innerText = "Radical Reptiles"

reptiles.className = "reptiles"

reptile.className = "reptile"

reptileImg.src = "lizard.jpg"
reptileImg.alt = "Big Headed Turtle"

reptile.appendChild(reptileImg)

reptiles.appendChild(reptile)

document.body.appendChild(title)

document.body.appendChild(reptiles)