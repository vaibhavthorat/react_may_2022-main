// import React from "react";
// export default function Greet(props) {
//   return (
//     <div>
//       Hello {props.name} , {props.msg}
//     </div>
//   );
// }

import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Greet extends Component {
  render() {
    return (
      <div>
        Hello {this.props.name} , {this.props.msg} <br />
        {this.props.children}
      </div>
    );
  }
}
Greet.propTypes = {
  name: PropTypes.string.isRequired,
  msg: PropTypes.string,
  children: PropTypes.element	
};
Greet.defaultProps = {	
  msg: 'this is my default message'	
}