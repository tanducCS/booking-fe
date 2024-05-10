import { z } from "zod";

export interface Restaurant {
  name: string,
  address: string,
  type: string,
  price_min: number,
  price_max: number,
  open_hour: string,
  close_hour: string,
}