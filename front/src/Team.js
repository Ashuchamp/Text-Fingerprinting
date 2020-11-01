import React from 'react';
import {
    Card,
    Button,
    CardDeck
} from 'react-bootstrap';

export default function Demo() {
    return (
        <div style={{
			margin: 'auto',
		}}>
			<div style={{
				padding: '60px',
				textAlign: 'center',
				fontSize: '30px',
			}}>
				<h1>Team</h1>
			</div>

			<div style={{
				padding: '60px',
				textAlign: 'center',
				fontSize: '30px',
			}}>
                <CardDeck>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Daniel Pyon</Card.Title>
                        <Card.Text>
                            Backend software, ML, and training + validation.
                        </Card.Text>
                        <Button href="https://github.com/danielpyon" target="_blank" variant="primary">Github</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Ajay Rajasekaran</Card.Title>
                        <Card.Text>
                            Project Manager, Feature Engineering
                        </Card.Text>
                        <Button href="https://github.com/s-arajasekaran" target="_blank" variant="primary">Github</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Aaryan Jain</Card.Title>
                        <Card.Text>
                            UI/UX Design, Frontend Lead
                        </Card.Text>
                        <Button href="https://github.com/s-aajain" target="_blank" variant="primary">Github</Button>
                    </Card.Body>
                </Card>    
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Muhammad Masood</Card.Title>
                        <Card.Text>
                            QA, Testing, Documentation
                        </Card.Text>
                        <Button href="https://github.com/s-mmasood" target="_blank" variant="primary">Github</Button>
                    </Card.Body>
                </Card>
                </CardDeck>
            </div>
		</div>
    );
}