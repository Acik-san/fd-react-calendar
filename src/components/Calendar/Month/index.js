import React from "react";
import { format, startOfMonth, getDaysInMonth, add, sub } from "date-fns";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Week from "../Week";
import styles from "./Month.module.scss";
import TitleWeek from "../TitleWeek";

const Month = (props) => {
  const { currentDate, setDate } = props;
  const handlerAddOrSubToDate = (set, duration) => {
    const newDate = set(currentDate, duration);
    setDate(newDate);
  };
  const month = [];
  const monthName = format(currentDate, "LLLL yyyy");
  for (let i = 1; i <= getDaysInMonth(currentDate); i++) {
    month.push(i);
  }
  const monthMaket = [];
  for (let i = 0; i <= 41; i++) {
    monthMaket.push(" ");
  }

  switch (format(startOfMonth(currentDate), "EEEE")) {
    case "Sunday":
      monthMaket.splice(0, month.length, ...month);
      break;
    case "Monday":
      monthMaket.splice(1, month.length, ...month);
      break;
    case "Tuesday":
      monthMaket.splice(2, month.length, ...month);
      break;
    case "Wednesday":
      monthMaket.splice(3, month.length, ...month);
      break;
    case "Thursday":
      monthMaket.splice(4, month.length, ...month);
      break;
    case "Friday":
      monthMaket.splice(5, month.length, ...month);
      break;
    case "Saturday":
      monthMaket.splice(6, month.length, ...month);
      break;

    default:
      break;
  }

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <ArrowBackIosNewIcon
          className={styles.arrow}
          style={{ fontSize: "2em" }}
          onClick={() => handlerAddOrSubToDate(sub, { months: 1 })}
        />
        <h2 className={styles.name}>{monthName}</h2>
        <ArrowForwardIosIcon
          className={styles.arrow}
          style={{ fontSize: "2em" }}
          onClick={() => handlerAddOrSubToDate(add, { months: 1 })}
        />
      </div>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <TitleWeek />
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          <Week
            currentDate={currentDate}
            month={month}
            monthMaket={monthMaket}
          />
          <Week
            currentDate={currentDate}
            month={month}
            monthMaket={monthMaket}
          />
          <Week
            currentDate={currentDate}
            month={month}
            monthMaket={monthMaket}
          />
          <Week
            currentDate={currentDate}
            month={month}
            monthMaket={monthMaket}
          />
          <Week
            currentDate={currentDate}
            month={month}
            monthMaket={monthMaket}
          />
          <Week
            currentDate={currentDate}
            month={month}
            monthMaket={monthMaket}
          />
        </tbody>
      </table>
    </section>
  );
};

export default Month;
