export default function generateStringFromArray(arr: Record<string, any>[]) {
    return arr.map(obj => {
        return Object.entries(obj)
            .map(([key, value]) => `${key}: ${value}`)
            .join("");
    }).join("");
}

// // Example usage:
// const arrayOfObjects = [
//     { name: "John", age: 30 },
//     { name: "Alice", age: 25 }
// ];

// const result = generateStringFromArray(arrayOfObjects);
// console.log(result);
