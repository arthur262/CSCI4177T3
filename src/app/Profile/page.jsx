import Link from "next/link";
import { useState, useEffect } from "react";
export default function page() {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(sessionStorage.get("item"));
  });

  return <div>{value}</div>;
}
