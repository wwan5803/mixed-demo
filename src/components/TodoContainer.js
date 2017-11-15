import React, { Component } from "react";
import PropTypes from "prop-types";
import ShowTodoList from "./ShowTodoList";
import Footer from "./Footer";
import Actions from "./Actions";

class TodoContainer extends Component {
  render() {
    return (
      <div>
        <ShowTodoList />
        <Actions />
        <Footer />
      </div>
    );
  }
}

export default TodoContainer;

TodoContainer.propTypes = {};
