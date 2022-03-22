import React from "react";
import classNames from "classnames/bind";

import { Spinner } from "assets/icons";

import styles from "./Loader.module.scss";
const cx = classNames.bind(styles);

const Loader = () => {
  return (
    <div className={cx("loader-root")}>
      <Spinner />
    </div>
  );
};

export default Loader;
