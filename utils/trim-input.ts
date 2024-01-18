export function trim_input(input: string): string {
    return input.replace(/[^a-zA-Z0-9]/g, '').trim().toLowerCase();
}