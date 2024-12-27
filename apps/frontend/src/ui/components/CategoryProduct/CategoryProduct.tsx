'use client'

import React from 'react';
import { WrapperCategoryItem } from './style';
// import { useRouter } from 'next/navigation'
import { redirect } from 'next/navigation'

interface CategoryProductProps {
  categoryName: string;
  categoryId: string | number;
}

const CategoryProduct: React.FC<CategoryProductProps> = ({ categoryName, categoryId }) => {

  const handleNavigate = (categoryId: string | number): void => {
    if (parseInt(categoryId.toString()) === 0) {
      redirect('/');
      return;
    }
    redirect('/category/' + categoryId);
  };

  return (
    <WrapperCategoryItem onClick={() => handleNavigate(categoryId)}>
      {categoryName}
    </WrapperCategoryItem>
  );
};

export default CategoryProduct;