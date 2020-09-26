import React from "react";
import styles from "./App.module.css";

import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./api";
function App() {
  const [data, setData] = React.useState({});

  React.useEffect(() => {
    async function fetch() {
      const data = await fetchData();
      setData(data);
    }
    fetch();
  }, []);

  return (
    <div className={styles.container}>
      <video autoPlay muted className={styles.background}>
        <source
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
          type="video/mp4"
        />
      </video>
      <Cards data={data} />
      {/* <CountryPicker /> */}
      <Chart />
    </div>
  );
}

export default App;
