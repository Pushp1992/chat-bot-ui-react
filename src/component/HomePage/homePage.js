// All the view component are integrated Headers.

import React, { Component } from 'react';
import { Row, Col, Container } from "react-bootstrap";

// Custom component Import
import { HeaderComponent, FooterComponent } from '../component';
import UserInputBox from '../InputBox/inputBox';

class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            //
        }
    }
    render() {
        return (
            <Container fluid>
                <Row>
                    <HeaderComponent />
                    <UserInputBox />
                    <FooterComponent />
                </Row>
            </Container>
        )
    }
}

export default HomePage;