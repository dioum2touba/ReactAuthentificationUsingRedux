import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Home.css';

const Home = (props: any) => {
	return (
		<Row>
			<Col md={12}>
				<div className={'homeText'}>
					"Welcome to account-owner application"
				</div>
			</Col>
		</Row>
	);
};
			
export default Home;