import React from "react";
import classNames from "classnames/bind";

// components
import Item from "./Item";

import styles from "./List.module.scss";
const cx = classNames.bind(styles);

const List = ({ list }) => {
  return (
    <div className={cx("list-root")}>
      {list.map((item, i) => (
        <Item key={i} data={item} />
      ))}
    </div>
  );
};

export default List;
