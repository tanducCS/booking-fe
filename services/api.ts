"use server";
import { CreateReservationDto,Reservation } from "@/interfaces/reservation";
import { Restaurant } from "@/interfaces/restaurant";
import { http } from "@/utils/http";
import dayjs from "dayjs";

export const getAllReservations = async (): Promise<Reservation[]> => {
  return await http.get(`/reservations`, { cache: "no-store" }, false);
};

export const getRestaurantById = async (id: string): Promise<Restaurant> => {
  return await http.get(`/restaurants/${id}`, { cache: "no-store" }, false);
};

export const createReservation = async (
  createReservation: CreateReservationDto
): Promise<Restaurant> => {
  return await http.post(
    `/reservations`,
    {
      ...createReservation,
      arrival_date: createReservation.date_arrival,
      arrival_hour: createReservation.time_arrival,
    },
    undefined,
    false
  );
};
