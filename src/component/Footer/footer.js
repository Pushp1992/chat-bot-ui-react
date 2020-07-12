import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const styles = {
    containerStyle: {
        marginTop: '20px',
        backgroundColor: "black"
    },
    colStyle: {
        height: '9rem'
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
    }
}

function Footer() {
    return (
        <Container fluid style={styles.containerStyle}>
            <Row>
                <Col style={styles.colStyle}>
                    <div style={styles.newsApiText}>
                        <span style={styles.newsText}>News</span>
                        <span style={styles.apiText}>API</span>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;