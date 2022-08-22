import React from "react";
import styles from "./TitleWeek.module.scss";

const TitleWeek = () => {
  const titles = ["S", "M", "T", "W", "T", "F", "S"];
  return titles.map((t, i) => (
    <th className={styles.cell} key={i}>
      {t}
    </th>
  ));
};

export default TitleWeek;
