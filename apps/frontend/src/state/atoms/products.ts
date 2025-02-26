import { atom } from 'jotai';

export const productsAtom = atom<Product[]>([
  {
    id: 1,
    productName: 'Laptop HP ProBook',
    description:
      'Laptop HP ProBook 450 G8 2W8J9PA (15.6 FHD/i5-1135G7/8GB/256GB SSD/Win10/2GB MX450)',
    price: 2.199e7,
    imageUrl: 'https://i.ibb.co/Z2Hc7Yz/laptop-1.webp',
    quantity: 93,
    manufacturer: 'HP',
    releaseDate: '21-04-2022',
    soldQuantity: 50,
    categoryList: [],
  },
  {
    id: 31,
    productName: 'Tai nghe Bluetooth SoundPeats',
    description: 'Tai nghe Bluetooth SoundPeats',
    price: 879000.0,
    imageUrl: 'https://i.ibb.co/02J6WTJ/audio-2.webp',
    quantity: 121,
    manufacturer: 'SoundPeats',
    releaseDate: '03-04-2022',
    soldQuantity: 260,
    categoryList: [],
  },
  {
    id: 32,
    productName: 'Loa Karaoke YS-119 SUYOSD',
    description: 'Loa Karaoke YS-119 SUYOSD',
    price: 899000.0,
    imageUrl: 'https://i.ibb.co/b1fZQGb/audio-3.webp',
    quantity: 6,
    manufacturer: 'SUYOSD',
    releaseDate: '10-04-2022',
    soldQuantity: 270,
    categoryList: [],
  },
]);
