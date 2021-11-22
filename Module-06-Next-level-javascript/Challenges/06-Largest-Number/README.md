```
function largestNumber(num) {
    //  write code here.
    const arr = []
    for(let i=0;i<num;i++){
        arr.push("9")
    }
    return Number(arr.join(''))
}
```
or maybe
```
function largestNumber(num) {
    const placeholder = '9'.repeat(num);
    
    return parseInt(placeholder);
}
```
