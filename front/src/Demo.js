import React from 'react';
import {
	Tabs,
	Tab
} from 'react-bootstrap';
import CustomAuthor from './CustomAuthor';
import StandardAuthor from './StandardAuthor';

export default class Demo extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
				<Tabs defaultActiveKey="standard">
					<Tab eventKey="standard" title="Standard Authors">
						<StandardAuthor />
					</Tab>
					<Tab eventKey="custom" title="Custom Author">
						<CustomAuthor />
					</Tab>
				</Tabs>
            </>
        );
    }
}