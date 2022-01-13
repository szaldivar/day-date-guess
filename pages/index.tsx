import type { NextPage } from "next";
import Head from "next/head";
import { CSSProperties, useEffect, useState } from "react";

const INITDATE_TIME = new Date("1700-01-01T00:00:00.000Z").getTime();
const ENDDATE_TIME = new Date("2400-12-31T23:59:59.900Z").getTime();
const RANGE = ENDDATE_TIME - INITDATE_TIME;

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const DAYS_OF_WEEK = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const getRandomDate = () => {
  let randomMillis = Math.random() * RANGE;
  let randomTime = Math.round(INITDATE_TIME + randomMillis);
  return new Date(randomTime);
};

const ROW_STYLE: CSSProperties = { margin: "10px 0", textAlign: "center" };

const Home: NextPage = () => {
  const [daySelected, setDaySelected] = useState<string>("none");
  const [randomDate, setRandomDate] = useState<Date | undefined>(undefined);

  useEffect(() => {
    if (randomDate === undefined) return;
    if (daySelected === "none") return;
    let trueDay = DAYS_OF_WEEK[randomDate.getUTCDay()];
    if (daySelected === trueDay) {
      setDaySelected("none");
      setRandomDate(getRandomDate());
    } else alert(`Incorrect: It's a ${trueDay} not a ${daySelected}`);
  }, [daySelected, randomDate]);

  return (
    <div style={{ height: "100%" }}>
      <Head>
        <title>Guess day of the week</title>
      </Head>
      <div
        style={{
          display: "flex",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {randomDate ? (
          <div style={ROW_STYLE}>
            <p
              style={{
                color: "hsl(184, 17%, 30%)",
                fontSize: "40px",
                margin: 0,
              }}
            >
              {MONTHS[randomDate.getUTCMonth()]} {randomDate.getUTCDate()} of{" "}
              {randomDate.getUTCFullYear()}
            </p>
          </div>
        ) : null}
        <div style={ROW_STYLE}>
          <button
            style={{
              color: "hsl(184, 10%, 30%)",
              backgroundColor: "hsl(184, 10%, 52%)",
              borderRadius: "5px",
              padding: "10px",
              border: "none",
              cursor: "pointer",
              fontSize: "30px",
            }}
            onClick={() => {
              setDaySelected("none");
              setRandomDate(getRandomDate());
            }}
          >
            Get Random Date
          </button>
        </div>
        <div style={ROW_STYLE}>
          <select
            value={daySelected}
            onChange={(event) => setDaySelected(event.target.value)}
            style={{
              color: "hsl(184, 10%, 30%)",
              backgroundColor: "hsl(184, 10%, 52%)",
              borderRadius: "5px",
              padding: "10px",
              border: "none",
              cursor: "pointer",
              fontSize: "30px",
            }}
          >
            <option value="none">Select a day...</option>
            <option value="Sunday">Sunday</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Home;
