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
        }
    ];

    function handleClick(e: any): void {
        console.log(e.key)
        switch (e.key) {
            case 'home':
                redirect('/');
            case 'about':
                redirect('/');
            case 'contact':
                redirect('/');
            case 'sign-up':
                redirect('/');
            case 'playground':
                redirect('/playground');
            default:
                redirect('/');
        }
    };

    return (
        <StyledHeader>
            <PromoBanner>
                <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! &nbsp;&nbsp;&nbsp; <ShopNowLink href="/shop">ShopNow</ShopNowLink></p>
            </PromoBanner>

            <StyledNavBar>
                <div className="logo">Exclusive</div>
                <Menu mode="horizontal" defaultSelectedKeys={["home"]} className="menu" items={items} onClick={handleClick} />

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