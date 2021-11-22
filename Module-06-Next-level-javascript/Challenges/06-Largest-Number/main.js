function largestNumber(num) {
    //  write code here.
    const arr = []
    for(let i=0;i<num;i++){
        arr.push("9")
    }
    return Number(arr.join(''))
}



/**
* Test Suite 
*/
describe('largestNumber()', () => {
    it('returns largest positive integer possible for digit count', () => {
        // arrange
        const num = 2;
        
        // act
        const result = largestNumber(num);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(99);
    });
});