import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const items = [
    { id: 1, name: "培根", stock: 7, minstock: 5 },
    { id: 2, name: "雞蛋", stock: 8, minstock: 10 },
    { id: 3, name: "吐司", stock: 20, minstock: 15 },
];

export default function InventoryPage() {
    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">庫存管理</h1>
                <Button className="bg-slate-900 text-white">新增商品</Button>
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>商品名稱</TableHead>
                        <TableHead>當前庫存</TableHead>
                        <TableHead>最低庫存</TableHead>
                        <TableHead>操作</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {items.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>
                                {item.stock < item.minstock ? (
                                    <Badge className="bg-red-600 text-white">
                                        {item.stock}（庫存不足）
                                    </Badge>
                                ) : (
                                    <Badge className="bg-slate-900 text-white">{item.stock}</Badge>
                                )}
                            </TableCell>
                            <TableCell>{item.minstock}</TableCell>
                            <TableCell>
                                <Button className="bg-green-600 text-white">編輯</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
