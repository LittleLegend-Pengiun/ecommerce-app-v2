import React, { ReactNode } from "react";
import { Typography, Button, Row, Col } from "antd";
import { SendOutlined } from "@ant-design/icons";
import { StyledUnorderedList, StyledFooter, StyledSubscribeInput, StyledCopyrightRow, CopyrightedTextStyle } from "./AppFooter.style";
const { Title, Text, Link } = Typography;

type FooterColumn = {
    title: String,
    titleLevel: 1 | 2 | 3 | 4 | 5 | undefined,
    children: ReactNode
}

type FooterLink = {
    label: string,
    link: string
}

const AppFooter = () => {

    const accountFooterLinks: FooterLink[] = [
        {
            label: 'My Account',
            link: '#'
        },
        {
            label: 'Login / Register',
            link: '#'
        },
        {
            label: 'Cart',
            link: '#'
        },
        {
            label: 'Wishlist',
            link: '#'
        },
        {
            label: 'Shop',
            link: '#'
        }
    ];

    const quickLinkFooterLinks: FooterLink[] = [
        {
            label: 'Privacy Policy',
            link: '#'
        },
        {
            label: 'Term Of Use',
            link: '#'
        },
        {
            label: 'FAQ',
            link: '#'
        },
        {
            label: 'Contact',
            link: '#'
        },
    ];

    const footerColumns: FooterColumn[] = [
        {
            title: 'Exclusive',
            titleLevel: 4,
            children: <>
                <Title level={5}>
                    Subscribe
                </Title>
                <Text>Get 10% off your first order</Text>
                <StyledSubscribeInput
                    placeholder="Enter your email"
                    suffix={<SendOutlined />}
                />
            </>
        },
        {
            title: 'Support',
            titleLevel: 5,
            children: <>
                <StyledUnorderedList>
                    <li>
                        <Text>268 Ly Thuong Kiet St, District 10, Ho Chi Minh City, Vietnam</Text>
                    </li>
                    <li>
                        <Text>ecommerce-app-v2@gmail.com</Text>
                    </li>
                    <li>
                        <Text>+99999-99999-9999</Text>
                    </li>
                </StyledUnorderedList>
            </>
        },
        {
            title: 'Account',
            titleLevel: 5,
            children: <>
                <StyledUnorderedList>
                    {accountFooterLinks.map(footerLink => (
                        <li>
                            <Link href={footerLink.link}>{footerLink.label}</Link>
                        </li>
                    ))}
                </StyledUnorderedList>
            </>
        },
        {
            title: 'Quick Link',
            titleLevel: 5,
            children: <>
                <StyledUnorderedList>
                    {quickLinkFooterLinks.map(footerLink => (
                        <li>
                            <Link href={footerLink.link}>{footerLink.label}</Link>
                        </li>
                    ))}
                </StyledUnorderedList>
            </>
        }
    ]

    return (
        <StyledFooter>
            <Row gutter={[32, 32]}>
                {footerColumns.map(footerColumn => (<Col xs={24} sm={12} md={6}>
                    <Title level={footerColumn.titleLevel}>{footerColumn.title}</Title>
                    <br></br>
                    {footerColumn.children}
                </Col>))}
            </Row >
            <StyledCopyrightRow>
                <Col span={24}>
                    <CopyrightedTextStyle>© Copyright Ecommerce-v2 2024. All rights reserved</CopyrightedTextStyle>
                </Col>
            </StyledCopyrightRow>
        </StyledFooter >
    );
};

export default AppFooter;
