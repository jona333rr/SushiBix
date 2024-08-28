import DeleteButton from "@/components/DeleteButton";
import PurchaseBtn from "@/components/PurchaseBtn";
import UpdateAntal from "@/components/UpdateAntal";
import { createClient } from "@/utils/supabase/server";

export default async function CheckoutPage() {
  const supabase = createClient();
  const { data } = await supabase.from("HandleOrdre").select("*, Sushi(*)");
  const TotalPris = data?.reduce(
    (total, current) => current.Sushi.Pris * current.Antal + total,
    0
  );
  return (
    <main className="h-screen w-full flex items-center justify-center gap-5">
      <div className=" w-[500px] h-[500px] gap-4 flex flex-col overflow-scroll p-4 z-20 bg-base-300  rounded-xl">
        {data?.map((ordre) => (
          <div className="flex min-h-16 items-center bg-base-200 rounded-r-xl">
            <figure className="bg-base-100 rounded-l-xl h-full flex items-center w-20 justify-center">
              <img src={ordre.Sushi.Billede} className="w-14 h-14" />
            </figure>
            <div className="w-full flex justify-between items-center h-full p-4">
              <p className="text-white">{ordre.Sushi.Navn}</p>
              <div className="flex items-center gap-3">
                <UpdateAntal placeholder={ordre.Antal} id={ordre.id} />
                <DeleteButton id={ordre.id} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-base-200 w-[250px] rounded-t-xl h-[500px] flex justify-between flex-col">
        <div className="flex items-center p-5 gap-3 flex-col m-0 overflow-scroll">
          {data?.map((ordre) => (
            <div>
              <p>
                {ordre.Sushi.Navn} | {ordre.Sushi.Pris}$ x {ordre.Antal}
              </p>
            </div>
          ))}
        </div>
        <div className="bg-base-300 rounded-b-xl h-32 gap-3 w-full flex items-center justify-center flex-col">
          <p className="font-extrabold text-white">Total: {TotalPris}$</p>
          <PurchaseBtn />
        </div>
      </div>
    </main>
  );
}
