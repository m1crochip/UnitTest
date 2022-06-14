const mergeTest = require('./merge');
test('Test merge sort function [-1] ,[-3] = [-1,-3]', () => {
 expect(mergeTest([-1], [-3])).toEqual([-3, -1])
})

test('Test merge sort function [-1,2,0,3,-8] ,[-3,-4,1,2] = [-8,-4,-3,-1,0,1,2,2,3]', () => {
 expect(mergeTest([-1,2,0,3,-8],[-3,-4,1,2])).toEqual([-8,-4,-3,-1,0,1,2,2,3])
})