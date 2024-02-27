export function messageHistoryTable(bool: any, name: string) {
    const message = bool ? `History created ${name}` : `Falied to create history ${name}`;
    console.log({ message });
    return { message };
}