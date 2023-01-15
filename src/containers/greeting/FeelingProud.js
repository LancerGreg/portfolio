import React, { Component } from "react";

class FeelingProud extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        <img class="gif-fill-proud" src={require(`../../assests/images/computer-working.gif`)} alt="IT working" />
        {/* TODO: animated poligons */}
        {/* <svg width="0" height="0">
          <defs>
            <clipPath id="gifFillProudClip">
              <polygon points="400,50 400,320, 140,300" />
              <polygon points="450,10 500,200 600,100" />
              <polygon points="150,10 100,200 300,100" />
            </clipPath>
          </defs>
        </svg> */}
      </div>
    );
  }
}

export default FeelingProud;
