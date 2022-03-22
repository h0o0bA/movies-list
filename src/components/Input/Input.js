import React from "react";
import classNames from "classnames/bind";

import styles from "./Input.module.scss";
const cx = classNames.bind(styles);

const Input = ({ label, Suffix, wrapperClass, size = "normal", ...rest }) => {
  return (
    <div className={cx("input-root", wrapperClass)}>
      <label>{label}</label>
      <input className={cx(size)} {...rest} />
      {Suffix && Suffix}
    </div>
  );
};

export default Input;
