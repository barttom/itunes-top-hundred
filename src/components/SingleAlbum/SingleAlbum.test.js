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
  it("Display title correctly", () => {
    const wrapper = shallow(<SingleAlbum album={mockProps} />);
    expect(
      wrapper
        .find("li")
        .text()
        .trim()
    ).toMatch(mockProps.title.label);
  });
});
