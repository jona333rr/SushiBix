"use client";

import toast from "react-hot-toast";

export default function PurchaseBtn() {
  const notify = () => {
    toast.success("Bestillingen er nu placeret");
  };
  return (
    <div>
      <button onClick={notify} className="btn text-white btn-success w-32">
        Bestil
      </button>
    </div>
  );
}
