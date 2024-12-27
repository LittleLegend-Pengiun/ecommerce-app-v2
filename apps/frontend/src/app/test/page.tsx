"use client";

import Link from 'next/link'
import { WrapperButton } from './wrapper/buttonComponent';
import CardComponent from '@/ui/components/CardComponent/CardComponent';
import CategoryProduct from '@/ui/components/CategoryProduct/CategoryProduct';
import SignUpFormComponent from '@/ui/components/SignUpFormComponent/SignUpFormComponent';
import SliderComponent from '@/ui/components/SliderComponent/SliderComponent';
import { WrapperSlider } from '@/ui/components/SliderComponent/style';

import slider1 from "@/assets/images/slider/slider1.png";
import slider2 from "@/assets/images/slider/slider2.png";
import slider3 from "@/assets/images/slider/slider3.png";

export default function Home() {

    console.log('sliders:', slider1.src)
    return (
        <div className='m-auto'>
            <h1>Your button component</h1>
            <WrapperButton
                textButton="Add To Cart"
            >
            </WrapperButton>

            <h1>Your wrapper card component</h1>
            <CardComponent
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

            <h1>Signup Form Component</h1>
            <SignUpFormComponent />

            <h1>Slider Component</h1>
            <WrapperSlider>
                <SliderComponent arrImages={[slider1.src, slider2.src, slider3.src]} />
            </WrapperSlider>
        </div>
    );
}
