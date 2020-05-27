import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  renderTags() {
    if (this.state.tags.length == 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  //binding alternative
  //   constructor() {
  //     super();
  //     this.handleIncrement=this.handleIncrement.bind(this);
  //   }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    if (this.state.count > 0) this.setState({ count: this.state.count - 1 });
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  square = () => {
    this.setState({ count: this.state.count * this.state.count });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>
        <button
          onClick={this.handleDecrement}
          className="btn btn-secondary btn-sm"
        >
          -
        </button>
        <button onClick={this.reset} className="btn btn-secondary btn-sm">
          Reset
        </button>
        <button onClick={this.square} className="btn btn-secondary btn-sm">
          Square
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    if (this.state.count == 0) {
      classes += "warning";
    } else {
      classes += "primary";
    }
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    if (count == 0) {
      return "Zero";
    }
    return count;
  }
}

export default Counter;
