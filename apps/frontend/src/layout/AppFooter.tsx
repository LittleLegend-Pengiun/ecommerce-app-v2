import React from "react";
import { Typography, Button, Row, Col } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { StyledFooter, StyledSubscribeInput, StyledCopyrightRow } from "./AppFooter.style";
const { Title, Text, Link } = Typography;



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
                    <StyledSubscribeInput
                        placeholder="Enter your email"
                        suffix={<MailOutlined />}
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
                    <ul>
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
                    <ul>
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
            <StyledCopyrightRow>
                <Col span={24}>
                    <Text>
                        © Copyright Rimel 2022. All rights reserved
                    </Text>
                </Col>
            </StyledCopyrightRow>
        </StyledFooter>
    );
};

export default AppFooter;
