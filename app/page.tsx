"use client";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import styles from "@/app/ui/home.module.css";
import { useState } from "react";
import { startOfMonth } from "date-fns/startOfMonth";
import { startOfYesterday } from "date-fns/startOfYesterday";

export default function Home() {
  const [selected, setSelected] = useState();
  const [showDatePicker, setShowDatePicker] = useState(false);

  const disabledDays = [
    { from: startOfMonth(new Date()), to: startOfYesterday() }
  ];

  return (
    <main className={styles.main}>
      <input
        type="date"
        onClick={(e) => {
          (e) => e.preventDefault();
          setShowDatePicker(!showDatePicker);
        }}
      />
      {showDatePicker && (
        <DayPicker
          mode="single"
          numberOfMonths={2}
          disabled={disabledDays}
          selected={selected}
        />
      )}
    </main>
  );
}
