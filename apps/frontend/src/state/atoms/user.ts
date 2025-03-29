import { atom } from 'jotai';

export const userAtom = atom<User>({
    isLogin: false,
    fullname: '',
    email: ''
});
