import React, { useState } from 'react';
import accountLogo from '../../assets/images/account/account-logo.png';
import {
    WrapperUl,
    WrapperLi,
    WrapperLink,
} from './style.js';
import './style.scss';
import { useRouter } from 'next/navigation';

const SideBarAccountComponent: React.FC = () => {
    const [activeLink, setActiveLink] = useState<number | null>(null);
    const router = useRouter();

    const handleNavigate = (path: string) => {
        router.push(path);
    };

    return (
        <div>
            <div
                style={{
                    border: '1px solid #e5e5e5',
                    padding: '20px 0',
                    textAlign: 'center',
                    backgroundColor: 'white',
                }}
            >
                <img
                    src={accountLogo.src}
                    alt="avatar"
                    style={{ borderRadius: '50%', width: '150px', height: 'auto' }}
                />
                <p
                    style={{
                        fontSize: '20px',
                        fontWeight: '500',
                        marginTop: '10px',
                    }}
                >
                    {localStorage.getItem('username')}
                </p>
            </div>
            <div style={{ marginTop: '20px' }}>
                <WrapperUl style={{ listStyle: 'none', padding: '0' }}>
                    <WrapperLink className={activeLink === 1 ? 'active' : ''}>
                        <WrapperLi
                            onClick={() => {
                                setActiveLink(1);
                                handleNavigate('/manage-account/:id');
                            }}
                        >
                            Thông tin tài khoản
                        </WrapperLi>
                    </WrapperLink>
                    <WrapperLink className={activeLink === 2 ? 'active' : ''}>
                        <WrapperLi
                            onClick={() => {
                                setActiveLink(2);
                                handleNavigate('/manage-order/:id');
                            }}
                        >
                            Lịch sử mua hàng
                        </WrapperLi>
                    </WrapperLink>
                </WrapperUl>
            </div>
        </div>
    );
};

export default SideBarAccountComponent;
