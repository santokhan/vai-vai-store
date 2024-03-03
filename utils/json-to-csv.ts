export default function convertJsonToCsv<T extends Record<string, any>>(jsonData: T[]): string {
    const separator = ',';
    let csv = '';

    // Extract column headers
    const headers = Object.keys(jsonData[0]);
    csv += headers.join(separator) + '\n';

    // Extract data rows
    jsonData.forEach((row) => {
        const values = headers.map((header) => row[header]);
        csv += values.join(separator) + '\n';
    });

    return csv;
}

// // Example JSON data
// const jsonData = [
//     { name: 'John', age: 30, city: 'New York' },
//     { name: 'Jane', age: 25, city: 'Los Angeles' },
//     { name: 'Bob', age: 40, city: 'Chicago' }
// ];

// // Convert JSON to CSV
// const csvData: string = convertJsonToCsv(jsonData);
// console.log(csvData);
