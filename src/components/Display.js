import { Component } from "react";
import UsersF from "./SingersFunction";
import UsersC from "./SingersClass";

class Display extends Component {
  render() {
    return (
      <div>
        <h1>Musiciens</h1>
        <UsersF name="Eric Clapton" age="74" />
        <UsersF name="Jimi hendrix" age="27" />
        <UsersF name="David Gilmour" age="73" />
        <UsersF name="Carlos Santana" age="71" />
        <hr />
        <UsersC name="Eric Clapton" age="74" />
        <UsersC name="Jimi hendrix" age="27" />
        <UsersC name="David Gilmour" age="73" />
        <UsersC name="Carlos Santana" age="71" />
      </div>
    );
  }
}
export default Display;
