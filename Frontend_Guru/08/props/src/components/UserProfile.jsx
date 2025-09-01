import { Component } from "react";
// class component
export class UserProfile extends Component {
  render() {
    return (
      <h2>
        Ім'я: {this.props.name}, Вік: {this.props.age}, Електронна пошта: {this.props.email}
      </h2>
    );
  }
}

/* Functional component 
function UserProfile({name, age, email}) {
    return <h2> Ім'я: {name}, Вік: {age}, Електронна пошта:{email}</h2>
}
*/
