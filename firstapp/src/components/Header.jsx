import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';
import '../index.css';

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <Link to="/" className="link">Home</Link>
            </li>
            <li className="nav-item">
                <Link to="/registration" className="link">Registration</Link>
            </li>
            <li className="nav-item">
                <Link to="/login" className="link">Login </Link>
            </li>
            <li className="nav-item">
                <Link to="/contactus" className="link">Contactus</Link>
            </li>
          </ul>
          <form className="form-inline my-5 my-lg-0">
            <input className="form-control mr-sm-2" type="search"  placeholder="Search" aria-label="Search" />
            <button className="btn btn-warning my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
      </div>
    )
  }
}
