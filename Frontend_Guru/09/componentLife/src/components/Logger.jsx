import { Component } from "react";

class Logger extends Component {
  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate (компонент оновлений)");
  }
  componentWillUnmount() {
    console.log(" componentWillUnmount (компонент демонтується)");
  }

  render() {
    console.log("Logger: render");
    return <div>Logger працює. Подивіться консоль для повідомлень.</div>;
  }
}

export default Logger;
