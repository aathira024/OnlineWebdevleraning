import React, { Component } from "react";
import "./counter.css";

class LifeCycleCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };

    this.onAdd = this.onAdd.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.value !== this.state.value) {
      return true;
    }
    return false;
  }

  onAdd() {
    this.setState({ value: this.state.value + 1 });
  }

  onSubstract = () => {
    this.setState({ value: this.state.value - 1 });
  };

  render() {
    console.log("I am inside ");
    return (
      <div className="counter-container">
        <button className="btn" onClick={this.onAdd}>
          Add
        </button>

        <h1 className="value">{this.state.value}</h1>
        <button className="btn" onClick={() => this.onSubstract()}>
          Subtract
        </button>
      </div>
    );
  }
}

export default LifeCycleCounter;
