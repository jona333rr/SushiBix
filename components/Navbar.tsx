import Link from "next/link";
import { FaShoppingBasket } from "react-icons/fa";

export default async function Navbar() {
  return (
    <div className="h-14 w-full bg-base-300 flex items-center justify-end">
      <div className="w-full">
        <Link href={"/"} className="ml-2 font-extrabold">
          SushiBixen
        </Link>
      </div>
      <div className="w-full flex justify-end">
        <Link href={"/Frontend2"} className="btn btn-ghost">
          Køkken (Frontend2)
        </Link>
        <Link href={"/Checkout"} className="btn btn-circle btn-ghost mr-2">
          <FaShoppingBasket className="h-10 w-5" />
        </Link>
      </div>
    </div>
  );
}
