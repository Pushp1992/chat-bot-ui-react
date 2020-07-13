import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const styles = {
    containerStyle: {
        marginTop: '20px',
        backgroundColor: "black"
    },
    colStyle: {
        height: '11rem'
    },
    newsApiText: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '8rem',
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
                        <span>&#169;</span> For Yellow Messanger only
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;