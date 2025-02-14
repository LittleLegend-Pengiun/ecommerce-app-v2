"use client";

import React from "react";
import { Menu, Input } from "antd";
import { PromoBanner, StyledHeader, ShopNowLink, StyledNavBar, StyledShoppingCartButton, StyledP } from "./AppHeader.style";
import { ItemType } from "antd/es/menu/interface";
import { useRouter, redirect } from "next/navigation";


const AppHeader = () => {
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
        }
    ];

    function handleClick(e: any): void {
        console.log(e.key);

        switch (e.key) {
            case 'home':
                redirect('/');
            case 'about':
                redirect('/');
            case 'contact':
                redirect('/');
            case 'sign-up':
                redirect('/');
            default:
                redirect('/');
        }
    };

    return (
        <StyledHeader>
            <PromoBanner>
                <StyledP>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! &nbsp;&nbsp;&nbsp; <ShopNowLink href="/shop">ShopNow</ShopNowLink></StyledP>
            </PromoBanner>

            <StyledNavBar>
                <div className="logo">Exclusive</div>
                <Menu mode="horizontal" defaultSelectedKeys={["home"]} className="menu" items={items} onClick={handleClick} />

                <Input.Search
                    placeholder="What are you looking for?"
                    className="search-bar"
                />

                <StyledShoppingCartButton
                    onClick={() => redirect('/cart')}
                />
            </StyledNavBar>
        </StyledHeader>
    );
};

export default AppHeader;
