import { APISalesEntity } from "./type";

type GroupedSales = {
    [key: string]: APISalesEntity[];
};

export default function salesEntityGrouping(salesEntity: APISalesEntity[]): GroupedSales {
    return salesEntity.reduce((acc: GroupedSales, obj) => {
        const key = obj.type;
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
    }, {});
}