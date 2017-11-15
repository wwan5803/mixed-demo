import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/index";
import PropTypes from "prop-types";

class Actions extends Component {
  constructor(props) {
    super(props);
    this.state = { content: "" };
  }
  add = content => {
    console.log(content);
    this.props.dispatch(addTodo(content));
  };

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={e => this.setState({ content: e.target.value })}
        />
        <button onClick={() => this.add(this.state.content)}>Add</button>
      </div>
    );
  }
}

export default connect()(Actions);

Actions.propTypes = {};
