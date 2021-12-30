import { useMemo } from "react";
import useApiResult from "./useApiResult";
import { getMarsRoverRequest } from "../api/request";

const useMarsRover = (rover, camera, page, sol, earth) => {
  const request = useMemo(
    () => getMarsRoverRequest(rover, camera, page, sol, earth),
    [rover, camera, page, sol, earth]
  );

  return useApiResult(request);
};

export default useMarsRover;
