import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

const Navbarfunc = ({handleClick, isLoggedIn}) => (
  <div>
    {isLoggedIn ? (
      <div>
        <Navbar bg="light" expand="lg" sticky="top">
          <Navbar.Brand href="/home">Expresso.js</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          {/* The navbar will show these links after you log in */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/home" onClick={handleClick}>
                {' '}
                Home
              </Nav.Link>
              <Nav.Link href="/about-us">About Us</Nav.Link>
              <Nav.Link href="/all-coffee">Our Coffee</Nav.Link>
              <Nav.Link href="/cart">Cart</Nav.Link>

              <Nav.Link href="/" onClick={handleClick}>
                {' '}
                Log Out{' '}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    ) : (
      <div>
        <Navbar bg="light" expand="lg" sticky="top">
          <Navbar.Brand href="/">Expresso.js</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/" onClick={handleClick}>
                {' '}
                Home{' '}
              </Nav.Link>
              <Nav.Link href="/about-us">About Us</Nav.Link>
              <Nav.Link href="/allcoffee">Our Coffee</Nav.Link>
              <Nav.Link href="/cart">Cart</Nav.Link>

              <Nav.Link href="/sign-in">Sign In</Nav.Link>
              <Nav.Link href="/signup">Sign Up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )}
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbarfunc)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
