import React from "react";

import { shallow } from "enzyme";
import data from "../../tests/testData";
import Albums from "./Albums";

describe("<Albums/> tests", () => {
  it("Renders all elements", () => {
    const wrapper = shallow(<Albums albums={data.entry} />);
    expect(wrapper.find("SingleAlbum")).toHaveLength(data.entry.length);
  });
  it("Renders `No results` when no albums", () => {
    const wrapper = shallow(<Albums albums={[]} />);
    expect(wrapper.find(".alert").text().includes("no results")).toEqual(true);
  });
});
