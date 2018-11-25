import React from "react";

import { shallow } from "enzyme";
import data from "../../tests/testData";
import SingleAlbum from "./SingleAlbum";

describe("<SingleAlbum tets", () => {
  const mockProps = data.entry[0];

  it("Renders correctly", () => {
    const wrapper = shallow(<SingleAlbum album={mockProps} />);
    expect(wrapper.find("li")).toHaveLength(1);
  });
  it("Display title and artist correctly", () => {
    const wrapper = shallow(<SingleAlbum album={mockProps} />);
    expect(
      wrapper
        .find(".single-album__title")
        .text()
        .trim()
    ).toMatch(mockProps["im:name"].label);
    expect(
      wrapper
        .find(".single-album__artist")
        .text()
        .trim()
    ).toMatch(mockProps["im:artist"].label);
  });
  it("Link is not empty", () => {
    const wrapper = shallow(<SingleAlbum album={mockProps} />);
    expect(wrapper.find(".single-album a").prop("href")).toMatch(
      /(https?:\/\/[^\s]+)/g
    );
  });
});
