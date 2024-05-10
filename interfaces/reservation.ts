import { z } from "zod";

export const reservationFormSchema = z.object({
  restaurant_name: z.string().optional(),
  number_adult: z.number(),
  number_child: z.number(),
  date_arrival: z.date(),
  time_arrival: z.string()
});


export const personreservationFormSchema = z.object({
  reservation_holder_name: z.string().min(1, {message: 'Required field'}),
  email: z.string().min(1, {message: 'Required field'}),
  phone_number: z.string().min(1, {message: 'Required field'}),
  notes: z.string()
});

export type CreateReservationDto = z.infer<typeof reservationFormSchema> & z.infer<typeof personreservationFormSchema>;

export interface Reservation {
  reservation_holder_name: string,
  phone_number: string,
  email: string,
  number_adult: number,
  number_child: number,
  arrival_date: Date,
  arrival_hour: string,
  restaurantId: number,
  id: number
}
