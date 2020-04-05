import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App", () => {
  const app = shallow(<App />);

  it("should renders coreectly", () => {
    expect(app).toMatchSnapshot();
  });

  it("should initializes state with empty list", () => {
    expect(app.state().giftList).toEqual([]);
  });

  describe("when clicking add gift button", () => {
    const id = 1;
    beforeEach(() => {
      app.find(".btn-add").simulate("click");
    });

    afterEach(() => {
      app.setState({ giftList: [] });
    });

    it("should add  gift to state", () => {
      expect(app.state().giftList).toEqual([{ id }]);
    });

    it("should creates a Gift component", () => {
      expect(app.find("Gift").exists()).toBe(true);
    });

    describe("when clicking remove gift button", () => {
      beforeEach(() => {
        app.instance().removeGift({ id });
      });

      afterEach(() => {
        app.setState({ giftList: [] });
      });

      it("should add  gift to state", () => {
        expect(app.state().giftList).toEqual([{ id: 1 }]);
      });

      it("should creates a Gift component", () => {
        expect(app.find("Gift").exists()).toBe(true);
      });
    });
  });
});
