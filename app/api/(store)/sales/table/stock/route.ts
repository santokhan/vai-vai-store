import { getStockByType } from "@/actions/stock/get-stock-by-type";

export async function GET() {
    return Response.json({ message: 'Welcome to the /api/sales/table/stock/ route' })
}

export async function POST(request: Request): Promise<Response> {
    const body = await request.json();
    const { type, stockId } = body;

    if (type && stockId) {
        const data = await getStockByType(type, stockId);

        if (data) {
            return Response.json(data);
        } else {
            return Response.json({ message: 'No data found in salesEntry' });
        }
    } else {
        return Response.json({ message: 'Can not defined type and stockId' });
    }
}
