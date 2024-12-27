import React, { useEffect, useState } from 'react';
import { Badge, notification} from 'antd';
import { NotificationOutlined } from '@ant-design/icons';
import {WrapperNotification,WrapperConfirmButton} from './style'
import { useDispatch,useSelector } from 'react-redux';
import { addMessage,removeMessage } from '../../redux/slice/notiSlice';
import { useNavigate } from 'react-router-dom';
import io from 'socket.io-client';
import axios from 'axios';
import { markMessageAsRead } from '../../redux/slice/notiFromDBSlice';
const close =() => {
  console.log('Notification was closed. Either the close button was clicked or duration time elapsed.');  
};
const PopUpComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [count, setCount] = useState(''); 
  const username = localStorage.getItem('username');
  const handleNavigate = (path) => {
    return () => {
      navigate(path);
    };
  };
  const handleMessages = (status) => {
    if (status==='Created') return 'Đơn hàng của bạn đã được tạo';
    if (status==='SUCCESS') return 'Đặt hàng thành công';
    if (status==='CANCELED') return 'Đơn hàng của bạn đã bị hủy';
    if (status==='PENDING') return 'Đơn hàng của bạn đang chờ xác nhận';
    if (status==='DELIVERING') return 'Đơn hàng của bạn đang được giao';
  };
  const setIsReadMess = async (id) => {
    try {
      const token = localStorage.getItem('token');
      const res =await axios.put(`${process.env.REACT_APP_NOTI_MS_URL}/notification?noti_id=${id}`, 
      {},
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    );
      console.log('res',res);
    }
    catch (error) {
      console.log('error',error);
    }
  }
  useEffect(() => {
    const socket = io(`${process.env.REACT_APP_NOTI_SOCKET_URL}`, {
      auth: {
        token: localStorage.getItem('token'),
      },
    });

    socket.on('connect', () => {
      console.log('Connected to server');
    });

    socket.on(`noti-${localStorage.getItem('username')}`, (msg) => {
      dispatch(addMessage(JSON.parse(msg)));
    });

    socket.on('error', (error) => {
      console.error('Socket error:', error);
    });

    return () => {
      socket.disconnect();
    };
  }, [dispatch]);
  const messages = useSelector((state) => state.notification.messages);
  useEffect(() => {
    if (messages.length>0) {
      setCount("new");
      openAllNotifications();
    }
    else {
      setCount("");
    }
  }, [messages]);

  const [api, contextHolder] = notification.useNotification();  
  const removeNotification = (id) => {
    notification.destroy(`open${id}`);
    dispatch(removeMessage({ messageId: id }));
    dispatch(markMessageAsRead({ messageId: id }));
    setIsReadMess(id);
  };
  const openAllNotifications = () => {
    messages.forEach((msg) => {
      openNotification(msg);
    });
  };
  const openNotification = (msg) => {
    const key = `open${msg.id}`;
    const btn = (
      <WrapperConfirmButton
      onClick={() => removeNotification(msg.id)}
      size="small"
      textButton="OK"
      type="primary"
      >
      </WrapperConfirmButton>
    );
        notification.open({
          message: "Mã đơn hàng: "+ msg?.orderId,
          description: handleMessages(msg?.status),
          btn,
          key,
          duration: 0,
          onClose: close(msg.id),
          style: {
            width: 350,
          },
        });
  };
    useEffect(() => {
      if (messages.length === 0) {
        notification.destroy();
      }
    }, [messages]);
  return (
    <>
      <div>
        {
          username ? (
            <div style={{display:'flex',gap:'5px',alignItems:'center',textAlign:'center',justifyContent:'center',color:'white'}}
            onClick={handleNavigate('/manage-noti')}
            >
              <Badge count={count} style={{backgroundColor:'red'}} size='small'>
                  <NotificationOutlined 
                      style={{fontSize:'30px',color:'white'}}
                  />
              </Badge>
              <WrapperNotification>Tất cả thông báo</WrapperNotification>
            </div>
          ) : (
            <div style={{display:'flex',gap:'5px',alignItems:'center',textAlign:'center',justifyContent:'center',color:'white'}}
            onClick={handleNavigate('/sign-in')}>
                  <NotificationOutlined style={{fontSize:'30px',color:'white'}}/>
              <WrapperNotification>Tất cả thông báo</WrapperNotification>
            </div>
          )
        }
      </div>
    </>
  );
};

export default PopUpComponent;
