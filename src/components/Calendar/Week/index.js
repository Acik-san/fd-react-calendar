import React from "react";
import { format } from "date-fns";
import cx from "classnames";
import styles from "./Week.module.scss";

const Week = (props) => {
  const { currentDate, monthMaket } = props;
  const week = [];
  for (let i = 0; i < 7; i++) {
    week.push(monthMaket.shift());
  }
  console.log(week);
  return (
    <tr>
      {week.map((d, i) => {
        const weekClassName = cx(
          d === Number(format(currentDate, "d"))
            ? styles.currentDay
            : styles.cell
        );
        return (
          <td className={weekClassName} key={i}>
            {d}
          </td>
        );
      })}
    </tr>
  );
};

export default Week;
