import React from 'react';
import {
	CardDeck,
	Card,
	Button
} from 'react-bootstrap';

export default function Home() {
	return (
		<div style={{
			margin: 'auto',
		}}>
			<div style={{
				padding: '60px',
				textAlign: 'center',
				fontSize: '30px',
			}}>
				<h1>Writeprint</h1>
				<p>Measure and compare your writing to famous authors</p>
			</div>


			<div style={{
				padding: '60px',
				textAlign: 'left',
				fontSize: '30px',
				background: 'linear-gradient(90deg, rgba(130,125,210,1) 0%, rgba(3,207,249,1) 100%)',
				color: 'white',
			}}>
				<h1>Intuitive demo</h1>
				<p>
					Get started with our web-based demo <a style={{color: 'turquoise', textDecoration: 'none'}} href="/demo">here</a>
				</p>
			</div>
			
			
			<div style={{
				padding: '60px',
				textAlign: 'center',
				fontSize: '30px',
				background: 'white',
				color: 'black'
			}}>
				<h1>Use Cases</h1>
				<p>
					Wide range of possible users, including
				</p>
				<div>
					<CardDeck>
						<Card style={{ width: '100%' }}>
							<Card.Body>
								<Card.Title>Researchers</Card.Title>
								<Card.Text>
									Researchers who want to find relationships between authors, or conduct studies on writing fingerprints can use our tools.
								</Card.Text>
							</Card.Body>
						</Card>
						<Card style={{ width: '100%' }}>
							<Card.Body>
								<Card.Title>Teachers/Librarians</Card.Title>
								<Card.Text>
									Teachers and librarians can use this to teach a class or show kids.
								</Card.Text>
							</Card.Body>
						</Card>
						<Card style={{ width: '100%' }}>
							<Card.Body>
								<Card.Title>Activists/Dissidents</Card.Title>
								<Card.Text>
									Political activists can check how much of a writing fingerprint they leave behind, to stay anonymous.
								</Card.Text>
							</Card.Body>
						</Card>
					</CardDeck>
				</div>
			</div>
			
			
			<div style={{
				padding: '60px',
				textAlign: 'left',
				fontSize: '30px',
				background: 'linear-gradient(90deg, rgba(130,125,210,1) 0%, rgba(3,207,249,1) 100%)',
				color: 'white'
			}}>
				<h1>Current Authors</h1>
				<p>
					<ul>
						<li>Leo Tolstoy</li>
						<li>Dr. Seuss</li>
						<li>Maya Angelou</li>
						<li>JK Rowling</li>
						<li>William Shakespeare</li>
						<li>Mark Twain</li>
						<li>George Orwell</li>
						<li>Ernest Hemingway</li>
						<li>Harper Lee</li>
					</ul>
				</p>
			</div>
		</div>
	);
}
