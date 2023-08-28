import Scaffold from "./components/Layouts/Scaffold";
import StatCard from "./components/StatCard/StatCard";
import ProfileCard from "./components/ProfileCard/ProfileCard";

import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [stats, setStats] = useState([]);
  const [currTimeframe, setTime] = useState("weekly");

  function filterStat(statDuration) {
    const timeframe = statDuration.toLowerCase();
    setTime(timeframe);
  }

  function timeframe(filterType) {
    if (filterType === "daily") {
      return "Yesterday";
    }
    if (filterType === "weekly") {
      return "Last Week";
    }

    if (filterType === "monthly") {
      return "Last Month";
    }
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/data.json");
      const data = await response.json();
      setStats(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <Scaffold className="container d-grid">
        <ProfileCard
          className="span-two"
          id="Profile"
          onStatFilter={filterStat}
          selectedTimeframe={currTimeframe}
        />
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            id={index}
            icon={stat.icon}
            label={stat["title"]}
            currStat={`${stat.timeframes[currTimeframe].current}hrs`}
            prevStat={`${timeframe(currTimeframe)} - ${
              stat.timeframes[currTimeframe].previous
            }hrs`}
          />
        ))}
      </Scaffold>
    </>
  );
}

export default App;
