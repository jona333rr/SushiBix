"use client";
import Router, { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { createClient } from "@/utils/supabase/client";

export default function SuccessBtn({ id }: any) {
  const router = useRouter();
  const notify = () => {
    toast.success("Ordren er klar!");
  };

  const Klar = async () => {
    const supabase = createClient();
    const { data: klar } = await supabase
      .from("HandleOrdre")
      .delete()
      .eq("id", id);

    const { data } = await supabase.from("HandleOrdre").select("*, Sushi(*)");

    const TotalPris = data?.reduce(
      (total, current) => current.Sushi.Pris * current.Antal + total,
      0
    );

    const { data: upload } = await supabase
      .from("Ordre")
      .insert({ TotalPris: TotalPris, KundeID: 1 });
    console.log(upload);
    notify();
    router.refresh();
  };
  return (
    <button onClick={Klar} className="btn btn-outline btn-square">
      Klar
    </button>
  );
}
