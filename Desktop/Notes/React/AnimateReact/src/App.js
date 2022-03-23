import React, { Component } from "react";
import Transition from "react-transition-group/cjs/Transition";
import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    ModalIsOpen: false,
    showBlock: false,
  };

  showModal = () => {
    this.setState({
      ModalIsOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      ModalIsOpen: false,
    });
  };

  toggleBlock = () => {
    this.setState((prevState) => ({
      showBlock: !prevState.showBlock,
    }));
  };

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        {/* <button className="Button" onClick={this.toggleBlock}>
          Toggle
        </button>
        <br></br>
        <br></br> */}

        {/* {this.state.showBlock ? ( */}

        {/* This is how animation can be done using react animate module */}

        {/* <Transition mountOnEnter unmountOnExit in={this.state.showBlock} timeout={500}>
          {(state) => (
            <div
              style={{
                margin: "auto",
                backgroundColor: "red",
                width: 100,
                height: 100,
                transition: 'opacity 0.5s ease-out',
                opacity: state === "exiting" ? 0 : 1,
              }}
            ></div>
          )}
        </Transition> */}

        {/* ) : null} */}

        {/* <br></br> */}

        
        <Modal show={this.state.ModalIsOpen} closed={this.closeModal} />

        {this.state.ModalIsOpen ? <Backdrop show /> : null}

        <button className="Button" onClick={this.showModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
