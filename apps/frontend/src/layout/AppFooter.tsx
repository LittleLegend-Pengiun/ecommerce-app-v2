import React, { ReactNode } from "react";
import { Typography, Row, Col } from "antd";
import { SendOutlined } from "@ant-design/icons";
import { StyledUnorderedList, StyledFooter, StyledSubscribeInput, StyledCopyrightRow, StyledCopyrightedText, StyledTitle, StyledText } from "./AppFooter.style";
const { Title, Text, Link } = Typography;

type FooterColumn = {
    title: string,
    titleLevel?: 1 | 2 | 3 | 4 | 5,
    children: ReactNode
}

type FooterLink = {
    label: string,
    link: string
}

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
            <StyledTitle level={5}>
                Subscribe
            </StyledTitle>
            <StyledText>Get 10% off your first order</StyledText>
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
                    <StyledText>268 Ly Thuong Kiet St, District 10, Ho Chi Minh City, Vietnam</StyledText>
                </li>
                <li>
                    <StyledText>ecommerce-app-v2@gmail.com</StyledText>
                </li>
                <li>
                    <StyledText>+99999-99999-9999</StyledText>
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
                    <li key={footerLink.label}>
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
                    <li key={footerLink.label}>
                        <Link href={footerLink.link}>{footerLink.label}</Link>
                    </li>
                ))}
            </StyledUnorderedList>
        </>
    }
]
const AppFooter = () => {
    return (
        <StyledFooter>
            <Row gutter={[32, 32]}>
                {footerColumns.map(footerColumn => (
                    <Col key={footerColumn.title} xs={24} sm={12} md={6}>
                        <StyledTitle level={footerColumn.titleLevel}>{footerColumn.title}</StyledTitle>
                        <br></br>
                        {footerColumn.children}
                    </Col>
                ))}
            </Row >
            <StyledCopyrightRow>
                <Col span={24}>
                    <StyledCopyrightedText>© Copyright Ecommerce-v2 2024. All rights reserved</StyledCopyrightedText>
                </Col>
            </StyledCopyrightRow>
        </StyledFooter>
    );
};

export default AppFooter;
