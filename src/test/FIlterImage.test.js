/**
 * @jest-environment jsdom
 */

import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
import FilterImage from "../Components/FilterImage";

export const initFilter = {
  rover: "curiosity",
  camera: "all",
  sol: 1000,
  earth: "2021-12-12",
};

describe("Test FIlterImage Component", () => {
  let filterImage;
  const setFilterMock = jest.fn();

  beforeEach(() => {
    filterImage = render(
      <FilterImage initFilter={initFilter} setFilter={setFilterMock} />
    );
  });

  test("The user chooses Martial Sol", () => {
    const radioSol = filterImage.getByText("Sol");
    fireEvent.change(radioSol);

    expect(setFilterMock).toHaveBeenCalledTimes(1);
  });

  test("The user chooses Earth Day", () => {
    const earth = filterImage.getByText("Earth");
    fireEvent.change(earth);

    expect(setFilterMock).toHaveBeenCalledTimes(2);
  });
});
