import React from "react";
import styles from "./App.module.css";

import { Cards, Chart, CountryPicker } from "./components";

function App() {
  return (
    <div className={styles.container}>
      <Cards />
      <CountryPicker />
      <Chart />
    </div>
  );
}

export default App;
