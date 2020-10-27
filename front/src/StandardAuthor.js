import React from 'react';
import {
    Form,
    Button,
    Card,
    ListGroup,
    Alert
} from 'react-bootstrap';

export default class StandardAuthor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            results: [],
            error: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        if(this.state.value == '') {
            this.setState({
                error: true
            });
            return;
        }
        this.setState({
            error: false
        });
        const formData = new FormData();
        formData.append('text', this.state.value);
        const request = new Request('http://writeprint.herokuapp.com/predict_proba', {
            method: 'POST',
            body: formData
        });
        fetch(request)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    results: Object.entries(data).sort((a, b) => {
                        if(a[1] == b[1]) return 0;
                        return (a[1] > b[1]) ? -1 : 1;
                    })
                });
                console.log(this.state.results);
            }).catch((error) => {
                console.error('Error:', error);
            });
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

                {this.state.error && <Alert variant={'danger'}>Please add at least one word!</Alert>}

                <Card style={{ width: '18rem' }}>
                    <Card.Header>Results</Card.Header>
                    <ListGroup variant="flush">
                        { this.state.results.map((x, i) => <ListGroup.Item key={i}>{x[0]}: {(x[1] * 100).toFixed(2) + '%'}</ListGroup.Item>) }
                    </ListGroup>
                </Card>
            </>
        );
    }
}