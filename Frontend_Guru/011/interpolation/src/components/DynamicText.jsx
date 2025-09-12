import { Component } from "react";

export class DynamicText extends Component {
  state = {
    message: "Hello, world!",
  };

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({ message: "Goodbye, world!" });
    }, 5000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    return <h1>{this.state.message}</h1>
  }
}
