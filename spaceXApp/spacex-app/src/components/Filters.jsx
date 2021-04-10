import styles from "../stylesheets/Filters.module.css";
import FilterYears from "./FilterYears";
import FilterLand from "./FilterLand";
import FilterLaunch from "./FilterLaunch";

const Filters = (props) => {
  return (
    <div className={styles.filter_cards}>

      <FilterYears launchYear = {props.launchYear} onUpdateYear={props.onUpdateYear} styles={styles} />
      <FilterLaunch launchSuccess = {props.launchSuccess} onUpdateLaunch = {props.onUpdateLaunch} styles={styles} />
      <FilterLand landSuccess = {props.landSuccess} onUpdateLand = {props.onUpdateLand} styles={styles} />

    </div>
  );
};

export default Filters;
