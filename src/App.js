import React, { Component, Fragment } from "react";
import Navbar from "./components/layout/Nabar";
import Users from "./components/users/Users";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar></Navbar>
        <div className='container'>
          <Users></Users>
        </div>
      </div>
    );
  }
}

export default App;
