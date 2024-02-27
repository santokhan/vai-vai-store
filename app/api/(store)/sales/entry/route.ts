import getSalesEntry from './read';

export async function GET(): Promise<Response> {
    const data = await getSalesEntry();
    if (data) {
        return Response.json(data);
    } else {
        return Response.json({ message: 'No model found' });
    }
}
