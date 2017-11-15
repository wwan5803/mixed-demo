import React, { Component } from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import { toggleTodo } from "../actions/index";

import PropTypes from "prop-types";

class ShowTodoList extends Component {
  constructor(props) {
    super(props);
  }

  toggle = id => {
    this.props.dispatch(toggleTodo(id));
  };

  render() {
    const { todos } = this.props;
    return (
      <div>
        {todos.map(todo =>
          <Todo key={todo.id} todo={todo} toggle={() => this.toggle(todo.id)} />
        )}
      </div>
    );
  }
}

export default connect(state => {
  console.log(state.visibilityFilter);
  switch (state.visibilityFilter) {
    case "ALL":
      return { todos: state.todos };
    case "COMPLETED":
      return { todos: state.todos.filter(t => t.completed) };
    case "PENDING":
      return { todos: state.todos.filter(t => !t.completed) };
    default:
      return { todos: state.todos };
  }
})(ShowTodoList);

ShowTodoList.propTypes = {};
