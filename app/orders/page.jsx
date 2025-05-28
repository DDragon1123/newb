import { Button } from "@/components/ui/button";
import Link from "next/link";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge"

const orders = [
    {
        id: "Ord-001",
        status: "等待中",
        total: 50,
        table: "1號桌",
    },
    {
        id: "Ord-002",
        status: "完成",
        total: 150,
        table: "1號桌",
    },
    {
        id: "Ord-003",
        status: "準備中",
        total: 350,
        table: "1號桌",
    },
]

export default function OrdersPage() {
    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">訂單管理</h1>
                <Button asChild>
                    <Link href="/orders/new">新增訂單</Link>
                </Button>
            </div>
            <div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>訂單編號</TableHead>
                            <TableHead>狀態</TableHead>
                            <TableHead>金額</TableHead>
                            <TableHead>桌號/類型</TableHead>
                            <TableHead>操作</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {orders.map((order) => (
                            <TableRow key={order.id}>
                                <TableCell>{order.id}</TableCell>
                                <TableCell>
                                    <Badge className={order.status=="等待中" ? "bg-blue-700" : ""}>{order.status}</Badge>
                                </TableCell>
                                <TableCell>{order.total}</TableCell>
                                <TableCell>{order.table}</TableCell>
                                <TableCell>
                                    <Button className="mr-2 bg-red-700 text-white">詳情</Button>
                                    <Button>取消</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                        {/* <TableRow>
                            <TableCell>1</TableCell>
                            <TableCell>
                                <Badge>準備中</Badge>
                            </TableCell>
                            <TableCell>$50</TableCell>
                            <TableCell>1號桌</TableCell>
                            <TableCell>
                                <Button className="mr-2 bg-red-700 text-white">詳情</Button>
                                <Button>取消</Button>
                            </TableCell>
                        </TableRow> */}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
