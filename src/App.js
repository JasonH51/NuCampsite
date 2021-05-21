import React, { Component } from "react";
import Main from "./components/MainComponent";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

// import { Navbar, NavbarBrand } from "reactstrap";
// import Directory from "./components/DirectoryComponent";
// import { CAMPSITES } from "./shared/campsites";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

// <Navbar dark color="primary">
//   <div className="container">
//     <NavbarBrand href="/">NuCamp</NavbarBrand>
//   </div>
// </Navbar>
// <Directory campsites={this.state.campsites} />
