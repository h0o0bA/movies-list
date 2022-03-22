import React, { useState } from "react";
import classNames from "classnames/bind";
import { motion, AnimatePresence } from "framer-motion";

import { CheckBox } from "components";

// icons
import { ChevronDown } from "assets/icons";

// variants
import { parent } from "./variants";

// styles
import styles from "./DropDown.module.scss";

const cx = classNames.bind(styles);

const DropDown = ({ isFullWidth, list, selected, onSelect, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const isExist = (_data) => {
    return selected.find((item) => item === _data);
  };

  const handleClick = (_data) => {
    if (isExist(_data)) {
      let filter = selected.filter((item) => item !== _data);
      onSelect(filter);
    } else {
      onSelect([...selected, _data]);
    }
  };

  return (
    <div className={cx("dropdown-root", { fullWidth: isFullWidth })}>
      <div className={cx("box")} onClick={toggle}>
        <span className={cx("text")}>
          {selected.length === 0 ? placeholder : `${selected.length} Selected`}
        </span>
        <ChevronDown />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            variants={parent}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={cx("list")}
          >
            {list.map((item, i) => (
              <li key={i}>
                <CheckBox
                  label={item}
                  value={item}
                  checked={isExist(item)}
                  onChange={() => handleClick(item)}
                />
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropDown;
