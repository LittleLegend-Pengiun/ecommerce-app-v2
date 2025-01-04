import { atom } from 'jotai';

export const cartAtom = atom([
    {
        title: 'Macbook Pro 16',
        quantity: 1995,
        watched: true
    },
    {
        title: 'iPhone Pro Max 15',
        quantity: 1998,
        watched: false
    }
]);