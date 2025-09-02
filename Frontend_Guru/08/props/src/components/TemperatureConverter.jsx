import { Component } from "react";

export class TemperatureConverter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      celsius: 0,
      fahrenheit: 32,
    };
  }

  handleCelsiusChange = (event) => {
    const celsius = event.target.value;
    const fahrenheit = (celsius * 9) / 5 + 32;

    this.setState({ celsius, fahrenheit });
  };

  handleFahrenheitChange = (event) => {
    const fahrenheit = event.target.value;
    const celsius = ((fahrenheit - 32) * 5) / 9;

    this.setState({ fahrenheit, celsius });
  };

  render() {
    return (
      <div>
        <input
          type="number"
          value={this.state.celsius}
          onChange={this.handleCelsiusChange}
        />
        <input
          type="number"
          value={this.state.fahrenheit}
          onChange={this.handleFahrenheitChange}
        />
      </div>
    );
  }
}
