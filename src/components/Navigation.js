import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
 

const style = {
  borderRadius: 3,
  border: 0,
  color: 'black',
  height: 30,
  padding: '2px 9px',
  marginRight: '10px',
  textDecoration: 'none',
};

class Navigation extends Component {
    render() {
            return (
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav  ml-auto">
                                <NavLink to="/" style={style} activeClassName="active" id="nav2">System Data</NavLink>
                                <NavLink to="/system diagnosticsmanager" style={style} activeClassName="active" id="nav2">System Diagnostics Manager</NavLink>
                                <NavLink to="/systemstate" style={style} activeClassName="active" id="nav2">System State</NavLink>
                            </div>
                        </div>
                    </nav>
                </div>
            );
    }

}
 
export default Navigation;
