import React, { useEffect, useState } from 'react'
import accountLogo from '@/assets/images/account/account-logo.png'
import {
  WrapperConfirmButton,
  WrapperInputAccount,
  WrapperUl,
  WrapperLi,
  WrapperLink,
} from './style.js'
import { Col } from 'antd';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { redirect, useRouter } from 'next/navigation';

// Interface for User Info
interface UserInfo {
  User_info: {
    Fullname: string;
    PhoneNumber: string;
    Email: string;
  };
}

// Interface for Update User Request
interface UpdateUserRequest {
  username: string;
  fullname: string;
  phonenumber: string;
  email: string;
}

const ManageAccountComponent: React.FC = () => {
  const router = useRouter();

  const handleNavigate = (path: string): void => {
    router.push(path);
  };

  const token: string | null = localStorage.getItem('token');
  const username: string | null = localStorage.getItem('username');

  const [updateFullName, setUpdateFullName] = useState<string>('');
  const [updatePhoneNumber, setUpdatePhoneNumber] = useState<string>('');
  const [updateEmail, setUpdateEmail] = useState<string>('');

  const fetchUserInfor = async (): Promise<void> => {
    try {
      if (!username || !token) return;

      const res: AxiosResponse<UserInfo> = await axios.get(
        `${process.env.REACT_APP_AUTHEN_MS_URL}/user?username=${username}`,
        {
          headers: {
            'Authorization': `Bearer ${token}`
          },
        }
      );

      setUpdateFullName(res.data.User_info.Fullname);
      setUpdatePhoneNumber(res.data.User_info.PhoneNumber);
      setUpdateEmail(res.data.User_info.Email);
    } catch (error) {
      console.log('error', (error as AxiosError).response);
    }
  };

  useEffect(() => {
    fetchUserInfor();
  }, []);

  const handleUpdateUserInfor = async (): Promise<void> => {
    try {
      if (!username || !token) return;

      const updateData: UpdateUserRequest = {
        username,
        fullname: updateFullName,
        phonenumber: updatePhoneNumber,
        email: updateEmail
      };

      const res: AxiosResponse = await axios.put(
        `${process.env.REACT_APP_AUTHEN_MS_URL}/user`,
        updateData,
        {
          headers: {
            'Authorization': `Bearer ${token}`
          },
        }
      );

      if (res.status === 200) {
        alert('Cập nhật thông tin thành công');
      }
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response?.status === 400) {
        alert('Cập nhật thông tin thất bại');
      } else if (axiosError.response?.status === 401) {
        alert('Phiên đăng nhập hết hạn, vui lòng đăng nhập lại');
      } else {
        alert('Hệ thống đang bận, vui lòng thử lại sau');
      }
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <Col span={4}>
        <div>
          <div style={{ border: '1px solid #e5e5e5', padding: '20px 0', textAlign: 'center', backgroundColor: 'white' }}>
            <img src={accountLogo.src} alt="avatar" style={{ borderRadius: '50%', width: '150px', height: 'auto' }} />
            <p style={{ fontSize: '20px', fontWeight: '500', marginTop: '10px' }}>{username}</p>
          </div>
          <div style={{ marginTop: '20px' }}>
            <WrapperUl style={{ listStyle: 'none', padding: '0' }}>
              <WrapperLink>
                <WrapperLi
                  onClick={() => handleNavigate('/manage-account/:id')}
                  style={{ color: 'blue', fontSize: '20px', fontWeight: '500', borderRadius: '0' }}
                >
                  Thông tin tài khoản
                </WrapperLi>
              </WrapperLink>
              <WrapperLink>
                <WrapperLi onClick={() => handleNavigate('/manage-order/:id')}>
                  Lịch sử mua hàng
                </WrapperLi>
              </WrapperLink>
            </WrapperUl>
          </div>
        </div>
      </Col>
      <Col span={10}>
        <div style={{ display: 'block', borderRight: '1px solid #008477', padding: '30px' }}>
          <WrapperInputAccount
            label="Tên đầy đủ"
            size="large"
            value={updateFullName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUpdateFullName(e.target.value)}
          />
          <WrapperInputAccount
            label="Số điện thoại"
            size="large"
            value={updatePhoneNumber}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUpdatePhoneNumber(e.target.value)}
          />
          <WrapperInputAccount
            label="Email"
            size="large"
            value={updateEmail}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUpdateEmail(e.target.value)}
          />
          <div style={{ display: 'flex' }}>
            <WrapperConfirmButton
              onClick={handleUpdateUserInfor}
              size="large"
              textButton="Lưu thay đổi"
              htmlType="submit"
              style={{ width: '250px' }}
            />
          </div>
        </div>
      </Col>
      <Col span={10}>
        <div style={{ padding: '30px' }}>
          <WrapperInputAccount
            label="Mật khẩu cũ"
            placeholder="Nhập mật khẩu cũ"
            type="password"
            size="large"
          />
          <WrapperInputAccount
            placeholder="Nhập mật khẩu mới"
            type="password"
            size="large"
            label="Mật khẩu mới"
          />
          <WrapperInputAccount
            placeholder="Nhập lại mật khẩu mới"
            type="password"
            size="large"
            label="Nhập lại mật khẩu mới"
          />
          <WrapperConfirmButton
            size="large"
            textButton="Đổi mật khẩu"
            type="primary"
            htmlType="submit"
            style={{ width: '250px' }}
          />
        </div>
      </Col>
    </div>
  );
};

export default ManageAccountComponent;