import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function HeaderClient() {
  return (
    <div className="bg-white sticky top-0 z-50">
      <div className="container flex justify-between items-center pt-2 pb-6  ">
      <div className="flex gap-16 items-center">
        <p className="font-bold italic text-2xl">EatOut</p>
        <div className="flex gap-1 items-center">
        <div className="relative">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <Search />
                      </div>
                      <Input
                        required
                        placeholder="Search"
                        className="ps-14 rounded-lg  focus-visible:ring-0 focus-visible:ring-offset-0"
                      />
                    </div>
          <p className="font-semibold">Filter</p>
          <p className="font-semibold">Map</p>
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <p>0912914373</p>
        <Button>Login</Button>
      </div>
    </div>
    </div>
  );
}
