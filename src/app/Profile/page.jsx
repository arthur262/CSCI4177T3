"use client";
import { useState, useEffect } from "react";
export default function page() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  useEffect(() => {
    var queryString = String(window.location.search).replace("?", "");
    var result = queryString.split("&");
    console.log(result);
    setFirstname(result[0]);
    setLastname(result[1]);
    setEmail(result[2]);
    setPassword(result[3]);
    setConfirmpassword(result[4]);
  });

  return (
    <div style={{ color: "black" }}>
      {firstname}
      <br /> {lastname}
      <br />
      {email}
      <br />
      {password}
      <br />
      {confirmpassword}
    </div>
  );
}
