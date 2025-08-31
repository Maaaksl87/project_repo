import { Component } from "react";

export class ButtonClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      clicks: prevState.clicks + 1,
    }));
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.clicks === 0 ? "Click Me" : `Clicks: ${this.state.clicks}`}
      </button>
    );
  }
}
