import React from "react";
import App from "./App";
import { shallow, mount } from "enzyme";
import data from "../../tests/testData";

describe("<App/> tests", () => {
  const mockState = {
    albums: data.entry,
    cachedAlbums: data.entry,
    updateDate: new Date(data.updated.label)
  };
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
    wrapper.setState(mockState);
    expect(wrapper.find("Albums")).toHaveLength(1);
  });
  it("Show update date", () => {
    const wrapper = shallow(<App />);
    wrapper.setState(mockState);
    expect(
      wrapper
        .find(".suffix")
        .text()
        .includes(new Date(data.updated.label).toLocaleDateString())
    );
  });
  describe("text filter flow", () => {
    const wrapper = mount(<App />);
    wrapper.setState(mockState);

    it("After pressing button, filters works correctly", () => {
      wrapper.find(".search-bar input").simulate("change", {
        target: {
          name: "textFilter",
          value: "pentato"
        }
      });
      wrapper.find(".search-bar button").simulate("click");
      wrapper.update();
      expect(wrapper.find("li")).toHaveLength(2);
    });
    it("After removing text, show all albums", () => {
      wrapper.update();
      wrapper.find(".search-bar input").simulate("change", {
        target: {
          name: "textFilter",
          value: ""
        }
      });
      expect(wrapper.find("li")).toHaveLength(data.entry.length);
    });
    it("After pressing Enter, filters works correctly", () => {
      wrapper.find(".search-bar input").simulate("change", {
        target: {
          name: "textFilter",
          value: "pentato"
        }
      });
      wrapper.find(".search-bar input").simulate("keyPress", { key: "Enter" });
      wrapper.update();
      expect(wrapper.find("li")).toHaveLength(2);
    });
  });
});
