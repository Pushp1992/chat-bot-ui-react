// Getting all the news feed and display in this component

import React, { useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Card, Button, CardHeader, CardBody, CardTitle, CardText } from 'reactstrap';

// custom import
import MockResponse from '../../utils/mockResponse';
import "../Container/container.css";

let initialChatDataList = [];
const BOT_NAME = "Cassendra";

const MessageContainer = ({ userMessage, userName }) => {

    // setting up state for MockResponse and then mounting and updating the same
    const [mockResponse, setMockResponse] = React.useState([]);

    useEffect(() => {
        setMockResponse(MockResponse.data);
    }, [mockResponse.length])

    // setting up state for chatDataList and then mounting and updating the same
    const [chatDataList, setChatDataList] = React.useState([]);

    useEffect(() => {
        setChatDataList(initialChatDataList)
    });

    // setting up state for userMessage and then mounting and updating the same
    const [userMsg, setUserMsg] = React.useState();

    useEffect(() => {
        if (userMessage === '') return;
        setUserMsg(userMessage)
        getBotResponse();
    }, [userMessage]);

    const getBotResponse = () => {
        let chatObject = {};

        chatObject.currentUserMsg = userMessage;

        userMessage.split(' ').forEach(inputKeyword => {
            mockResponse.forEach(data => {
                if (data.keyword.includes(inputKeyword.toLowerCase())) {
                    chatObject.currentBotRpl = data.value;
                }
            });
        });

        initialChatDataList.push(chatObject);
    }

    return (
        <Container id="parent-view">
            {/* <Card id="card-style">
                <CardHeader>Hunger Savouir</CardHeader>
                {
                    chatDataList.length !== 0 ?
                        chatDataList.map(chatData => {
                            return (
                                <CardBody className="scroll" key={chatData.currentUserMsg}>
                                    <CardText>
                                        <div className="aliasName">{userName === '' ? 'Guest' : userName}:</div>
                                        <div className="aliasMsg">{chatData.currentUserMsg}</div>
                                        <div className="aliasName">{BOT_NAME}: {" "}</div>
                                        <div className="aliasMsg">{chatData.currentBotRpl}</div>
                                    </CardText>
                                </CardBody>
                            )
                        })
                        : <div id="defualt-text">Hello! My name is CASSENDRA, and i am not a Database :)</div>
                }
            </Card> */}

            <div className="scroll">
                {
                    chatDataList.length !== 0 ?
                        chatDataList.map(chatData => {
                            return (
                                <div key={chatData.currentUserMsg}>
                                    <div className="aliasName">{userName === '' ? 'Guest' : userName}:</div>
                                    <div className="aliasMsg">{chatData.currentUserMsg}</div>
                                    <div className="aliasName">{BOT_NAME}: {" "}</div>
                                    <div className="aliasMsg">{chatData.currentBotRpl}</div>
                                </div>
                            )
                        })
                        : <div id="defualt-text">Hello! My name is CASSENDRA, and i am not a Database :)</div>
                }
            </div>
        </Container>
    )
}

export default MessageContainer;