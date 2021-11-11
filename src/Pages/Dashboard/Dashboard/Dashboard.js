import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Header from '../../Shared/Header/Header';

const Dashboard = () => {
    return (
        <div>
            <Header/>
            <Row>
                <Col xs={12}md={6}lg={3} >
                    <ul>
                        <li></li>
                    </ul>
                </Col>
                <Col xs={12}md={6}lg={9} ></Col>
            </Row>
        </div>
    );
};

export default Dashboard;