import React, { useState, useEffect } from "react";
import moment from "moment";
import useMarsRover from "../Hooks/useMarsRover";
import FilterImage from "./FilterImage";
import Title from "./Title";
import ImagesContainer from "./ImagesContainer";
import Spinner from "./Spinner";
import { initFilter } from "../config/constant";

const MarsRoverGallery = () => {
  const [filter, setFilter] = useState(initFilter);
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);

  const [marsRovers, error, loading] = useMarsRover(
    filter.rover,
    filter.camera,
    page,
    filter.sol,
    filter.earth
  );

  // function that runs when user scrolls
  const handleScroll = (e) => {
    const { scrollHeight, scrollTop, clientHeight } = e.target.scrollingElement;
    const isBottom = scrollHeight - scrollTop <= clientHeight;
    if (isBottom && !loading) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (page === 1 && marsRovers?.photos && !loading) {
      setImages(marsRovers.photos);
    }
    if (page > 1 && marsRovers?.photos && !loading) {
      setImages((prev) => {
        return [...prev, ...marsRovers.photos];
      });
    }
  }, [marsRovers, loading]);

  useEffect(() => {
    setImages([]);
    setPage(1);
  }, [filter]);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="p-8 pb-24 flex flex-col items-center justify-center ">
      <Title text="Mars Rover" />
      <FilterImage initFilter={initFilter} setFilter={setFilter} />

      <div className="pt-2 flex flex-col items-center justify-center">
        <ImagesContainer data={images} />
        {!loading && images.length === 0 && <Title text="No Pictures" />}
      </div>

      {loading && (
        <div className="pb-12">
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default MarsRoverGallery;
