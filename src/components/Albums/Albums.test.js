import React from "react";

import { shallow } from "enzyme";
import data from "../../tests/testData";
import Albums from "./Albums";

describe("<Albums/> tests", () => {
  it("Renders all elements", () => {
    const wrapper = shallow(<Albums albums={data.entry} />);
    expect(wrapper.find("SingleAlbum")).toHaveLength(data.entry.length);
  });
});
