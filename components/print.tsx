export function PRINT(data: any) {
    if (!data) {
        return null;
    }
    return (
        <pre>
            {JSON.stringify(data, null, 2)}
        </pre>
    )
}