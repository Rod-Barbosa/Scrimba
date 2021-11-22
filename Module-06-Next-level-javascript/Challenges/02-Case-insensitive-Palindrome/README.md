```

function caseInsensitivePalindrome(str) {
    const size = str.length
    //Case insensitive
    const lowerCase = str.toLowerCase()
    //size/2 is to avoid repetition on tests
    for(let i=0;i<=size/2;i++){
        if(lowerCase[i]!=lowerCase[size -(1+i)]){
         //one missmatch is enough to know it is not palindrome
            return false
        }
    }        
//after all tests were passed, it is safe to return true
        return true
}
```
