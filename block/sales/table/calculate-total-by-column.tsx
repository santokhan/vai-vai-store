// <T> is type of object located inside array
export function calculateTotalByColumn<T>(list: T[], columnId: keyof T): number {
    let totalPrice = 0;
    list.forEach((row: T) => {
        const value = row[columnId];
        if (typeof value == 'number') {
            totalPrice += value;
        }
    })
    return totalPrice;
}