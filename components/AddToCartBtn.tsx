"use client";
import toast from "react-hot-toast";

export default function ToCart({ children, value, name }: any) {
  const notify = () => {
    toast.success("Tilføjet til kurven");
  };
  return (
    <div>
      <button
        onClick={notify}
        name={name}
        value={value}
        type="submit"
        className="btn btn-success"
      >
        Køb
      </button>
    </div>
  );
}
