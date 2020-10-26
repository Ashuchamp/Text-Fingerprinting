import React from 'react';
import './App.css';

import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';

import {
	Navbar,
	Nav,
	NavDropdown,
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
      							<Nav.Link href="/">Home</Nav.Link>
      							<Nav.Link href="/demo">Demo</Nav.Link>
								<Nav.Link href="/about">About</Nav.Link>
      							<NavDropdown title="More" id="basic-nav-dropdown">
        							<NavDropdown.Item>For Developers</NavDropdown.Item>
        							<NavDropdown.Item>Source Code</NavDropdown.Item>
        						<NavDropdown.Divider />
        						<NavDropdown.Item>Team</NavDropdown.Item>
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
