import { createClient } from "@/utils/supabase/server";
import AntalField from "./antalField";
import ToCart from "./AddToCartBtn";
import { revalidatePath } from "next/cache";

const AddToCart = async (formData: FormData) => {
  "use server";
  const data = {
    SushiID: formData.get("sushiID"),
    Antal: formData.get("sushiAntal"),
  };
  const supabase = createClient();
  const { data: inserted, error } = await supabase
    .from("HandleOrdre")
    .insert(data);

  revalidatePath("/Frontend2");
};

export default async function SushiCard() {
  const supabase = createClient();
  const { data } = await supabase.from("Sushi").select("*");

  return (
    <div className="flex gap-4">
      {data?.map((sushi) => (
        <div
          key={sushi.id}
          className="card bg-base-300 w-96 shadow-xl rounded-xl"
        >
          <figure>
            <img src={sushi.Billede} alt="" className="h-40 m-0" />
          </figure>
          <div className="divider"></div>
          <div className="card-body m-0">
            <p className="text-white">{sushi.Navn}</p>
            <div className="flex align-baseline">
              <p className="flex flex-col justify-center">{sushi.Pris}$</p>
              <form action={AddToCart} className="flex">
                <AntalField />
                <ToCart value={sushi.id} name="sushiID" />
              </form>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
