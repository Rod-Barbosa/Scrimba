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



/**
* Test Suite 
*/
describe('firstDigit()', () => {
    it('return the first digit in a string', () => {
        // arrange
        const str = "var_1__Int2";
        
        // act
        const result = firstDigit(str);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe('1');
    });
});