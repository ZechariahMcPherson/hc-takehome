import React, { Component } from "react";
import "./App.css";

import Header from "./sharedComponents/Header/Header.Component";
import Main from "./sharedComponents/Main/Main.Component";
import Footer from "./sharedComponents/Footer/Footer.Component";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
          <Main />
          <Footer />
        </header>
      </div>
    );
  }
}

export default App;
