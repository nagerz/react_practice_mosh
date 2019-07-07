import React, { Component } from "react";

// Stateless Funcitonal Component Option (shortcut for creating = 'sfc' + tab)

const NavBar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill babdge-secondary">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

// Class componant (shortcut for creating = 'cc' + tab)

// class NavBar extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <a className="navbar-brand" href="#">
//           Navbar{" "}
//           <span className="badge badge-pill babdge-secondary">
//             {this.props.totalCounters}
//           </span>
//         </a>
//       </nav>
//     );
//   }
// }

export default NavBar;
