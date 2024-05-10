"use client";
import { useMutation } from "@tanstack/react-query";
import { createReservation } from "./api";
import { useToast } from "@/components/ui/use-toast"

export const useCreateReservation = () => {
  const { toast } = useToast()
    const { error, isPending, mutate } = useMutation({
      mutationFn: createReservation,
      onSuccess: (data) => {
        toast({
          title: "Create Reservation Successfully"
        })
      },
    });
    return { createReservation: mutate, isPending, error };
  };