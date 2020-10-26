import React from 'react';
import {
    Form,
    Button
} from 'react-bootstrap';

export default class StandardAuthor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const body = {
            text: this.state.value
        }
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        const request = new Request('http://writeprint.herokuapp.com/predict_proba', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body)
        });
        fetch(request)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            }
        );
    }

    render() {
        return (
            <>
                <Form style={{ margin: '10px' }} onSubmit={this.handleSubmit}>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Text to compare against our authors</Form.Label>
                        <Form.Control as="textarea" rows={3} value={this.state.value} onChange={this.handleChange} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </>
        );
    }
}