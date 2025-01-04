'use client'

import Link from "next/link";
import { Card, Typography } from 'antd';
import { Layout } from 'antd';
import { useAtom } from "jotai";
import { cartAtom } from "@/state/atoms/cart";

const { Title } = Typography;
const { Content } = Layout;

export default function Playground2() {
    const [cart, setCart] = useAtom(cartAtom);

    return (
        <>
            <Title level={1}>Playground Testing 2</Title>
            <ul>
                {cart.map((item, index) => (
                    <li key={index}>{item.title}</li>
                ))}
            </ul>
            <button onClick={() => {
                setCart((cart) => [
                    ...cart,
                    {
                        title: 'Mac Mini 2024',
                        quantity: 1998,
                        watched: false
                    }
                ])
            }}>
                Add Cowboy Bebop
            </button>
        </>
    );
}
