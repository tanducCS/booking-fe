import PersonReservationForm from "@/modules/Reservation/PersonReservationForm";
import { getRestaurantById } from "@/services/api";

export default async function ReservationPage({
  params,
}: {
  params: { slug: string };
}) {
  const restaurant = await getRestaurantById(params.slug);
  return (
    <>
      <div className="container min-h-[calc(100vh-88px)] flex flex-col gap-5 mb-3">
        <p className="bg-white rounded-lg w-full mt-4 py-4 px-6 text-2xl font-medium">{`Đặt chỗ đến "${restaurant.name}"`}</p>
        <p className="bg-[#E8F1FF] rounded-lg  py-4 px-6 text-sm font-semibold">Nhập thông tin chính xác trong 05:00</p>
        <PersonReservationForm restaurant_id={params.slug} restaurant={restaurant}/>
      </div>
    </>
  );
}
