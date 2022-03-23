import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    ModalIsOpen: false
  }

  showModal = () => {
    this.setState({
      ModalIsOpen:true
    })
  }

  closeModal = () => {
    this.setState({
      ModalIsOpen:false
    })
  }
  
  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <Modal show={this.state.ModalIsOpen} closed={this.closeModal}/>
        <Backdrop show={this.state.ModalIsOpen} closed={this.closeModal}/>
        <button className="Button" onClick={this.showModal}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
