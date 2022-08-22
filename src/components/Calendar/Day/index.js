import React from "react";
import { add, sub, format } from "date-fns/esm";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import styles from "./Day.module.scss";

const Day = (props) => {
  const { currentDate, setDate } = props;
  const handlerAddOrSubToDate = (set, duration) => {
    const newDate = set(currentDate, duration);
    setDate(newDate);
  };
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <ArrowBackIosNewIcon
          className={styles.arrow}
          style={{ fontSize: "2em" }}
          onClick={() => handlerAddOrSubToDate(sub, { days: 1 })}
        />
        <h2 className={styles["day-week"]}>{format(currentDate, "EEEE")}</h2>
        <ArrowForwardIosIcon
          className={styles.arrow}
          style={{ fontSize: "2em" }}
          onClick={() => handlerAddOrSubToDate(add, { days: 1 })}
        />
      </div>
      <div className={styles.day}>{format(currentDate, "d")}</div>
    </section>
  );
};

export default Day;
