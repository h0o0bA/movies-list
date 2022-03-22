import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";

// components
import { Container, Loader, Title } from "components";
import { Filters, List } from "./components";

// network
import { fetchData } from "./utils/network";

// utils
import {
  checkGeneres,
  checkYear,
  checkMediaType,
  searchMedia,
  getYears,
  getGenres,
} from "./utils";

import styles from "./HomeView.module.scss";
const cx = classNames.bind(styles);

// fetch data as earlier as component mount
const promise = fetchData();

const HomeView = () => {
  const [dataList, setDataList] = useState(null);
  const [genres, setGenres] = useState([]);
  const [years, setYears] = useState([]);

  const [selectedType, setSelectedType] = useState("");
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedYears, setSelectedYears] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    promise
      .then((data) => {
        const dataYears = getYears(data.media);
        const dataGenres = getGenres(data.media);

        setYears(dataYears);
        setGenres(dataGenres);
        setDataList(data.media);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getFilteredMedias = () => {
    let filteredMedia =
      selectedGenres.length > 0
        ? dataList.filter((media) => checkGeneres(selectedGenres, media.genre))
        : dataList;
    filteredMedia =
      selectedYears.length > 0
        ? filteredMedia.filter((media) => checkYear(selectedYears, media.year))
        : filteredMedia;
    filteredMedia =
      selectedType.length > 0
        ? filteredMedia.filter((media) =>
            checkMediaType(selectedType, media.type)
          )
        : filteredMedia;
    filteredMedia =
      searchText.length > 0
        ? filteredMedia.filter((media) =>
            searchMedia(searchText, media.title, media.year)
          )
        : filteredMedia;
    return filteredMedia;
  };

  const clearFilters = () => {
    setSearchText("");
    setSelectedGenres([]);
    setSelectedType("");
    setSelectedYears([]);
  };

  const filteredList = getFilteredMedias();

  if (!dataList) return <Loader />;

  return (
    <Container>
      <div className={cx("home-view-root")}>
        <Title label="Search Media" align="center" classname={cx("title")} />
        <div className={cx("content-section")}>
          <Filters
            searchText={searchText}
            setSearchText={setSearchText}
            genres={genres}
            selectedGenres={selectedGenres}
            setSelectedGenres={setSelectedGenres}
            years={years}
            selectedYears={selectedYears}
            setSelectedYears={setSelectedYears}
            setSelectedType={setSelectedType}
            selectedType={selectedType}
            clear={clearFilters}
          />
          <List list={filteredList} />
        </div>
      </div>
    </Container>
  );
};

export default HomeView;
