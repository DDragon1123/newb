export default function DashbordPage(){
    return(
        <div>
            <h1 className="text-2xl font-bold mb-4">系統總覽</h1>
            <div className="grid grid-cols-3 gap-4">
                <div className="p-4 bg-slate-300 rounded-lg shadow">今日訂單數:0</div>
                <div className="p-4 bg-slate-300 rounded-lg shadow">目前庫存警告:0</div>
                <div className="p-4 bg-slate-300 rounded-lg shadow">營業額:$0</div>
            </div>
        </div>
    )
}