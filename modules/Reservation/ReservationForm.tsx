"use client";

import { reservationFormSchema } from "@/interfaces/reservation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { User, CalendarIcon } from "lucide-react";
import { Clock } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { hours } from "./constant";
import { useRouter } from "next/navigation";
import qs from "query-string";
import dayjs from 'dayjs';

interface Props {
  restaurant_id: string
}


export default function ReserVationForm({restaurant_id}: Props) {
  const router = useRouter();
  const form = useForm<z.infer<typeof reservationFormSchema>>({
    resolver: zodResolver(reservationFormSchema),
    defaultValues: {
      number_adult: 1,
      number_child: 1,
      restaurant_name: "",
      date_arrival: new Date(),
      time_arrival: "00:00",
    },
  });

  function onSubmit(values: z.infer<typeof reservationFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const {
      number_adult,
      date_arrival,
      number_child,
      restaurant_name,
      time_arrival,
    } = values;
    const query_str = qs.stringify(
      {
        number_adult,
        date_arrival: dayjs(date_arrival).format('DD/MM/YYYY'),
        number_child,
        restaurant_name,
        time_arrival,
      },
      { skipNull: true, skipEmptyString: true }
    );

    router.push(`/1/reservation/${restaurant_id}?${query_str}`)
  }
  return (
    <div className="bg-white rounded-lg flex flex-col py-4">
      <div className="flex justify-center gap-2">
        <p className="font-semibold">Đặt chỗ </p>
        <p> (Để có chỗ trước khi đến)</p>
      </div>
      <p className="text-red-500 font-semibold text-center">Giảm 10%</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="px-2 py-4">
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="number_adult"
              render={({ field }) => (
                <FormItem>
                  <div className="flex gap-3">
                    <User />
                    <p>Người lớn</p>
                  </div>
                  <Select
                    onValueChange={(value) => field.onChange(Number(value))}
                    defaultValue={field.value.toString()}
                  >
                    <FormControl>
                      <SelectTrigger className="bg-white focus:ring-0 focus:ring-offset-0">
                        <SelectValue defaultValue={field.value} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {Array.from({ length: 199 }).map((_, index) => (
                        <SelectItem value={(index + 1).toString()} key={index}>
                          {index + 1}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="number_child"
              render={({ field }) => (
                <FormItem>
                  <div className="flex gap-3">
                    <User />
                    <p>Trẻ em</p>
                  </div>
                  <Select
                    onValueChange={(value) => field.onChange(Number(value))}
                    defaultValue={field.value.toString()}
                  >
                    <FormControl>
                      <SelectTrigger className="bg-white focus:ring-0 focus:ring-offset-0">
                        <SelectValue defaultValue={field.value} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {Array.from({ length: 199 }).map((_, index) => (
                        <SelectItem value={(index + 1).toString()} key={index}>
                          {index + 1}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="date_arrival"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <div className="flex gap-3">
                    <Clock />
                    <p>Thời gian đến</p>
                  </div>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            " pl-3 text-left font-normal bg-white",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="time_arrival"
              render={({ field }) => (
                <FormItem className="flex items-end">
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="bg-white focus:ring-0 focus:ring-offset-0">
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {hours.map((item, idx) => (
                        <SelectItem value={item} key={idx}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            type="submit"
            className="w-full mt-6 bg-[#f01b23] hover:bg-[#f01b23]/85"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
