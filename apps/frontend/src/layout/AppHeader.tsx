"use client";

import React from "react";
import { Layout, Menu, Input, Typography, Card, Button } from "antd";
import { BulbOutlined, MoonOutlined } from "@ant-design/icons";
import { PromoBanner, StyledHeader, DarkModeButton, ShopNowLink } from "./AppHeader.style";

const { Link } = Typography;

type AppHeaderProps = {
    toggleDarkMode: () => void,
    isDarkMode: boolean
};

const AppHeader = ({ toggleDarkMode, isDarkMode }: AppHeaderProps) => {
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
                <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! &nbsp;&nbsp;&nbsp; <ShopNowLink href="/shop">ShopNow</ShopNowLink></p>
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

                <DarkModeButton
                    type="default"
                    shape="round"
                    icon={!isDarkMode ? <BulbOutlined /> : <MoonOutlined />}
                    onClick={toggleDarkMode}
                >
                    {!isDarkMode ? "Light Mode" : "Dark Mode"}
                </DarkModeButton>
            </StyledHeader>
        </Layout>
    );
};

export default AppHeader;
