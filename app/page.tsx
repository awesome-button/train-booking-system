"use client";

import React from "react";
import "react-day-picker/dist/style.css";
import TripSearchForm from "./ui/tripForm/TripSearchForm";

export default function Home() {
  return (
    <main className="grid h-screen gap-4 place-content-center">
      <p className="max-w-md mx-auto text-4xl font-bold">
        Pick your destination<span>{<br />}</span> and go!
      </p>
      <TripSearchForm />
    </main>
  );
}
