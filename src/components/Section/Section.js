import React from "react";
import PropTypes from "prop-types";
import styles from "./Section.module.css";

const Section = ({ title, children }) => (
  <section className={styles.section}>
    <h1 className={styles.title}>{title}</h1>
    {children}
  </section>
);

Section.defaultProps = {
  title: "",
  children: [],
};
Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
export default Section;
