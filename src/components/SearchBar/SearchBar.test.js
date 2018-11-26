import React from "react";
import SearchBar from "./SearchBar";
import { shallow, mount } from "enzyme";

describe("SearchBar tests", () => {
  it("Witing text changed state", () => {
    const wrapper = shallow(<SearchBar onSearch={jest.fn()} />);
    const fieldValue = "dunno";
    wrapper.find(".search-bar input").simulate("change", {
      target: {
        name: "textFilter",
        value: fieldValue
      }
    });
    expect(wrapper.state("textFilter")).toMatch(fieldValue);
  });
});
