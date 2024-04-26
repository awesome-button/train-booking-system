"use client";

import React from "react";
import "react-day-picker/dist/style.css";

import TravelForm from "./ui/travelForm/TravelForm";

export default function Home() {
  return (
    <main style={{ display: "flex", flexDirection: "column" }}>
      <p>Pick your destination and go!</p>
      <TravelForm />
    </main>
  );
}
