import React, { Component } from "react";
import { setStatus } from "../actions/index";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  selectStatus = status => {
      console.log(status)
    this.props.dispatch(setStatus(status));
  };
  render() {
    return (
      <div style={{ display: "inline-block" }}>
        <a href="#" onClick={()=>this.selectStatus("PENDING")}>
          Pending{" "}
        </a>
        <a href="#" onClick={()=>this.selectStatus("COMPLETED")}>
          Done{" "}
        </a>
        <a href="#" onClick={()=>this.selectStatus("ALL")}>
          All{" "}
        </a>
      </div>
    );
  }
}

export default connect()(Footer);

Footer.propTypes = {};
