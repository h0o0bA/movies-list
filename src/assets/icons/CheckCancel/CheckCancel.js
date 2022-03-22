import * as React from "react";
import classNames from "classnames/bind";

import styles from "../CheckTick/CheckTick.module.scss";
const cx = classNames.bind(styles);

const CheckCancel = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 130.2 130.2"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <circle
      className={cx("path", "circle")}
      fill="none"
      stroke="#FF5666"
      strokeWidth={6}
      strokeMiterlimit={10}
      cx={65.1}
      cy={65.1}
      r={62.1}
    />
    <path
      className={cx("path", "line")}
      fill="none"
      stroke="#FF5666"
      strokeWidth={6}
      strokeLinecap="round"
      strokeMiterlimit={10}
      d="m34.4 37.9 61.4 54.4M95.8 38 34.4 92.2"
    />
  </svg>
);

export default CheckCancel;
