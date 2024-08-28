"use client";

import { createClient } from "@/utils/supabase/client";

import Router, { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function DeleteButton({ id }: any) {
  const router = useRouter();

  const notify = () => {
    toast.error("Ordren er fjernet");
  };

  const Fjern = async () => {
    const supabase = createClient();
    const { data: fjern } = await supabase
      .from("HandleOrdre")
      .delete()
      .eq("id", id);
    notify();
    router.refresh();
  };
  return (
    <button onClick={Fjern} className="btn btn-outline btn-square">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
}
