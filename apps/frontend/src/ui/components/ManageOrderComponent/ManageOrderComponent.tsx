import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';
import accountLogo from '@/assets/images/account/account-logo.png';
import {
  WrapperTable,
  WrapperColumn,
  WrapperEyeOutlined,
  WrapperStatus,
  WrapperDownOutlined,
  WrapperUl,
  WrapperLi,
  WrapperLink,
} from './style';
import { Col, Dropdown, Menu, Button } from 'antd';
const { Item } = Menu;
import { useRouter, redirect } from 'next/navigation';
import moment, { Moment } from 'moment';

import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;

// Interfaces
interface Order {
  orderId: string;
  orderDate: string;
  totalAmount: number;
  paymentMethod: string;
  orderStatus: string;
  key?: number;
}

interface OrderStatus {
  key: string;
  color: string;
  text: string;
}

type RangeValue = [Moment | null, Moment | null] | null;

interface MenuInfo {
  key: string;
}

const ManageOrderComponent: React.FC = () => {
  const router = useRouter();
  const [listOrder, setListOrder] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [filterOrderStatus, setFilterOrderStatus] = useState<string>('');
  const [filterOrderDate, setFilterOrderDate] = useState<RangeValue>(null);
  const username = localStorage.getItem('username');

  const handleNavigateDetail = (id: string) => {
    return () => {
      router.push(`/ordered-detail/${id}`);
    };
  };

  const handleNavigate = (path: string): void => {
    router.push(path);
  };

  const fetchData = async (): Promise<void> => {
    try {
      const token = localStorage.getItem('token');
      const res: AxiosResponse<Order[]> = await axios.get(
        `${process.env.REACT_APP_ORDER_MS_URL}/orders/username?username=${username}`,
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      );
      setListOrder(res.data);
      setLoading(false);
    } catch (error) {
      const axiosError = error as AxiosError;
      console.error(axiosError.message);
      setError(axiosError);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleFilterByOrderStatus = ({ key }: MenuInfo): void => {
    setFilterOrderStatus(key);
  };

  const handleFilterByOrderDate = (dates: any | null, dateStrings: [string, string]): void => {
    const dayRangeDates = dates as RangeValue;
    setFilterOrderDate(dayRangeDates);
  };

  const getOrderStatusConfig = (status: string): OrderStatus => {
    const statusMap: Record<string, OrderStatus> = {
      'success': { key: 'SUCCESS', color: 'green', text: 'Đã giao hàng' },
      'delivering': { key: 'DELIVERING', color: 'blue', text: 'Đang giao hàng' },
      'canceled': { key: 'CANCELED', color: 'red', text: 'Đã hủy' },
      'pending': { key: 'PENDING', color: 'orange', text: 'Chờ xác nhận' },
      'created': { key: 'Created', color: 'black', text: 'Đã tạo' }
    };
    return statusMap[status.toLowerCase()] || { key: '', color: '', text: status };
  };

  const menu = (
    <Menu onClick={handleFilterByOrderStatus}>
      <Item key="SUCCESS" style={{ fontSize: '16px', fontWeight: '400', color: 'green' }}>Đã giao hàng</Item>
      <Item key="DELIVERING" style={{ fontSize: '16px', fontWeight: '400', color: 'blue' }}>Đang giao hàng</Item>
      <Item key="CANCELED" style={{ fontSize: '16px', fontWeight: '400', color: 'red' }}>Đã hủy</Item>
      <Item key="PENDING" style={{ fontSize: '16px', fontWeight: '400', color: 'orange' }}>Chờ xác nhận</Item>
      <Item key="Created" style={{ fontSize: '16px', fontWeight: '400', color: 'black' }}>Đã tạo</Item>
      <Item key="" style={{ fontSize: '16px', fontWeight: '400' }}>Tất cả đơn hàng</Item>
    </Menu>
  );

  const filteredOrders = listOrder.filter(order => {
    const orderDate = moment(order.orderDate).format('MM-DD-YYYY');

    if (filterOrderStatus && order.orderStatus.toLowerCase() !== filterOrderStatus.toLowerCase()) {
      return false;
    }

    if (filterOrderDate && filterOrderDate[0] && filterOrderDate[1]) {
      const orderMoment = moment(orderDate, 'MM-DD-YYYY');
      const startDate = filterOrderDate[0];
      const endDate = filterOrderDate[1];

      if (orderMoment.isBefore(startDate, 'day') || orderMoment.isAfter(endDate, 'day')) {
        return false;
      }
    }

    return true;
  });

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
                <WrapperLi onClick={() => handleNavigate('/manage-account/:id')}>
                  Thông tin tài khoản
                </WrapperLi>
              </WrapperLink>
              <WrapperLink>
                <WrapperLi
                  onClick={() => handleNavigate('/manage-order/:id')}
                  style={{ color: 'blue', fontSize: '20px', fontWeight: '500', borderRadius: '0' }}
                >
                  Lịch sử mua hàng
                </WrapperLi>
              </WrapperLink>
            </WrapperUl>
          </div>
        </div>
      </Col>
      <Col span={20} style={{ marginLeft: '10px' }}>
        <div style={{ display: 'flex' }}>
          <div></div>
          <RangePicker
            format="MM-DD-YYYY"
            style={{ marginRight: '10px', borderRadius: 0, border: '1px solid #008477' }}
            onChange={handleFilterByOrderDate}
          />
          <Dropdown overlay={menu} trigger={['click']}>
            <Button style={{
              borderRadius: 0,
              color: 'black',
              fontSize: '16px',
              fontWeight: '400',
              backgroundColor: 'white',
              textAlign: 'center',
              border: '1px solid #008477'
            }}>
              {filterOrderStatus ? (
                <div>
                  <span>{getOrderStatusConfig(filterOrderStatus).text}</span>
                </div>
              ) : (
                <div>
                  <span>Tất cả đơn hàng</span>
                  <WrapperDownOutlined />
                </div>
              )}
            </Button>
          </Dropdown>
        </div>
        <WrapperTable
          pagination={{ pageSize: 10 }}
          dataSource={filteredOrders.map((order, index) => ({
            ...order,
            key: index
          }))}
        >
          <WrapperColumn
            title="Mã đơn hàng"
            dataIndex="orderId"
            key="1"
            width="15%"
            render={(text: string) => (
              <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
                {text}
              </div>
            )}
          />
          <WrapperColumn title="Ngày đặt hàng" dataIndex="orderDate" key="2" width="20%" />
          <WrapperColumn title="Tổng tiền" dataIndex="totalAmount" key="3" width="15%" />
          <WrapperColumn title="Phương thức thanh toán" dataIndex="paymentMethod" key="4" width="25%" />
          <WrapperColumn
            title="Trạng thái đơn hàng"
            dataIndex="orderStatus"
            key="5"
            width="25%"
            render={(text: string, record: any, index: number) => {
              const recordRecord = record as Record<any, any>;

              const statusConfig = getOrderStatusConfig(text);
              return (
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <WrapperStatus color={statusConfig.color}>{statusConfig.text}</WrapperStatus>
                  <WrapperEyeOutlined color={statusConfig.color} onClick={handleNavigateDetail(recordRecord.orderId)} />
                </div>
              );
            }}
          />
        </WrapperTable>
      </Col>
    </div>
  );
};

export default ManageOrderComponent;