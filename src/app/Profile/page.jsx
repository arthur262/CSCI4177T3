"use client";
import { useState, useEffect } from "react";
export default function page() {
  const [value, setValue] = useState("");

  useEffect(() => {
    var queryString = String(window.location.search).replace("?", "");
    var result = queryString.split("&");
    result.forEach((element) => {
      result = result + element + "\t";
    });
    setValue(result);
  });

  return <div style={{ color: "black" }}>{value}</div>;
}
