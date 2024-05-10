import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import ReserVationForm from "@/modules/Reservation/ReservationForm";
import { CircleDollarSign, Clock2, Flag, MapPin } from "lucide-react";
import { getRestaurantById } from "@/services/api";

export default async function RestaurantDetailPage({ params }: { params: { slug: string } }) {
  const restaurant = await getRestaurantById(params.slug)
  return (
    <div className="container min-h-[calc(100vh-88px)] flex gap-3 justify-between mb-3">
      <div className="flex flex-col gap-4 w-2/3 px-16">
        <Carousel className="w-full">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="relative flex aspect-video items-center justify-center p-6">
                      <Image
                        src={`/images/restaurant/test${index + 1}.webp`}
                        alt="Image"
                        fill
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="bg-white p-4 rounded-lg">
          <p className="font-semibold text-3xl mb-3">
            {restaurant.name}
          </p>
          <div className="flex flex-col gap-4">
          <div className="flex gap-3">
          <Flag />
            <p>{restaurant.type}</p>
          </div>
          <div className="flex gap-3">
            <MapPin />
            <p>{restaurant.address}</p>
          </div>
          <div className="flex gap-3">
          <CircleDollarSign />
            <p>{`Khoảng giá: ${restaurant.price_min} - ${restaurant.price_max} đ/người`}</p>
          </div>
          <div className="flex gap-3">
            <Clock2 />
            <p>{`Giờ mở cửa: ${restaurant.open_hour} - ${restaurant.close_hour}`}</p>
          </div>
          </div>
        </div>
      </div>
      <div className="w-1/3 flex flex-col gap-4">
        <div className=" grid grid-cols-2 gap-4 ">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              className="relative aspect-[197.33/115] rounded-lg overflow-hidden"
              key={index}
            >
              <Image
                src={`/images/restaurant/test${index + 1}.webp`}
                alt="Image"
                fill
              />
            </div>
          ))}
        </div>
        <div>
          <ReserVationForm restaurant_id={params.slug}/>
        </div>
      </div>
    </div>
  );
}
