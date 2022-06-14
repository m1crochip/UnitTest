function merge(collection_1: number[], collection_2: number[]): number[] {
  let isNumberArray1: boolean =
    collection_1.length > 0 &&
    collection_1.every((value) => {
      return typeof value === "number";
    });
  let isNumberArray2: boolean =
    collection_2.length > 0 &&
    collection_2.every((value) => {
      return typeof value === "number";
    });
  if (isNumberArray1 && isNumberArray2) {
    let result: number[] = [];
    result = collection_1.concat(collection_2).sort((a, b) => a - b);
    console.log(typeof collection_1);
    return result;
  } else return [-1];
}
module.exports = merge;
