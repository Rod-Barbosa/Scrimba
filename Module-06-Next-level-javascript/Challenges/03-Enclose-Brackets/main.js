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



/**
* Test Suite 
*/
describe('encloseInBrackets()', () => {
    it('adds () around a string', () => {
        // arrange
        const str = "Yo";
        
        // act
        const result = encloseInBrackets(str);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe('(Yo)');
    });
});