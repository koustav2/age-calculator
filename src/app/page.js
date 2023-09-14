/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [error, setError] = useState('');
  const [days, setDays] = useState("--");
  const [months, setMonths] = useState("--");
  const [years, setYears] = useState("--");


  const handleClick = () => {
    const date = new Date();
    let day1 = date.getDate();
    let month1 = date.getMonth() + 1;
    let year1 = date.getFullYear();
    let days = day1 - parseInt(day);
    let months = month1 - parseInt(month);
    let years = year1 - parseInt(year);
    if (day === "" || month === "" || year === "") {
      setError("Please fill all the fields");
    } else if (parseInt(year) >= year1) {
      setError("Please enter a valid year");
    }
    else if (parseInt(month) >= 12) {
      setError("Please enter a valid month");
    }
    else if (parseInt(day) >= 31) {
      setError("Please enter a valid day");
    }
    else if (parseInt(day) >= 31 && parseInt(month) >= 12) {
      setError("Please enter a valid day and month");
    }
    else if (parseInt(day) >= 31 && parseInt(year) >= year1) {
      setError("Please enter a valid day and year");
    }
    else if (parseInt(month) >= 12 && parseInt(year) >= year1) {
      setError("Please enter a valid month and year");
    }

    else {

      if (days < 0) {
        days = 30 + days;
        months = months - 1;
      }
      if (months < 0) {
        months = 12 + months;
        years = years - 1;
      }
      setDays(days);
      setMonths(months);
      setYears(years);
      setError("");
    }
  };
  return (
    <main className="flex min-h-screen items-center flex-col justify-center bg-g1 font-poppins">
      <h1 className="text-center text-[32px] text-p1 italic">Age Calculator</h1>
      <div className="min-w-[40vw] h-[60vh] bg-w1 rounded-bl-[20px] rounded-t-[20px] rounded-br-[150px] p-12">
        <div className="flex flex-col gap-2">
          <p className="text-[15px] font-semibold text-p2">{error}.</p>
        </div>
        <div className="flex gap-12">
          <div className="flex flex-col gap-2">
            <lable className="text-[12px] font-semibold text-g2">DAY</lable>
            <input
              type="text"
              name="day"
              onChange={e => setDay(e.target.value)}
              value={day}
              placeholder="DD"
              className="border rounded-md w-24 h-12 outline-none "
            />
          </div>
          <div className="flex flex-col gap-2">
            <lable className="text-[12px] font-semibold text-g2">MONTH</lable>
            <input
              type="text"
              name="month"
              onChange={e => setMonth(e.target.value)}
              value={month}
              placeholder="MM"
              className="border rounded-md w-24 h-12 outline-none "
            />
          </div>
          <div className="flex flex-col gap-2">
            <lable className="text-[12px] font-semibold text-g2">YEAR</lable>
            <input
              type="text"
              name="year"
              onChange={e => setYear(e.target.value)}
              value={year}
              placeholder="YYYY"
              className="border w-24 rounded-md  h-12 outline-none "
            />
          </div>
        </div>
        <div className="flex items-center justify-center md:justify-end mt-12">
          <hr className="w-full" />
          <div className="absolute flex justify-center items-center w-16 h-16 bg-p1 rounded-full text-center"
            onClick={handleClick}
          >
            <Image
              priority
              src="/icon-arrow.svg"
              width={40}
              height={40}
              alt="svg"
              className="absolute  text-w1 z-10 text-center"
            />
          </div>
        </div>
        <div className="mt-6 ">
          <div className="flex items-center gap-2 italic">
            <p className="text-p1 text-[50px] font-extrabold">{years}</p>
            <h1 className="text-[50px] font-extrabold">years</h1>
          </div>
          <div className="flex items-center gap-2 italic">
            <p className="text-p1 text-[50px] font-extrabold">{months}</p>
            <h1 className="text-[50px] font-extrabold">months</h1>
          </div>
          <div className="flex items-center gap-2 italic">

            <p className="text-p1 text-[50px] font-extrabold">{days}</p>
            <h1 className="text-[50px] font-extrabold">days</h1>
          </div>
        </div>
      </div>
    </main>
  );
}
