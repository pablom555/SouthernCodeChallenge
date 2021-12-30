import React, { useEffect, useMemo, useState } from "react";
import SelectCustom from "./SelectCustom";
import { roverOptions, cameraOptions } from "../config/constant";
import RadioCustom from "./RadioCustom";
import InputCustom from "./InputCustom";

const FilterImage = ({ initFilter, setFilter }) => {
  const [rover, setRover] = useState(initFilter.rover);
  const [camera, setCamera] = useState(initFilter.camera);
  const [isSol, setIsSol] = useState(false);
  const [isEarth, setIsEarth] = useState(true);
  const [sol, setSol] = useState(initFilter.sol);
  const [earth, setEarth] = useState(initFilter.earth);

  const cameraOptionsSelected = useMemo(
    () =>
      roverOptions
        .find((option) => option.value === rover)
        .camera.map((item) =>
          cameraOptions.find((option) => option.value === item)
        ),
    [rover]
  );

  useEffect(() => {
    setCamera(cameraOptionsSelected[0].value);
  }, [cameraOptionsSelected]);

  useEffect(() => {
    setFilter((prev) => {
      return {
        rover,
        camera,
        sol: isSol ? sol : null,
        earth: isEarth ? earth : null,
      };
    });
  }, [rover, camera, isSol, isEarth, sol, earth]);

  return (
    <div className="flex flex-col gap-4 flex-wrap justify-center sm:flex-row">
      <SelectCustom
        label="Rover"
        options={roverOptions}
        value={rover}
        setValue={setRover}
      />
      <SelectCustom
        label="Camera"
        options={cameraOptionsSelected}
        value={camera}
        setValue={setCamera}
      />
      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-end">
        <div className="flex flex-col justify-end ">
          <RadioCustom
            text="Sol"
            value={isSol}
            onChange={(value) => {
              setIsSol(value);
              setIsEarth(!value);
            }}
          />

          <RadioCustom
            text="Earth"
            value={isEarth}
            onChange={(value) => {
              setIsEarth(value);
              setIsSol(!value);
            }}
          />
        </div>

        {isSol && (
          <InputCustom
            type="number"
            text="Martian Sol"
            value={sol}
            setValue={setSol}
          />
        )}
        {isEarth && (
          <InputCustom
            type="date"
            text="Earth Date"
            value={earth}
            setValue={setEarth}
          />
        )}
      </div>
    </div>
  );
};

export default FilterImage;
