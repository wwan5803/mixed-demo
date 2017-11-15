import React, { Component } from "react";
import "./interactiveRating.css";
import PropTypes from "prop-types";
import Star from "react-icons/lib/fa/star";

const StarContent = props => {
  const { star, activeColor, inActiveColor } = props;
  return <Star className="product-star" style={{ color: star.active ? activeColor : inActiveColor }} />;
};

const StarList = props => {
  const {
    stars,
    activeColor,
    inActiveColor,
    logMouseEnter,
    logMouseLeave,
    selectStar
  } = props;
  const listStars = stars.map(star =>
    <span
      key={star.id}
      onMouseEnter={() => logMouseEnter(star.id)}
      onMouseLeave={() => logMouseLeave(star.id)}
      onClick={selectStar}
    >
      <StarContent
        activeColor={activeColor}
        inActiveColor={inActiveColor}
        star={star}
      />
    </span>
  );
  return (
    <div className="small-bottom-margin">
      {listStars}
    </div>
  );
};

const ApplyButton = props => {
  const { apply } = props;
  return <input className="apply-button" type="button" value="Apply" onClick={apply} />;
};

const Message = props => {
  return <div className="message">
    <p className="bold-font" tabIndex="1">Thanks for your rating!</p>
  </div>
};

class InteractiveRating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isApplied: !!0,
      stars: [],
      isSelected: !!0
    };
  }

  componentWillMount() {
    this.generateStars();
  }

  generateStars() {
    const { starRange } = this.props;
    const stars = [];
    for (let i = 0; i < starRange; i++) {
      const star = { id: i, active: !!0 };
      stars.push(star);
    }
    this.setState({ stars: stars });
  }

  toMap(arr) {
    const result = {};
    arr.forEach((val, key) => {
      result[key] = val;
    });
    return result;
  }

  toArray(obj) {
    const result = [];
    Object.keys(obj).forEach(key => {
      result.push(obj[key]);
    });
    return result;
  }

  logMouseEnter = id => {
    const result = this.toMap(this.state.stars);
    for (let i = 0; i < id + 1; i++) {
      result[i].active = !!1;
    }

    this.setState({ stars: this.toArray(result) });
  };

  logMouseLeave = id => {
    if (!this.state.isSelected) {
      const result = this.toMap(this.state.stars);
      for (let i = 0; i < this.state.stars.length; i++) {
        result[i].active = !!0;
      }
      this.setState({ stars: this.toArray(result) });
    }
  };

  selectStar = () => {
    this.setState(prevState => ({
      isSelected: !prevState.isSelected
    }));
  };

  apply = () => {
    this.setState({ isApplied: true });
  };

  render() {
    const {activeColor, inActiveColor} = this.props;
    return (
      <div className="container">
        {this.state.isApplied && <Message />}

        <div
          className={
            "content shadow " + (this.state.isApplied ? "disabled-button" : "")
          }
        >
          <div className="small-bottom-margin bold-font title" tabIndex="1">Rate this product</div>
          <StarList
            stars={this.state.stars}
            activeColor={activeColor}
            inActiveColor={inActiveColor}
            logMouseEnter={this.logMouseEnter}
            logMouseLeave={this.logMouseLeave}
            selectStar={this.selectStar}
          />
          <ApplyButton apply={this.apply} />
        </div>
      </div>
    );
  }
}

InteractiveRating.propTypes = {
  starRange: PropTypes.number.isRequired,
  activeColor: PropTypes.string.isRequired,
  inActiveColor: PropTypes.string.isRequired
};

export default InteractiveRating;
