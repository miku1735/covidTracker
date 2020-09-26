import React from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { fetchCountries } from "../../api";

function CountryPicker() {
  const [fetchedCountries, setFetchedCountries] = React.useState([]);
  React.useEffect(() => {
    const countries = async () => {
      setFetchedCountries(await fetchCountries());
    };
    countries();
  }, [setFetchedCountries]);
  return (
    <FormControl className={styles.FormControl}>
      <NativeSelect>
        <option value="global">Global</option>
        {fetchedCountries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
}

export default CountryPicker;
