import React from "react";
import { Layout, Typography, Input, Button, Row, Col } from "antd";
import { MailOutlined } from "@ant-design/icons";
import styled from "styled-components";

const { Footer } = Layout;
const { Title, Text, Link } = Typography;

const StyledFooter = styled(Footer)`
    background-color: ${props => props.theme.color.div.backgroundColor};
    color: ${props => props.theme.color.text.primary};
    padding: 40px 20px;
    border-top: 1px solid #ddd;
`;

const AppFooter = () => {
    return (
        <StyledFooter>
            <Row gutter={[32, 32]}>
                {/* Column 1: Subscribe */}
                <Col xs={24} sm={12} md={6}>
                    <Title level={4}>
                        Exclusive
                    </Title>
                    <Text>Subscribe</Text>
                    <Text>
                        Get 10% off your first order
                    </Text>
                    <Input
                        placeholder="Enter your email"
                        suffix={<MailOutlined />}
                        style={{
                            borderRadius: "4px",
                            marginBottom: "16px",
                        }}
                    />
                    <Button>
                        Subscribe
                    </Button>
                </Col>

                {/* Column 2: Support */}
                <Col xs={24} sm={12} md={6}>
                    <Title level={5} >
                        Support
                    </Title>
                    <Text>
                        111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.
                    </Text>
                    <Text>exclusive@gmail.com</Text>
                    <Text>+88015-88888-9999</Text>
                </Col>

                {/* Column 3: Account */}
                <Col xs={24} sm={12} md={6}>
                    <Title level={5}>
                        Account
                    </Title>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                        <li>
                            <Link href="#">
                                My Account
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                Login / Register
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                Cart
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                Wishlist
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                Shop
                            </Link>
                        </li>
                    </ul>
                </Col>

                {/* Column 4: Quick Link */}
                <Col xs={24} sm={12} md={6}>
                    <Title level={5}>
                        Quick Link
                    </Title>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                        <li>
                            <Link href="#">
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                Terms Of Use
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                FAQ
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </Col>
            </Row>
            <Row style={{ marginTop: 32, textAlign: "center" }}>
                <Col span={24}>
                    <Text>
                        © Copyright Rimel 2022. All rights reserved
                    </Text>
                </Col>
            </Row>
        </StyledFooter>
    );
};

export default AppFooter;
