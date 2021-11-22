```
function maxMultiple(divisor, bound) {
    //  write code here.
    let mmc = 1;
    for(let i=0;i<=bound;i++){
        if(i%divisor==0){
            mmc=i
        }
    }
    return mmc
}
```
or
```
function maxMultiple(divisor, bound) {
    const remainder = bound % divisor;
    
    return bound - remainder;
}
```
