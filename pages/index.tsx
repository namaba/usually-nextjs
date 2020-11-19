import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [holidays, setHolidays] = useState([]);
  useEffect(() => {
    fetch("/api/holidays")
      .then((r) => r.json())
      .then((data) => {
        setHolidays(data);
      });
  }, []);

  return (
    <div>
      {holidays.map((day) => (
        <div key={day.name}>{day.localName}</div>
      ))}
    </div>
  );
}
