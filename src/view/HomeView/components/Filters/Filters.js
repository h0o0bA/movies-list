import React from "react";
import classNames from "classnames/bind";

// components
import { DropDown, Input, RadioButton } from "components";

import styles from "./Filters.module.scss";
const cx = classNames.bind(styles);

const Filters = ({
  searchText,
  setSearchText,
  genres,
  selectedGenres,
  setSelectedGenres,
  years,
  selectedYears,
  setSelectedYears,
  selectedType,
  setSelectedType,
  clear,
}) => {
  return (
    <div className={cx("filters-root")}>
      <div className={cx("group")}>
        <h3>Filters</h3>
        <span onClick={clear}>(clear filters)</span>
      </div>
      <Input
        label="Search"
        size="xs"
        wrapperClass={cx("input-wrapper")}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <DropDown
        isFullWidth
        placeholder="Genres..."
        list={genres}
        selected={selectedGenres}
        onSelect={setSelectedGenres}
      />
      <DropDown
        isFullWidth
        placeholder="Years..."
        list={years}
        selected={selectedYears}
        onSelect={setSelectedYears}
      />
      <div className={cx("radio-group")}>
        <p>By</p>
        <div>
          <RadioButton
            label="Movies"
            value={"movie"}
            onChange={(e) => setSelectedType(e.target.value)}
            checked={selectedType === "movie"}
            wrapper={cx("wrapper")}
          />
          <RadioButton
            label="Books"
            value={"book"}
            onChange={(e) => setSelectedType(e.target.value)}
            checked={selectedType === "book"}
            wrapper={cx("wrapper")}
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;
