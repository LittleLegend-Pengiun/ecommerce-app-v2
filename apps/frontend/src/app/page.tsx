'use client'

import OurProductsSection from '@/components/pages/homepage/OurProductsSection';
import { Typography } from 'antd';
import Image from 'next/image';

const { Title } = Typography;

function HomePage() {
  return (
    <>
      <OurProductsSection />
    </>
  )
}

export default HomePage;