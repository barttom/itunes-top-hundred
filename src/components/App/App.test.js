import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import data from "../../tests/testData";

describe("<App/> tests", () => {
  it("renders text `Loading` when don't have data", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".loader")).toHaveLength(1);
    expect(
      wrapper
        .find(".loader")
        .text()
        .toLowerCase()
        .includes("loading")
    ).toEqual(true);
  });
  it("Renders <Albums/> when have data", () => {
    const wrapper = shallow(<App />);
    wrapper.setState({
      albums: data.entry,
      cachedAlbums: data.entry
    });
    expect(wrapper.find("Albums")).toHaveLength(1);
  });
});
