```
function encloseInBrackets(str) {
    //  write code here.
    //Solution 1: template literal
    return `(${str})`
    
    //Solution 2: Adding strings
    // return "(" + str + ")"
    
    //Solution 3: push() + unshift() + join('')
    // console.log(str)
    // const arr = [...str]
    // arr.push(")")
    // arr.unshift("(")
    // arr.join('')
    // return arr.join('')
}
```
