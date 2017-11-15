/**
 * Created by WesleyWang on 10/12/2017.
 */
import React, { Component } from "react";
import "./noninteractiveRating.css";
import PropTypes from "prop-types";
import Star from "react-icons/lib/fa/star";

const StarContent = props => {
  const { active, activeColor, inActiveColor } = props;
  if (active) {
    return <Star className="small-product-star" style={{ color: activeColor }} />;
  } else {
    return <Star className="small-product-star" style={{ color: inActiveColor }} />;
  }
};

function generateArr(length) {
  const result = [];
  for (let i = 0; i < length; i++) {
    result.push(i);
  }
  return result;
}

const StarList = props => {
  const { activeColor, inActiveColor, starRange, starNumbers } = props;
  const listActiveStars = generateArr(starNumbers).map(index =>
    <span key={index}>
      <StarContent
        activeColor={activeColor}
        inActiveColor={inActiveColor}
        active={true}
      />
    </span>
  );
  const listInActiveStars = generateArr(starRange - starNumbers).map(index =>
    <span key={index}>
      <StarContent
        activeColor={activeColor}
        inActiveColor={inActiveColor}
        active={false}
      />
    </span>
  );
  return (
    <div style={{ display: "inline-block", marginLeft: 10 }}>
      <span>
        {listActiveStars}
      </span>
      <span>
        {listInActiveStars}
      </span>
    </div>
  );
};

class NonInteractiveRating extends Component {
  render() {
    const { starRange, starNumbers, activeColor, inActiveColor } = this.props;
    return (
        <div className="container">
          <div className="long-content">
            <span className="normal-font" tabIndex="1">Average rating</span>
            <StarList
              starRange={starRange}
              starNumbers={starNumbers}
              activeColor={activeColor}
              inActiveColor={inActiveColor}
            />
          </div>
        </div>
    );
  }
}

export default NonInteractiveRating;

NonInteractiveRating.propTypes = {
  starRange: PropTypes.number.isRequired,
  starNumbers: PropTypes.number.isRequired,
  activeColor: PropTypes.string.isRequired,
  inActiveColor: PropTypes.string.isRequired
};
