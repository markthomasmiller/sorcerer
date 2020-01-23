import React, { Component } from "react";
import styles from "./nonexistent/Path.module.scss";

class Counter extends Component {
  state = { count: 0 };

  // Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  // eiusmod tempor incididunt ut labore et dolore magna aliqua.
  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    const { count } = this.state;
    const { text } = this.props;
    return (
      <div className={styles.counter}>
        <div>The button has been clicked {count} times.</div>
        <button onClick={this.increment} className={styles.button}>
          {text}
        </button>
      </div>
    );
  }
}

export default Counter;
