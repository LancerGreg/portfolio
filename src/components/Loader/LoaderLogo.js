import React from "react";
import "./LoaderLogo.css";

class LogoLoader extends React.Component {
  render() {
    const theme = this.props.theme;
    return (
      <svg class="svg-loader" viewBox="0 0 1320 300">
        <text class="svg-loader__logo" x="50%" y="50%" dy=".35em" text-anchor="middle">
          VR Greg
        </text>
      </svg>
    );
  }
}

export default LogoLoader;
