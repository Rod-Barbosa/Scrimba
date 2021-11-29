/* 
    Use fetch() to load 1, then 5, then 25 colors from the HexBot

    Use FlexBox to create a Responsive 5x5 Grid displaying the colors    
*/

let colorsCount = 100;

async function getColors(colorsCount) {
    let response = await fetch(`https://apis.scrimba.com/hexcolors/?count=${colorsCount}`)
    let data = await response.json()
    
    return data.colors
}

getColors(colorsCount).then(colors => {
    console.log(colors)    
    
    
    const htmlStr = colors.map(color=>{
        return  `<div style="background:${color.value}" class="color"></div>`
    }).join('') 
    
    console.log(htmlStr)
    document.body.innerHTML = `<div class="display">${htmlStr}</div>`
    
})
