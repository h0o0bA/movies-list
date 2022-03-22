import React from "react";
import classNames from "classnames/bind";

import styles from "./RadioButton.module.scss";
const cx = classNames.bind(styles);

const RadioButton = ({ label, wrapper, ...rest }) => {
  const { id } = { ...rest };
  return (
    <label id={id} className={cx("form-control", wrapper)}>
      <input htmlFor={id} type="radio" name="radio" {...rest} /> {label}
    </label>
  );
};

export default RadioButton;
