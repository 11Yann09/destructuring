import { Component } from "react";

class UsersC extends Component {
  render() {
    const { name, age } = this.props;
    return (
      <div>
        <p>Chanteur: {name}</p>
        <p>Age : {age}</p>
      </div>
    );
  }
}

export default UsersC;
