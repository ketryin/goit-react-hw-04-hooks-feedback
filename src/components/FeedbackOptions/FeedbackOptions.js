import React from "react";
import PropTypes from "prop-types";
import styles from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ incrementCounters }) => (
  <ul className={styles.listBtn}>
    {Object.keys(incrementCounters).map((counter) => (
      <li key={counter}>
        <button
          className={styles.btn}
          onClick={() => incrementCounters[counter]()}
        >
          {counter}
        </button>
      </li>
    ))}
  </ul>
);

FeedbackOptions.propTypes = {
  incrementCounters: PropTypes.object.isRequired,
};

export default FeedbackOptions;
