// Format currency using Intl.NumberFormat
export default function formatCurrency(amount: number, currencyCode: string = "BDT", locale = 'en-BD') {
    // If locale is not provided, default to the user's browser locale
    locale = locale || navigator.language || 'en-BD';

    // Create number formatter instance
    const formatter = new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currencyCode,
        currencyDisplay: 'symbol',
        minimumFractionDigits: 0,
    });

    // Format the amount
    return formatter.format(amount);
}

// Example usage:
// const amount = 12345.67;
// const currencyCode = 'BDT';
// console.log(formatCurrency(amount, currencyCode)); // Output: $12,345.67