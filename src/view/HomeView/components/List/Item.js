import React from "react";
import classNames from "classnames/bind";

import styles from "./List.module.scss";
const cx = classNames.bind(styles);

const Item = ({ data }) => {
  return (
    <div className={cx("item-root")}>
      <img src={data.poster} alt="..." />
      <div className={cx("item-body")}>
        <p>{`${data.title} (${data.year})`}</p>
        <div className={cx("group")}>
          {data.genre.map((gen, i) => (
            <span key={i}>{gen}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Item;
