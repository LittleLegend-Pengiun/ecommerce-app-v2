'use client'

import { Card, Typography } from 'antd';
import { useAtom } from 'jotai';
import { cartAtom } from "@/state/atoms/cart";
import { Button, InputNumber, Space } from "antd";

const { Title } = Typography;

export default function Cart() {
    const [cart, setCart] = useAtom(cartAtom);

    const setItemQuantity = (productId: number, newQuantity: number | null) => {
        setCart((prevCart: Cart): Cart => {
            const newCart = prevCart.map(cartItem => (productId === cartItem.id) ? { ...cartItem, cartQuantity: newQuantity ?? 0 } : cartItem);
            return newCart;
        });
    }

    const deleteCartItem = (productId: number) => {
        setCart((prevCart: Cart): Cart => {
            const newCart = prevCart.filter(cartItem => cartItem.id !== productId);
            return newCart;
        });
    }

    return (
        <>
            <Title level={1}>Cart</Title>

            {cart.map(cartItem => (<li key={cartItem.id}>
                {cartItem.productName}
                <Space>
                    <Button onClick={() => setItemQuantity(cartItem.id, cartItem.cartQuantity - 1)} disabled={false}>
                        -
                    </Button>
                    <InputNumber
                        min={1}
                        max={100}
                        value={cartItem.cartQuantity}
                        onChange={(newQuantity) => setItemQuantity(cartItem.id, newQuantity)}
                        style={{ width: 60 }}
                    />
                    <Button onClick={() => setItemQuantity(cartItem.id, cartItem.cartQuantity + 1)} disabled={false}>
                        +
                    </Button>

                    <Button onClick={() => deleteCartItem(cartItem.id)} disabled={false}>
                        Delete
                    </Button>
                </Space>
            </li>))}
        </>
    );
}
