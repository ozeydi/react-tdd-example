import React from "react";
import { shallow } from "enzyme";
import Gift from "./Gift";

describe("Gift component", () => {
  const mockRemove = jest.fn();
  const id = 1;
  const props = { gift: { id: 1 }, removeGift: mockRemove };
  const gift = shallow(<Gift {...props} />);

  it("renders coreectly", () => {
    expect(gift).toMatchSnapshot();
  });

  it("initializes state with a person and present", () => {
    expect(gift.state()).toEqual({ person: "", present: "" });
  });

  describe("when typing into the person input", () => {
    const person = "sister";

    beforeEach(() => {
      gift
        .find(".input-person")
        .simulate("change", { target: { value: person } });
    });

    it("should updates state", () => {
      expect(gift.state().person).toEqual(person);
    });
  });

  describe("when typing into the present input", () => {
    const present = "flower";

    beforeEach(() => {
      gift
        .find(".input-present")
        .simulate("change", { target: { value: present } });
    });

    it("should updates state", () => {
      expect(gift.state().present).toEqual(present);
    });
  });

  describe("when clicking the Remove gift button", () => {
    const present = "flower";

    beforeEach(() => {
      gift.find(".btn-remove").simulate("click");
    });

    it("calls the removegift callback", () => {
      expect(mockRemove).toHaveBeenCalledWith(id);
    });
  });
});
