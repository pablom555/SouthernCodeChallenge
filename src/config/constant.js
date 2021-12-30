import moment from "moment";

export const BASE_URL = "https://api.nasa.gov/mars-photos/api/v1/rovers/";
export const API_KEY = "LPeVXD6JXuV2A2Nzc673Xdr6uvD1zyP4f7sctb4w";

export const initFilter = {
  rover: "curiosity",
  camera: "all",
  sol: 1000,
  earth: moment().format("YYYY-MM-DD"),
};

export const roverOptions = [
  {
    value: "curiosity",
    text: "Curiosity",
    camera: [
      "all",
      "fhaz",
      "rhaz",
      "mast",
      "chemcam",
      "mahli",
      "mardi",
      "navcam",
    ],
  },
  {
    value: "opportunity",
    text: "Opportunity",
    camera: ["all", "fhaz", "rhaz", "navcam", "pancam", "minites"],
  },
  {
    value: "spirit",
    text: "Spirit",
    camera: ["all", "fhaz", "rhaz", "navcam", "pancam", "minites"],
  },
];

export const cameraOptions = [
  { value: "all", text: "All Cameras" },
  { value: "fhaz", text: "Front Hazard Avoidance Camera" },
  { value: "rhaz", text: "Rear Hazard Avoidance Camera" },
  { value: "mast", text: "Mast Camera" },
  { value: "chemcam", text: "Chemistry and Camera Complex" },
  { value: "mahli", text: "Mars Hand Lens Imager" },
  { value: "mardi", text: "Mars Descent Imager" },
  { value: "navcam", text: "Navigation Camera" },
  { value: "pancam", text: "Panoramic Camera" },
  {
    value: "minites",
    text: "Miniature Thermal Emission Spectrometer (Mini-TES)",
  },
];
