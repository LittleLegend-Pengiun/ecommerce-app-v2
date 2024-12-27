"use client";

import Link from 'next/link'
import { WrapperButton } from './wrapper/buttonComponent';
import { WrapperCard } from './wrapper/cardComponent';
import CategoryProduct from '@/ui/components/CategoryProduct/CategoryProduct';

export default function Home() {
    return (
        <div className='m-auto'>
            <p>Your test</p>
            <hr />
            <h1>Your button component</h1>
            <WrapperButton
                textButton="Add To Cart"
            >
            </WrapperButton>

            <h1>Your wrapper card component</h1>
            <WrapperCard
                productName={'ASUS Gaming Laptop'}
                productImg={"https://dlcdnwebimgs.asus.com/gain/add33695-b6ce-4b90-89f4-90c96340b38d/"}
                productPrice={"170,000 VNĐ"}
                soldQuantity={210}
            />

            <h1>Your category nav link</h1>
            <CategoryProduct
                categoryId={1}
                categoryName="laptop"
            />
            <CategoryProduct
                categoryId={2}
                categoryName="ram"
            />
        </div>
    );
}
