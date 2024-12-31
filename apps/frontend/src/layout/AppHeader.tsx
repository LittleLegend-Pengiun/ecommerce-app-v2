"use client";

import React, { EventHandler } from "react";
import { Layout, Menu, Input, Typography, Card, Button } from "antd";
import { BulbOutlined, MoonOutlined } from "@ant-design/icons";
import { PromoBanner, StyledHeader, DarkModeButton, ShopNowLink, StyledNavBar } from "./AppHeader.style";
import { ItemType } from "antd/es/menu/interface";
import { useRouter, redirect } from "next/navigation";

const { Link } = Typography;

type AppHeaderProps = {
    toggleDarkMode: () => void,
    isDarkMode: boolean
};

const AppHeader = ({ toggleDarkMode, isDarkMode }: AppHeaderProps) => {
    const router = useRouter();
    const items: ItemType[] = [
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
        },
        {
            label: "Playground",
            key: "playground",
            children: [
                {
                    type: 'group',
                    label: 'Components',
                    children: [
                        { label: 'Button', key: 'playground:button' },
                        { label: 'Input', key: 'playground:input' },
                        { label: 'Card', key: 'playground:card' },
                    ],
                },
            ],
        }
    ];

    function handleClick(e: any): void {
        console.log(e.key)
        if (e.key === 'home') redirect('/');
        if (e.key === 'about') redirect('/');
        if (e.key === 'contact') redirect('/');
        if (e.key === 'sign-up') redirect('/');

        if (e.key === 'playground') redirect('/playground');
        if (e.key === 'playground:button') redirect('/playground/button');
        if (e.key === 'playground:input') redirect('/playground/input');
        if (e.key === 'playground:card') redirect('/playground/card');
    };

    return (
        <StyledHeader>
            <PromoBanner>
                <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! &nbsp;&nbsp;&nbsp; <ShopNowLink href="/shop">ShopNow</ShopNowLink></p>
            </PromoBanner>

            <StyledNavBar>
                <div className="logo">Exclusive</div>
                <Menu mode="horizontal" defaultSelectedKeys={["home"]} className="menu" items={items} onClick={handleClick} />

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
            </StyledNavBar>
        </StyledHeader>
    );
};

export default AppHeader;
