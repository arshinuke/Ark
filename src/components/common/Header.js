import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Header = (loading) => {
  return (



  <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
    <button className="navbar-toggler navbar-toggler-right" type="button"
            data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <IndexLink to="/" activeClassName="active">Home</IndexLink>
    <Link to="/courses" activeClassName="active">Courses</Link>
    <Link to="/about" activeClassName="active">About</Link>
    <Link to={"/arkHome"} activeClassName="active">Ark Insurance</Link>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </nav>
);
};


Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
