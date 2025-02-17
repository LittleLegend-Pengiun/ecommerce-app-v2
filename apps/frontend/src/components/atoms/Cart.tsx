import React from 'react'

type Props = {
    name?: string;
    price?: number;
    stars?: number;
    reviewCount?: number;
    isNew?: boolean;
}

const Card: React.FC<Props> = ({ name, price }) => {
  return (
    <>
        <div>Cart</div>
        <p>Name: {name}</p>
        <p>Price: {price}</p>
    </>
  )
}

export default Card;