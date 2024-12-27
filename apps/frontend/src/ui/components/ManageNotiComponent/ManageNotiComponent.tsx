import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';
import {
  WrapperNotification,
  WrapperNotiText,
  WrapperFilterBtn,
  WrapperCheckBox,
  WrapperPointNoti,
} from './style';
import { useRouter, redirect } from 'next/navigation';
import { useDispatch } from 'react-redux';
// import { removeMessage, clearMess } from '../../redux/slice/notiSlice';
import { useSelector } from 'react-redux';
// import { fetchMessage } from '../../redux/slice/notiFromDBSlice';

// Interfaces
interface NotificationMessage {
  status: string;
  orderId: string;
}

interface Notification {
  ID: string;
  Message: string;
  IsRead: boolean;
  NotificatonDate: string;
}

interface RootState {
  notificationDB: {
    messagesFromDB: Notification[];
  };
}

const ManageNotiComponent: React.FC = () => {
  const [noti, setNoti] = useState<Notification[]>([]);
  const [notiNotRead, setNotiNotRead] = useState<Notification[]>([]);
  const [displayedNoti, setDisplayedNoti] = useState<Notification[]>([]);
  const [checked, setChecked] = useState<boolean>(false);
  const [confirmChecked, setConfirmChecked] = useState<boolean>(false);

  const navigate = useRouter();
  const dispatch = useDispatch();
  // const notiFromDB = useSelector((state: RootState) => state.notificationDB.messagesFromDB);

  // useEffect(() => {
  //   dispatch(fetchMessage());
  // }, [dispatch]);

  // useEffect(() => {
  //   setNoti(notiFromDB);
  //   setNotiNotRead(notiFromDB.filter(item => item.IsRead === false));
  //   setDisplayedNoti(notiFromDB);
  // }, [notiFromDB]);

  const UpdateNoti = async (id: string): Promise<void> => {
    try {
      const token = localStorage.getItem('token');
      const res: AxiosResponse = await axios.put(
        `${process.env.REACT_APP_NOTI_MS_URL}/notification?noti_id=${id}`,
        {},
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      );
      console.log('res', res);
    } catch (error) {
      console.log('error', error);
    }
  };

  const UpdateAllNoti = async (): Promise<void> => {
    try {
      const token = localStorage.getItem('token');
      await axios.put(
        `${process.env.REACT_APP_NOTI_MS_URL}/notification`,
        {},
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      );
    } catch (error) {
      console.log('error', error);
    }
  };

  const NavigateOrderDetail = async (orderID: string, notiID: string): Promise<void> => {
    try {
      await UpdateNoti(notiID);
      // dispatch(removeMessage({ messageId: notiID }));
      navigate.push(`/ordered-detail/${orderID}`);
    } catch (error) {
      console.log('Lỗi khi gửi yêu cầu API:', error);
    }
  };

  const handleDisplayNoti = (notiList: Notification[]): void => {
    setDisplayedNoti(notiList);
  };

  const handleOnChangeCheckBox = async (e: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    setChecked(e.target.checked);
    if (e.target.checked === true) {
      if (window.confirm('Bạn có chắc chắn muốn đánh dấu đã đọc tất cả thông báo?')) {
        try {
          await UpdateAllNoti();
          // dispatch(clearMess());
          const updatedNoti = noti.map(item => ({ ...item, IsRead: true }));
          setNoti(updatedNoti);
          setDisplayedNoti(updatedNoti);
        } catch (error) {
          console.log('Lỗi khi gửi yêu cầu API:', error);
        }
      } else {
        setChecked(false);
      }
    }
  };

  const HandleNoti = (item: Notification, orderID: string): string => {
    const status = JSON.parse(item.Message).status;
    const date = new Date(item.NotificatonDate);
    const formattedDate = `${date.getHours()}:${date.getMinutes()} ngày ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

    const messageMap: Record<string, string> = {
      'Created': `Đơn hàng của bạn đã được tạo lúc ${formattedDate}. Mã đơn hàng: ${orderID}`,
      'SUCCESS': `Đặt hàng thành công lúc ${formattedDate}. Mã đơn hàng: ${orderID}`,
      'CANCELED': `Đơn hàng của bạn đã bị hủy lúc ${formattedDate}. Mã đơn hàng: ${orderID}`,
      'PENDING': `Đơn hàng của bạn đang chờ xác nhận lúc ${formattedDate}. Mã đơn hàng: ${orderID}`,
      'DELIVERING': `Đơn hàng của bạn đang được giao lúc ${formattedDate}. Mã đơn hàng: ${orderID}`
    };

    return messageMap[status] || '';
  };

  const displayNoti = displayedNoti.map((item, index) => {
    const orderID = JSON.parse(item.Message).orderId;
    const notiID = item.ID;
    const isRead = item.IsRead;
    const textColor = isRead ? '#757575' : 'black';
    const bgColor = isRead ? 'white' : '#F0F8FF';
    const pointNoti = !isRead ? <WrapperPointNoti /> : null;

    return (
      <div key={index} style={{ display: 'flex', justifyContent: 'space-between' }}>
        <WrapperNotification color={bgColor} onClick={() => NavigateOrderDetail(orderID, notiID)}>
          <WrapperNotiText color={textColor}>{HandleNoti(item, orderID)}</WrapperNotiText>
          {pointNoti}
        </WrapperNotification>
      </div>
    );
  });

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <WrapperFilterBtn
          onClick={() => handleDisplayNoti(noti)}
          textButton="Tất cả"
          size="large"
          type="default"
        />
        <WrapperFilterBtn
          onClick={() => handleDisplayNoti(notiNotRead)}
          textButton="Chưa đọc"
          size="large"
          type="primary"
        />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '200px' }}>
          <span style={{ fontSize: '16px', width: '70%' }}>Chọn tất cả</span>
          <WrapperCheckBox
            type="checkbox"
            checked={confirmChecked}
            onChange={handleOnChangeCheckBox}
          />
        </div>
      </div>
      <div style={{ minHeight: '500px' }}>
        {displayNoti}
      </div>
    </div>
  );
};

export default ManageNotiComponent;