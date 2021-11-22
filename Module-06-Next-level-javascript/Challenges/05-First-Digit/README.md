```

function firstDigit(str) {
    //  write code here.
    //simple regEx
    //re.test()
    var re = /\d/;
    for(let i=0;i<str.length;i++){
        if(re.test(str[i])){
            return str[i]
        }
    }
}
```
