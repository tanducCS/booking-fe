"use client";

import { personreservationFormSchema } from "@/interfaces/reservation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import qs from "query-string";
import dayjs from "dayjs";
import { Restaurant } from "@/interfaces/restaurant";
import { useSearchParams } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
import { useCreateReservation } from "@/services/query";

const daysOfWeek = [
  "Chủ Nhật",
  "Thứ Hai",
  "Thứ Ba",
  "Thứ Tư",
  "Thứ Năm",
  "Thứ Sáu",
  "Thứ Bảy",
];

interface Props {
  restaurant_id: string;
  restaurant: Restaurant;
}

export default function PersonReservationForm({
  restaurant_id,
  restaurant,
}: Props) {
  const searchParams = useSearchParams();

  const number_adult = searchParams.get("number_adult") ?? 0;
  const number_child = searchParams.get("number_child") ?? 0;
  const date_arrival = searchParams.get("date_arrival") ?? "01/01/2024";
  const time_arrival = searchParams.get("time_arrival") ?? "00:00";

  const router = useRouter();
  const form = useForm<z.infer<typeof personreservationFormSchema>>({
    resolver: zodResolver(personreservationFormSchema),
    defaultValues: {
      reservation_holder_name: "",
      email: "",
      phone_number: "",
      notes: "",
    },
  });

  const { createReservation, isPending, error } = useCreateReservation();

  function onSubmit(values: z.infer<typeof personreservationFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    try {
      createReservation({
        ...values,
        number_adult: Number(number_adult),
        number_child: Number(number_child),
        date_arrival: new Date(date_arrival),
        time_arrival: time_arrival,
      });
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="flex gap-6 ">
      <div className="bg-white rounded-lg flex flex-col py-4 w-2/3">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="px-6 py-4">
            <p className="font-medium mb-4">Thông tin người đặt</p>
            <div className="flex flex-col gap-4">
              <FormField
                control={form.control}
                name="reservation_holder_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tên liên lạc</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Nhập tên liên hệ"
                        className="bg-white focus-visible:ring-0 focus-visible:ring-offset-0"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex gap-3 w-full">
                <FormField
                  control={form.control}
                  name="phone_number"
                  render={({ field }) => (
                    <FormItem className="w-1/2">
                      <FormLabel>Số điện thoại</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Nhập số điện thoại"
                          className="bg-white focus-visible:ring-0 focus-visible:ring-offset-0 "
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-1/2">
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Nhập Email"
                          className="bg-white focus-visible:ring-0 focus-visible:ring-offset-0 "
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="notes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ghi chú</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Nhập ghi chú"
                        className="bg-white"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              type="submit"
              className=" mt-6 bg-[#f01b23] hover:bg-[#f01b23]/85"
            >
              Đặt chỗ
            </Button>
            <p className="text-xs text-[#808080] mt-2 font-medium">
              Khi lựa chọn “Đặt chỗ” bạn đã công nhận mình đã đọc và đồng ý với
              các Điều khoản sử dụng và chính sách quyền riêng tư của Pasgo
            </p>
          </form>
        </Form>
      </div>
      <div className="flex flex-col gap-8 bg-white rounded-lg py-4 w-1/3 px-8">
        <div className="flex justify-between items-center border-b-[1px] border-black border-solid py-4">
          <p className="font-medium">Thông tin đặt chỗ</p>
          <Button className="bg-[#f01b23] hover:bg-[#f01b23]/85">
            Chỉnh sửa
          </Button>
        </div>
        <p className="border-b-[1px] border-black border-solid pb-4 font-medium">
          {restaurant.name}
        </p>
        <p className="border-b-[1px] border-black border-solid pb-4 font-medium">{`${number_adult} người lớn, ${number_child} trẻ em`}</p>
        <p className="border-b-[1px] border-black border-solid pb-4 font-medium">{`${
          daysOfWeek[new Date(!date_arrival as unknown as string).getDay() + 1]
        }, ngày ${date_arrival} ${time_arrival}`}</p>
      </div>
    </div>
  );
}
