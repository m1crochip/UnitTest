function merge(collection_1: number[], collection_2: number[]): number[]{
 let result: number[] = [];
 result = collection_1.concat(collection_2).sort((a,b) => a-b)
 // console.log('merge')
 return result
}

module.exports = merge;