import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Gift from "./Gift";

class App extends Component {
  constructor() {
    super();
    this.state = {
      giftList: [],
    };
  }

  addGift = () => {
    const { giftList } = this.state;
    const ids = giftList.map((gift) => gift.id);
    const max_id = giftList.length > 0 ? Math.max(...ids) : 0;

    giftList.push({ id: max_id + 1 });
    this.setState({ giftList });
  };

  removeGift = (id) => {
    const giftList = this.state.giftList.filter((gift) => gift.id !== id);
    this.setState({ giftList });
  };
  render() {
    const { giftList } = this.state;
    return (
      <div>
        <h2>Gift Giver</h2>
        <div className="gift-list">
          {giftList.map((gift) => {
            return (
              <Gift key={gift.id} removeGift={this.removeGift} gift={gift} />
            );
          })}
        </div>
        <Button className="btn-add" onClick={this.addGift}>
          Add Gift
        </Button>
      </div>
    );
  }
}

export default App;
