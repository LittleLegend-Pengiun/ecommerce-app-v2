"use client"

import React, { useState, useEffect } from 'react';
import { Badge, Col, Dropdown, Menu } from 'antd';
import { UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import {
  WrapperAccountHeader,
  WrapperHeader,
  WrapperTextHeader,
  WrapperTextHeaderSmall,
  WrapperTextListAccountDropdown,
} from './style';

import { useRouter, redirect } from 'next/navigation';
import PopUpComponent from '../PopUpComponent/PopUpComponent';
// import { clearMess } from '../../redux/slice/notiSlice';

interface RootState {
  cart: {
    totalQuantity: number;
  };
}

const HeaderComponent: React.FC = () => {
  const totalQuantity = 0;
  const [username, setUsername] = useState<string>('');

  useEffect(() => {
    const items = localStorage.getItem('username');
    if (items) {
      setUsername(items);
    }
  }, []);

  const router = useRouter();

  const handleNavigate = (path: string) => {
    return () => {
      router.push(path);
    };
  };

  const handleLogout = (): void => {
    // dispatch(clearMess());
    setUsername('');
    localStorage.clear();
    redirect('/sign-in');
  };

  const AccountOption = (
    <Menu>
      <Menu.Item onClick={handleNavigate('/manage-account/:id')} key="1">
        <WrapperTextListAccountDropdown>Tài khoản</WrapperTextListAccountDropdown>
      </Menu.Item>
      <Menu.Item onClick={handleNavigate('/manage-order/:id')} key="2">
        <WrapperTextListAccountDropdown>Quản lý đơn hàng</WrapperTextListAccountDropdown>
      </Menu.Item>
      <Menu.Item onClick={handleLogout} key="3">
        <WrapperTextListAccountDropdown>Đăng xuất</WrapperTextListAccountDropdown>
      </Menu.Item>
    </Menu>
  );

  const cartStyles: React.CSSProperties = {
    display: 'flex',
    gap: '5px',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    borderRight: '2px solid white'
  };

  const colStyles: React.CSSProperties = {
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center'
  };

  const iconStyles: React.CSSProperties = {
    fontSize: '30px',
    color: 'white',
    marginRight: '5px'
  };

  return (
    <div>
      <WrapperHeader>
        <Col span={8}>
          <WrapperTextHeader onClick={handleNavigate('/')}>
            <img src="/main-logo-white-transparent.png" width={100} alt='bkushop' />
          </WrapperTextHeader>
        </Col>
        <Col span={16} style={colStyles}>
          <WrapperAccountHeader>
            <div>
              <UserOutlined style={{ fontSize: '30px' }} />
            </div>
            <div>
              {username.length > 0 ? (
                <Dropdown overlay={AccountOption} trigger={['hover']}>
                  <div>
                    <a onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}>
                      <WrapperTextHeaderSmall>{username}</WrapperTextHeaderSmall>
                    </a>
                  </div>
                </Dropdown>
              ) : (
                <div>
                  <WrapperTextHeaderSmall onClick={handleNavigate('/sign-in')}>
                    Đăng nhập
                  </WrapperTextHeaderSmall>
                </div>
              )}
            </div>
          </WrapperAccountHeader>
          {username.length > 0 ? (
            <div onClick={handleNavigate('/shopping-cart/:id')} style={cartStyles}>
              <Badge count={totalQuantity} style={{ backgroundColor: 'red' }} size='small'>
                <ShoppingCartOutlined style={iconStyles} />
              </Badge>
              <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
            </div>
          ) : (
            <div onClick={handleNavigate('/sign-in')} style={cartStyles}>
              <ShoppingCartOutlined style={iconStyles} />
              <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
            </div>
          )}
          <PopUpComponent />
        </Col>
      </WrapperHeader>
    </div>
  );
};

export default HeaderComponent;