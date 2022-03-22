import React from "react";
import classNames from "classnames/bind";

// styles
import styles from "./Container.module.scss";

// bind
const cx = classNames.bind(styles);

const Container = ({ children, hasSpace = true }) => {
  return <div className={cx("container", { space: hasSpace })}>{children}</div>;
};

export default Container;
