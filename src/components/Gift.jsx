import React, { Component } from "react";

class Gift extends Component {
  constructor() {
    super();
    this.state = { person: "", present: "" };
  }
  render() {
    return (
      <div>
        <form>
          <label>Person </label>
          <input
            className="input-person"
            onChange={(evt) => this.setState({ person: evt.target.value })}
          />
          <label>Present </label>
          <input
            className="input-present"
            onChange={(evt) => this.setState({ present: evt.target.value })}
          />
        </form>
        <button
          className="btn-remove"
          onClick={() => this.props.removeGift(this.props.gift.id)}
        >
          remove gift
        </button>
      </div>
    );
  }
}

export default Gift;
