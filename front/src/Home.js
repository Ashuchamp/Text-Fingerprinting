import React from 'react';
import {
	ListGroup
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
				<ListGroup horizontal className="justify-content-center">
						<ListGroup.Item>Researchers</ListGroup.Item>
						<ListGroup.Item>Librarians/Teachers</ListGroup.Item>
						<ListGroup.Item>Activists and Dissidents</ListGroup.Item>
				</ListGroup>
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
