import { getAllReservations } from "@/services/api"
import { DataTable } from "./data-table"
import { columns } from "./columns"

export default async function ReservationManagePage () {
    const data = await getAllReservations()
    return (
        <div className="container mx-auto py-10">
            <p className="font-semibold text-xl">Quản lý đặt chỗ</p>
            <DataTable columns={columns} data={data} />
        </div>
    )
}