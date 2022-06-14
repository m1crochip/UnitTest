const mergeTest = require("./merge");

/////The Possitive Number
test("Test merge sort function [1,2,3], [4,5,6] = [1,2,3,4,5,6]", () => {
  expect(mergeTest([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
});

test("Test merge sort function [3,2,1] ,[6,5,4] = [1,2,3,4,5,6]", () => {
  expect(mergeTest([3, 2, 1], [6, 5, 4])).toEqual([1, 2, 3, 4, 5, 6]);
});

test("Test merge sort function [1,1,1], [1,1,1] = [1,1,1,1,1,1]", () => {
  expect(mergeTest([1, 1, 1], [1, 1, 1])).toEqual([1, 1, 1, 1, 1, 1]);
});

test("Test merge sort function [1,2,3] ,[1,2,3] = [1,1,2,2,3,3]", () => {
  expect(mergeTest([1, 2, 3], [1, 2, 3])).toEqual([1, 1, 2, 2, 3, 3]);
});

/////The Negative numbers

test("Test merge sort function [-1,-2,-3], [-4,-5,-6] = [-6,-5,-4,-3,-2,-1]", () => {
  expect(mergeTest([-1, -2, -3], [-4, -5, -6])).toEqual([
    -6, -5, -4, -3, -2, -1,
  ]);
});

test("Test merge sort function [-3,-2,-1] ,[-6,-5,-4] = [-6,-5,-4,-3,-2,-1]", () => {
  expect(mergeTest([-3, -2, -1], [-6, -5, -4])).toEqual([
    -6, -5, -4, -3, -2, -1,
  ]);
});

test("Test merge sort function [-1,-1,-1], [-1,-1,-1] = [-1,-1,-1,-1,-1,-1]", () => {
  expect(mergeTest([-1, -1, -1], [-1, -1, -1])).toEqual([
    -1, -1, -1, -1, -1, -1,
  ]);
});

test("Test merge sort function [-1,-2,-3] ,[-1,-2,-3] = [-3,-3,-2,-2,-1,-1]", () => {
  expect(mergeTest([-1, -2, -3], [-1, -2, -3])).toEqual([
    -3, -3, -2, -2, -1, -1,
  ]);
});

//// Mix Number
test("Test merge sort function [-1,2,0,3,-8] ,[-3,-4,1,2] = [-8,-4,-3,-1,0,1,2,2,3]", () => {
  expect(mergeTest([-1, 2, 0, 3, -8], [-3, -4, 1, 2])).toEqual([
    -8, -4, -3, -1, 0, 1, 2, 2, 3,
  ]);
});

//////The empty list
test("Test merge sort function [] ,[] = []", () => {
  expect(mergeTest([], [])).toEqual([-1]);
});

////The Character
test("Test merge sort function [a,b,c] ,[d,e,f] = [a,b,c,d,e,f]", () => {
  expect(mergeTest(["a", "b", "c"], ["d", "e", "f"])).toEqual([-1]);
});
