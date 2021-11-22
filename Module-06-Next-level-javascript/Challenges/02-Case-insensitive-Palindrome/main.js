function caseInsensitivePalindrome(str) {
    const size = str.length
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



/**
* Test Suite 
*/
describe('caseInsensitivePalindrome()', () => {
    it('returns true for a case insensitive palindrome', () => {
        // arrange
        const str = 'AaBaa';
        
        // act
        const result = caseInsensitivePalindrome(str);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(true);
    });
    
    it('returns false when not a case insensitive palindrome', () => {
        // arrange
        const str = 'abac';
        
        // act
        const result = caseInsensitivePalindrome(str);

        // log
        console.log("result 2: ", result);
        
        // assert
        expect(result).toBe(false);
    });    
});