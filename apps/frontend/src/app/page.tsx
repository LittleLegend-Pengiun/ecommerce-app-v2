'use client'

import Link from "next/link";
import { Card, Typography } from 'antd';
import { Layout } from 'antd';
import { atom, useAtom } from 'jotai';
import { cartAtom } from "@/state/atoms/cart";
import { productsAtom } from "@/state/atoms/products";
import { Button, InputNumber, Space } from "antd";

const { Title } = Typography;

export default function Home() {

  const [products] = useAtom(productsAtom);
  const [cart, setCart] = useAtom(cartAtom);

  const addToCart = (product: Product) => {
    setCart((prevCart: Cart): Cart => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) => (item.id === product.id) ? { ...item, cartQuantity: item.cartQuantity + 1 } : item);
      }
      return [...prevCart, { ...product, cartQuantity: 1 }];
    });
  };

  return (
    <>
      <Title level={1}>Home</Title>

      <ul>
        {products.map((product) => (
          <li key={product.id} style={{ marginBottom: "1em" }}>
            <span style={{ marginRight: "1em" }}>{product.productName}</span>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </>
  );
}
