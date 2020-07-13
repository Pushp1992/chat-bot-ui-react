import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const styles = {
    containerStyle: {
        backgroundColor: "whitesmoke"
    },
    colStyle: {
        height: '100px'
    },
    newsApiText: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'inline-block',
        marginTop: '20px'
    },
    newsText: {
        letterSpacing: '4px',
        padding: '5px 0 5px 6px',
        backgroundColor: "#1a73e8",
        boxSizing: 'border-box',
        fontFamily: 'NA Sans',
        fontSize: '2.25rem',
        color: 'white'
    },
    apiText: {
        letterSpacing: '4px',
        margin: '0, 3px 0 8px',
        padding: '5px 0 5px 6px',
        backgroundColor: "#fff",
        fontFamily: 'NA Sans',
        letterSpacing: '-1px',
        fontSize: '2.25rem',
        fontWeight: '500',
        color: '#1a73e8'
    },
    homeImageStyle: {
        width: '20px',
        height: '20px',
        marginTop: '30px'
    },
    logo: {
        maxWidth: '30rem',
        height: '5rem'
    }
}
const IMAGE_URL = "https://yellowmessenger.com/assets/img/Yellow%20Messenger%20-%20Cognitive%20Engagement%20Cloud.svg";

function Header() {
    return (
        <Container fluid style={styles.containerStyle}>
            <Row>
                <Col md="6">
                    <img style={styles.logo} src={IMAGE_URL} alt="Yellow Messanger"/>
                </Col>
                <Col md="4" style={styles.colStyle}>
                    <div style={styles.newsApiText}>
                        <span style={styles.newsText}>Chat</span>
                        <span style={styles.apiText}>Bot</span>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Header;