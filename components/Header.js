import { Row, Col, Typography, Affix } from 'antd';
import { useState } from 'react';

const { Title } = Typography;

const Header = () => {

    return (
        <Affix offsetTop={10}>
            <Row style={{margin: 0}}>
            <Col flex="200px">
                <Title level={4}>Nueva York</Title>
            </Col>
            <Col flex="auto">
                <Row justify="end">
                    <Col>
                        More
                </Col>
                </Row>
            </Col>
        </Row>
        </Affix>
    )
}

export default Header;