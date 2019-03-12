import React, { Component } from "react";
import "./App.css";

import Header from "./shared/Header/Header.Component";
import Main from "./shared/Main/Main.Component";
import Footer from "./shared/Footer/Footer.Component";

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
