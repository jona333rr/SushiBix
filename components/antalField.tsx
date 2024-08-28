"use client";

import { useState } from "react";

let antal: 0;

export default function AntalField() {
  const [antal, setAntal] = useState(0);

  const handleChange = (e : any) => {
    const inputValue = e.target.value;

    setAntal(inputValue);
  };

  return (
    <input
      type="number"
      placeholder="Køb"
      name="sushiAntal"
      value={antal}
      onChange={handleChange}
      className="btn"
    ></input>
  );
}
