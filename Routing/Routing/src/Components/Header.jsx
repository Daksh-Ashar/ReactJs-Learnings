import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'

export const Header = () => {
	return (
		<>
			<Navbar bg="dark" data-bs-theme="dark">
				<Container>
				<LinkContainer to="/"><Navbar.Brand>ABC</Navbar.Brand></LinkContainer>
					<Nav className="me-auto">
						<LinkContainer to="/home"><Nav.Link>Home</Nav.Link></LinkContainer>
						<LinkContainer to="/about"><Nav.Link>About</Nav.Link></LinkContainer>
						<LinkContainer to="/contact"><Nav.Link>Contact</Nav.Link></LinkContainer>
					</Nav>
				</Container>
			</Navbar>
		</>
	)
}