import React from 'react';
import {
    Button,
    Form,
    Card,
    ListGroup,
    Alert
} from 'react-bootstrap';

export default class CustomAuthor extends React.Component {
    constructor(props) {
      super(props);
      this.state = { values: [], test: '', results: [], error: false};
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleTestChange = this.handleTestChange.bind(this);
    }
  
    createUI(){
       return this.state.values.map((el, i) => 
           <div style={{marginTop: '10px'}} key={i}>
              <textarea value={el||''} onChange={this.handleChange.bind(this, i)} />
              <Button style={{ verticalAlign: 'top', marginLeft: '10px' }} onClick={this.removeClick.bind(this, i)}>Remove</Button>
           </div> 
       )
    }
  
    handleChange(i, event) {
       let values = [...this.state.values];
       values[i] = event.target.value;
       this.setState({ values });
    }

    handleTestChange(event) {
        this.setState({
            test: event.target.value
        })
    }

    addClick(){
      this.setState(prevState => ({ values: [...prevState.values, '']}))
    }
    
    removeClick(i){
       let values = [...this.state.values];
       values.splice(i,1);
       this.setState({ values });
    }
  
    handleSubmit(event) {
      event.preventDefault();
      if(this.state.test === '' || this.state.values.some(e => e === '')) {
        this.setState({
            error: true
        });
        return;
      }
      this.setState({
          error: false
      });
      const formData = new FormData();
      formData.append('text', this.state.values);
      formData.append('test', this.state.test);
      formData.append('user', 'user');
      const request = new Request('https://writeprint.herokuapp.com/predict_proba', {
          method: 'POST',
          body: formData
      });
      fetch(request)
          .then((response) => response.json())
          .then((data) => {
              this.setState({
                  results: Object.entries(data).sort((a, b) => {
                      if(a[1] === b[1]) return 0;
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
                    <Form.Label>Text to compare against authors</Form.Label>
                    <Form.Control as="textarea" rows={3} value={this.state.test} onChange={this.handleTestChange} />
                </Form.Group>
                <Button onClick={this.addClick.bind(this)}>Add more</Button>
                <Button style={{marginLeft: '10px'}} onSubmit={this.handleSubmit} variant="primary" type="submit">
                    Submit
                </Button>
                {this.createUI()}
            </Form>

            {this.state.error && <Alert variant={'danger'}>Please add at least one word!</Alert>}

            <Card style={{ margin: '10px', width: '18rem' }}>
            <Card.Header>Results</Card.Header>
            <ListGroup variant="flush">
                { this.state.results.map((x, i) => <ListGroup.Item key={i}>{x[0]}: {(x[1] * 100).toFixed(2) + '%'}</ListGroup.Item>) }
            </ListGroup>
            </Card>
        </>
      );
    }
}