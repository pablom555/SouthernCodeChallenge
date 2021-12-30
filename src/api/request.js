import { BASE_URL, API_KEY } from "../config/constant";

const createUrl = (base, path, apiKey) => `${base}${path}${apiKey}`;

export const getMarsRoverRequest = (
  rover = "curiosity",
  camera = "all",
  page = 1,
  sol = null,
  earth = null
) => {
  const datePicture = earth ? `earth_date=${earth}` : `sol=${sol}`;
  const cameraPicture = camera && camera !== "all" ? `&camera=${camera}` : "";
  return [
    createUrl(
      BASE_URL,
      `${rover}/photos?${datePicture}${cameraPicture}&page=${page}`,
      `&api_key=${API_KEY}`
    ),
    {
      method: "GET",
    },
  ];
};

const request = (url, options) => {
  return fetch(url, options);
};

export default request;
