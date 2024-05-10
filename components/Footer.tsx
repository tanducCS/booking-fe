import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-white ">
      <div className="container py-6">
        <div className="grid grid-cols-5 ">
          <div className="pr-8">
            <p className="font-bold italic text-2xl">EatOut</p>
            <p className="text-sm text-justify">
              PasGo là Mạng lưới nhà hàng NGON, uy tín và chất lượng. Giúp thực
              khách đặt bàn dễ dàng, được tặng kèm ưu đãi mà không cần mua Deal,
              Voucher. Giải pháp đột phá mới cho câu chuyện ăn gì, ở đâu!
            </p>
          </div>
          <div className="flex flex-col items-center ">
            <p className="font-medium text-base mb-3">Về EatOut</p>
            <div className="flex flex-col gap-1">
              <Link href="#" className="text-sm hover:text-red-600 font-medium">
                Những điều thú vị về App PasGo - Có thể bạn chưa biết!
              </Link>
              <Link href="#" className="text-sm hover:text-red-600 font-medium">Vì sao PasGo đang phát triển!</Link>
              <Link href="#" className="text-sm hover:text-red-600 font-medium">Hướng dẫn đặt bàn</Link>
              <Link href="#" className="text-sm hover:text-red-600 font-medium">Chính sách bảo mật</Link>
            </div>
          </div>
          <div className="flex flex-col items-center px-6">
            <p className="font-medium text-base mb-3">Tương tác</p>
            <div className="flex flex-col gap-1 items-start w-full">
              <Link href="#"  className="text-sm hover:text-red-600 font-medium">Khiếu nại</Link>
              <Link href="#" className="text-sm hover:text-red-600 font-medium">Câu hỏi thường gặp</Link>
              <Link href="#" className="text-sm hover:text-red-600 font-medium">Dành cho nhà hàng</Link>
              <Link href="#" className="text-sm hover:text-red-600 font-medium">Tin tức</Link>
              <Link href="#" className="text-sm hover:text-red-600 font-medium">Liên hệ</Link>
              <Link href="#" className="text-sm hover:text-red-600 font-medium">Địa điểm gần bạn</Link>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 pr-4">
            <p className="font-medium text-base mb-3">Tham gia với chúng tôi</p>
            <div className="flex gap-3"></div>
            <p className="font-medium text-base mb-3 text-center">Thương hiệu đã được chứng nhận</p>
          </div>
          <div className="relative">
            <Image
              src={'/images/footer/dangkydoitac.png'}
              alt="Image"
              fill
            />
          </div>
        </div>
      </div>
    </div>
  );
}
