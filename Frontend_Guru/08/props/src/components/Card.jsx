import { Component } from "react";

// class component
export class Card extends Component {
  render() {
    return (
      <div className="card">
        <h1 className="card-title">{this.props.title}</h1>
        <p>{this.props.children}</p>
      </div>
    );
  }
}

/* functial component 

const Card = ({ title, children }) => {
  return (
    <div className="card">
      <h1 className="card-title">{title}</h1>
      <p>{children}</p>
    </div>
  );
};
*/