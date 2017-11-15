/**
 * Created by WesleyWang on 10/12/2017.
 */
import React, { Component } from "react";
import "./waterfall.css";
import { CSSGrid, layout, SpringGrid, measureItems, makeResponsive  } from 'react-stonecutter';
const Grid = makeResponsive(measureItems(CSSGrid), {
  maxWidth: 1920,
  minPadding: 100
});


const MyComponent = ({datum}) => {
  return (
    <div className='grid-item' style={{background:'green', height: datum.id %2 !== 0 ? 100 : 300}}>
      {datum.name}<br/>
      {datum.name}<br/>
      {datum.name}<br/>
    </div>
  )
}

class Waterfall extends Component {
  render() {
    const data = [];
    for(let i = 0; i < 10; i++){
      data.push({id: i, name: `user ${1000000*i}`})
    }
    const { starRange, starNumbers, activeColor, inActiveColor } = this.props;
    return (
      <Grid
        component="ul"
        columnWidth={110}
        gutterWidth={5}
        gutterHeight={5}
        layout={layout.pinterest}
        duration={800}
        easing="ease-out"
        >
        {data.map((datum) => (
          <li key={datum.id} className="grid">
            <MyComponent datum={datum} />
          </li>
        ))}
      </Grid>
    );
  }
}

export default Waterfall;
