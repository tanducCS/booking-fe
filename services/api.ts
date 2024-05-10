"use server";
import { CreateReservationDto,Reservation } from "@/interfaces/reservation";
import { Restaurant } from "@/interfaces/restaurant";
import { http } from "@/utils/http";

export const getAllReservations = async (): Promise<Reservation[]> => {
  return await http.get(`/reservations`, undefined, false);
};

export const getRestaurantById = async (id: string): Promise<Restaurant> => {
  return await http.get(`/restaurants/${id}`, undefined, false);
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
