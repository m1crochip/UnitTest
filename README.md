## Setup dependency
### The empty list
```
merge([], [])
```
### The positive number

An already sorted list
```
merge([1, 2, 3], [4, 5, 6])
```
A reverse sorted list
```
merge([3, 2, 1], [6, 5, 4])
```
A list consisting of the same element throughout
```
merge([1, 1, 1], [1, 1, 1])
```
A list containing dupes
```
merge([1, 2, 3], [1, 2, 3])
```
### The negative number
An already sorted list
```
merge([-1, -2, -3], [-4, -5, -6])
```
A reverse sorted list
```
merge([-3, -2, -1], [-6, -5, -4])
```
A list consisting of the same element throughout
```
merge([-1, -1, -1], [-1, -1, -1])
```
A list containing dupes
```
merge([-1, -2, -3], [-1, -2, -3])
```
### The Mix number
```
merge([-1, 2, 0, 3, -8], [-3, -4, 1, 2])
```
### The Character
```
merge(["a", "b", "c"], ["d", "e", "f"])
```

## Set up execute code and unit test with Jest Framework

#### Prerequisite
Install jest and typescript into your project by running the following command: 
>npm i -D jest typescript

#### Step 1
Install ts-jest and@types/jest into your project by running the following command:
>npm i -D ts-jest @types/jest

#### Step 2
Create a config file named jest.config.js at the same level as package.json by running the following command:
>npx ts-jest config:init

The file should have the following code:
```
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node"
};
```

#### Step 3
Create a folder named tests at the same level as package.json and place your test files under this folder. Test files should follow the naming convention {file_name}.test.ts .

Execute the tests by running the following command:
>npm t
