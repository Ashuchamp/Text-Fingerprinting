import React from 'react';
import './App.css';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom';

import {
	Navbar,
	Nav,
	NavDropdown,
	Form,
	FormControl,
	Button
} from 'react-bootstrap';

import Home from './Home.js';
import About from './About.js';
import Demo from './Demo.js';

import Logo from './logo.svg';

function App() {
	return (
		<Router>
			<div>
				<Navbar bg="light" expand="lg">
  					<Navbar.Brand href="#home">
						<img
							src={ Logo }
							width="30"
							height="30"
							className="d-inline-block align-top"
							alt="Writeprint Logo"
						/>{' '}
						Writeprint
					</Navbar.Brand>
  						<Navbar.Toggle aria-controls="basic-navbar-nav" />
  						<Navbar.Collapse id="basic-navbar-nav">
    						<Nav className="mr-auto">
      							<Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
      							<Nav.Link href="#demo"><Link to="/demo">Demo</Link></Nav.Link>
								<Nav.Link href="#about"><Link to="/about">About</Link></Nav.Link>
      							<NavDropdown title="More" id="basic-nav-dropdown">
        							<NavDropdown.Item href="#action/3.1">For Developers</NavDropdown.Item>
        							<NavDropdown.Item href="#action/3.2">Source Code</NavDropdown.Item>
        						<NavDropdown.Divider />
        						<NavDropdown.Item href="#action/3.4">Team</NavDropdown.Item>
      						</NavDropdown>
    					</Nav>
  					</Navbar.Collapse>
				</Navbar>
				<Switch>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/demo">
						<Demo />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
