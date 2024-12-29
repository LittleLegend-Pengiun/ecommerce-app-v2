"use client";

import React from "react";
import { Layout, Menu, Input, Typography, Card, Button } from "antd";
import { BulbOutlined, MoonOutlined } from "@ant-design/icons";
import styled from "styled-components";

const { Header } = Layout;

// Styled Components
const PromoBanner = styled.div`
background-color: ${props => props.theme.color.div.backgroundColor};
color: ${props => props.theme.color.text.primary};
text-align: center;
padding: 5px 0;
font-size: 14px;

a {
  text-decoration: underline;
}
`;

const StyledHeader = styled(Header)`
display: flex;
align-items: center;
justify-content: space-between;
background-color: ${props => props.theme.color.div.backgroundColor};
color: ${props => props.theme.color.text.primary};
padding: 0 20px;
border-bottom: 1px solid #ddd;

.logo {
  font-size: 18px;
  font-weight: bold;
}

.menu {
  flex: 1;
  border: none;
  display: flex;
  justify-content: center;
}

.search-bar {
  margin-left: auto;
  width: 200px;
}
`;


const AppHeader = ({ toggleDarkMode, isDarkMode }: { toggleDarkMode: () => void, isDarkMode: boolean }) => {
    const items: any[] = [
        {
            label: "Home",
            key: "home"
        },
        {
            label: "Contact",
            key: "contact"
        },
        {
            label: "About",
            key: "about"
        },
        {
            label: "Sign Up",
            key: "sign-up"
        }
    ];

    return (
        <Layout>
            <PromoBanner>
                <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}<a href="/shop">ShopNow</a></p>
            </PromoBanner>
            <StyledHeader>
                <div className="logo">Exclusive</div>

                <Menu mode="horizontal" defaultSelectedKeys={["home"]} className="menu" items={items} />

                {/* <Card style={{ width: "max-content" }}>
                    <Button onClick={toggleDarkMode}>
                        Change Theme to {isDarkMode ? "Light" : "Dark"}
                    </Button>
                </Card> */}

                <Input.Search
                    placeholder="What are you looking for?"
                    className="search-bar"
                />

                &nbsp;&nbsp;&nbsp;&nbsp;

                <Button
                    type="primary"
                    shape="round"
                    icon={!isDarkMode ? <BulbOutlined /> : <MoonOutlined />}
                    onClick={toggleDarkMode}
                    style={{
                        backgroundColor: !isDarkMode ? "#fff" : "#000",
                        color: !isDarkMode ? "#000" : "#fff",
                        borderColor: !isDarkMode ? "#777" : "#ddd",
                    }}
                >
                    {!isDarkMode ? "Light Mode" : "Dark Mode"}
                </Button>
            </StyledHeader>
        </Layout>
    );
};

export default AppHeader;
