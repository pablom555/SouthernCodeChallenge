/**
 * @jest-environment jsdom
 */

import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import CardImage from "../Components/CardImage";

const item = {
  id: 424905,
  img_src:
    "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631300503690E01_DXXX.jpg",
};

test("renders content CardImge", () => {
  const cardImage = render(<CardImage key={item.id} item={item} />);

  expect(cardImage.container).toHaveTextContent(item.id);

  const image = cardImage.getByTestId("img");
  expect(image).toHaveAttribute("src", item.img_src);
  expect(image).toHaveAttribute("alt", "photo");
});
