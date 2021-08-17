import React from "react";
import styles from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul className={styles.listFeedbackn}>
    <li>
      Good: <span>{good}</span>
    </li>
    <li>
      Neutral: <span>{neutral}</span>
    </li>
    <li>
      Bad: <span>{bad}</span>
    </li>
    <li>
      Total: <span>{total}</span>
    </li>
    <li>
      Positive feedback: <span>{positivePercentage}%</span>
    </li>
  </ul>
);

export default Statistics;
