import jsonexport from "jsonexport";

export default function downloadCSV(jsonData: any, filename: string) {
    jsonexport(jsonData, function (err: Error, csv: string) {
        if (err) return console.error(err);
        const blob = new Blob([csv], { type: 'text/csv' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = filename + ".csv";

        // Trigger download
        document.body.appendChild(link);
        link.click();

        // Cleanup
        document.body.removeChild(link);
        URL.revokeObjectURL(link.href);
    });
}
