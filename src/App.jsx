// import React from 'react';
import React, { Component } from 'react';
import './App.css';
// import Header from './Components/Header.jsx';
import { Header } from './Components/Header.jsx';
// import {Header,Logo} from './Components/Header.jsx';
import Footer from './Components/Footer.jsx'
// import AppRouter from './config/router';
// import Falto from './Components/falto.jsx'
// import BasicTextFields from './Components/input.jsx'
// import Child from './Components/Child';
// import { connect } from 'react-redux';
// import {set_data} from './store/action/index'





class App extends Component {
  constructor() {
    super()
    this.state = {
      name: "Yahiya Asif",
      email: "muhammadyahiya166@gmail.com"
    }
  }
  // 
  render() {
    return (
      <div>
        <Header />
        <br />
        <center>
          <h2>My name is " {this.state.name} " </h2>
          <h4>My email is "{this.state.email}" </h4>
          <h4>"I am a developer and freelancer" </h4>
        </center>
        <br />
        <br />
        <Footer />
      </div>
    )
  }
}


export default App;