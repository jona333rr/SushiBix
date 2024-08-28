import DeleteButton from "@/components/DeleteButton";
import SuccessBtn from "@/components/SuccessBtn";
import { createClient } from "@/utils/supabase/server";
import { time } from "console";

export default async function Frontend2() {
  const supabase = createClient();
  const { data } = await supabase.from("HandleOrdre").select("*, Sushi(*)");
  return (
    <div className="h-screen flex justify-center gap-10 items-center flex-col w-full">
      <h1 className="text-3xl font-extrabold">Liste over ordre</h1>
      <div className="gap-3 flex flex-wrap items-center justify-center max-h-[500px] min-h-[500px] min-w-[400px] max-w-[800px] overflow-scroll rounded-xl bg-base-300">
        {data?.map((ordre) => (
          <div
            key={ordre.id}
            className="bg-base-300 w-60 h-60 rounded-xl shadow-2xl flex flex-col justify-center items-center"
          >
            <img src={ordre.Sushi.Billede} className="h-20 w-20 " />
            <h1>{ordre.Sushi.Navn}</h1>
            <h2>Mængde: {ordre.Antal}</h2>
            <h3>{ordre.Tidspunkt.toString().substring(0, 8)}</h3>
            <div className="flex flex-row gap-4 mt-1">
              <DeleteButton id={ordre.id} />
              <SuccessBtn id={ordre.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
