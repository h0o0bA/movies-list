import * as React from "react";
import classNames from "classnames/bind";

import styles from "./CheckTick.module.scss";
const cx = classNames.bind(styles);

const CheckTick = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 130.2 130.2"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <circle
      className={cx("path", "circle")}
      fill="none"
      stroke="#19B195"
      strokeWidth={6}
      strokeMiterlimit={10}
      cx={65.1}
      cy={65.1}
      r={62.1}
    />
    <path
      className={cx("path", "check")}
      fill="none"
      stroke="#19B195"
      strokeWidth={6}
      strokeLinecap="round"
      strokeMiterlimit={10}
      d="M100.2 40.2 51.5 88.8 29.8 67.5"
    />
  </svg>
);

export default CheckTick;
