import React from "react";
import classNames from "classnames/bind";

import styles from "./CheckBox.module.scss";
const cx = classNames.bind(styles);

const CheckBox = ({ label, wrapper, ...rest }) => {
  const { id } = { ...rest };
  return (
    <label id={id} className={cx("form-control", wrapper)}>
      <input htmlFor={id} type="checkbox" name="checkbox" {...rest} /> {label}
    </label>
  );
};

export default CheckBox;
