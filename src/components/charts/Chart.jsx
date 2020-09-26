import React from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";

function Chart() {
  const [dailyData, setDailyData] = React.useState([]);

  React.useEffect(() => {
    const fetchApi = async () => {
      setDailyData(await fetchDailyData());
    };
    console.log(dailyData);
    fetchApi();
  }, []);
  console.log(dailyData.map(({ confirmed }) => confirmed));
  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            backgroundColor: "rgba(0,0,255,0.15)",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255,0,0,0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  return <div className={styles.container}>{lineChart}</div>;
}

export default Chart;
