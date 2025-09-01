import { Component } from "react";

export class UserProfile extends Component {
  render() {
    return <h2>Ім'я: {this.props.name}, Вік: {this.props.age}, Електронна пошта: {this.props.email}</h2>
  }
}
