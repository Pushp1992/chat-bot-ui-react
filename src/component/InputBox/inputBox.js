/** 
* Parent Component, that will accept input from user and pass will pass to child component
* Uni-directional flow of data
*/

import React, { Component } from 'react';
import CustomToastr from '../../utils/toastr';
import { Row, Col, Container, Button } from "react-bootstrap";
import MessageContainer from '../Container/container';
import { Modal, ModalBody, ModalFooter } from 'reactstrap';
import '../InputBox/inputBox.css';

class UserInputBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userInput: '',
            userMessage: '',
            setOpen: true,
            userName: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    closeModal = (event) => {
        event.preventDefault();
        this.setState({ setOpen: !this.state.setOpen })
    }

    handleInputChange(event) {
        event.preventDefault();
        const { name, value } = event.currentTarget;
        this.setState({ [name]: value })
    }

    passInputValue(event) {
        event.preventDefault();

        if (event.key === 'Enter') {
            if (this.state.userInput === "") {
                CustomToastr.warning("Please Enter your message");
                return;
            }
            this.setState({ userMessage: this.state.userInput, userInput: '' })
        }
    }

    render() {
        const message = this.state.userMessage;
        const userName = this.state.userName;
        const open = this.state.setOpen;
        return (
            <Container fluid id="inputBox-style">
                <Row>
                    <Col>
                        <MessageContainer userMessage={message} userName={userName} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <input type="text" name='userInput' id="userInputField" value={this.state.userInput}
                            placeholder="write your text here..." onChange={this.handleInputChange} onKeyUp={(e) => this.passInputValue(e)} />
                    </Col>
                </Row>
                <Modal isOpen={open} centered={true}>
                    <ModalBody>Hi there! </ModalBody>
                    <ModalFooter>
                        <input id="userNameInputField" type="text" name="userName" value={this.state.userName}
                            placeholder="please enter your name" onChange={this.handleInputChange} />
                        <Button color="primary" onClick={(e) => this.closeModal(e)}>Ok</Button>
                    </ModalFooter>
                </Modal>
            </Container>
        )
    }
}

export default UserInputBox;