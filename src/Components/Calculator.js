import React from "react";
import "./Styles/Calculator.css";

class Calculator extends React.Component {
  state = {
    cost: "",
    tip: "",
    total: "",
  };

  handleCost = (event) => {
    this.setState({
      cost: event.target.value,
    });
  };
  handleTip = (event) => {
    this.setState({
      tip: event.target.value,
    });
  };

  genTip = (event) => {
    event.preventDefault();
    let totaltip =
      parseFloat(this.state.cost) +
      parseFloat(this.state.cost * (this.state.tip / 100));
    this.setState({
      tips: totaltip,
    });
  };

  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <div className="title">
            <p>A simple tip calculator</p>
          </div>
          <div className="form">
            <form onSubmit={this.genTip}>
              <label>
                This is the cost:
                <input
                  type="text"
                  value={this.state.cost}
                  onChange={this.handleCost}
                />
              </label>{" "}
              <br />
              <label>
                This is the tip (%):
                <input
                  type="text"
                  value={this.state.tip}
                  onChange={this.handleTip}
                />
              </label>{" "}
              <br />
              <label>
                <p>This is the total: ${this.state.tips}</p>
              </label>
              <input type="submit" value="Submit" className="submit" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
