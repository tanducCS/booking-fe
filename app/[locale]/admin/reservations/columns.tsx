"use client"

import { Reservation } from "@/interfaces/reservation"
import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Reservation>[] = [
  {
    accessorKey: "reservation_holder_name",
    header: "Người đặt",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone_number",
    header: "Số điện thoại",
  },
  {
    accessorKey: "number_adult",
    header: "Số Người lớn",
  },
  {
    accessorKey: "number_child",
    header: "Số Trẻ em",
  },
  {
    accessorKey: "arrival_date",
    header: "Thời gian đến",
  },
  {
    accessorKey: "arrival_hour",
    header: "Giờ đến",
  },
]
