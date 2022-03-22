import React from "react";
import classNames from "classnames/bind";

import styles from "./Title.module.scss";

const cx = classNames.bind(styles);

const Title = ({ size = "lg", align = "left", label, classname }) => {
  return <h1 className={cx("title-root", size, align, classname)}>{label}</h1>;
};

export default Title;
