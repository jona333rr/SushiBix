"use client";
import { createClient } from "@/utils/supabase/client";
import { useState } from "react";

export default function UpdateAntal({ placeholder, id }: any) {
  const UpdateVal = async (valUpd: any) => {
    const supabase = createClient();
    const { data: update, error } = await supabase
      .from("HandleOrdre")
      .update({ Antal: valUpd })
      .eq("id", id);
    console.log(valUpd);
    if (valUpd <= 0) {
      const { data: fjern } = await supabase
        .from("HandleOrdre")
        .delete()
        .eq("id", id);
    }
  };

  return (
    <input
      onChange={(valUpd) => UpdateVal(valUpd.target.value)}
      type="number"
      className="input w-14"
      placeholder={placeholder}
    ></input>
  );
}
