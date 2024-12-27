import React, { useState, useEffect } from 'react';
import { useRouter, redirect, usePathname } from 'next/navigation';
import { formatPrice } from '@/lib/utils/formater';
// import { clearCart } from '../../redux/slice/shoppingCartSlice';
import { Radio, Space, Form } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import {
    WrapperRow, WrapperCol, WrapperForm, WrapperColumn,
    WrapperTable, WrapperRowList, WrapperColList,
    WrapperPaymentMethod, WrapperRadio, WrapperButton,
    WrapperInputAccount, WrapperTitle,
} from './style';
import axios from 'axios';

// Types for the component
interface ProductItem {
    productId: string;
    productName: string;
    imageUrl: string;
    quantity: number;
    price: number;
}

interface UserInfo {
    Fullname: string;
    PhoneNumber: string;
    Email: string;
}

interface LocationState {
    type: 'direct' | 'byCart';
}

interface RootState {
    payment: {
        item: ProductItem[];
        quantity: number;
        amount: number;
    };
    cart: {
        cartItems: ProductItem[];
        totalAmount: number;
    };
}

type OrderStatus = 'SUCCESS' | 'PENDING' | 'CANCELED' | 'DELIVERING';

interface OrderRequest {
    cartItems: Array<{
        productId: string;
        quantity: number;
    }>;
    shippingAddress: string;
    paymentMethod: string;
    orderStatus: OrderStatus;
}

const onFinishFailed = (errorInfo: any): void => {
    console.log('Failed:', errorInfo);
};

const PaymentComponent: React.FC = () => {
    const oldAddress = localStorage.getItem('address');
    const [address, setAddress] = useState<string | null>(oldAddress);
    const [userInfor, setUserInfor] = useState<UserInfo>({} as UserInfo);
    const [data, setData] = useState<ProductItem[]>([]);
    const [value, setValue] = useState<number>(1);

    // const location = useLocation();
    // const state = location.state as LocationState;
    const router = useRouter();

    // const paymentType = state.type;
    const paymentType = 'byCart';

    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');

    //   const itemByDirect = useSelector((state: RootState) => state.payment.item).map(
    //     (item) => ({ ...item, quantity: useSelector((state: RootState) => state.payment.quantity) })
    //   );
    //   const totalAmountByDirect = useSelector((state: RootState) => state.payment.amount);
    //   const totalAmountByCart = useSelector((state: RootState) => state.cart.totalAmount);
    //   const itemByCart = useSelector((state: RootState) => state.cart.cartItems);

    //   const totalAmount = (paymentType === 'direct') ? totalAmountByDirect : totalAmountByCart;
    //   const paymentItems = (paymentType === 'direct') ? itemByDirect : itemByCart;

    const totalAmount = 0;
    const paymentItems = [];

    useEffect(() => {
        // if (paymentItems.length > 0) {
        //   setData(paymentItems);
        // }
    }, []);

    useEffect(() => {
        fetchUserInfor();
    }, []);

    const fetchUserInfor = async (): Promise<void> => {
        try {
            const res = await axios.get(
                `${process.env.REACT_APP_AUTHEN_MS_URL}/user?username=${username}`,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    },
                }
            );
            setUserInfor(res.data.User_info);
        } catch (error) {
            console.log('error', error);
        }
    };

    const handleNavigate = (path: string) => {
        return () => {
            router.push(path);
        };
    };

    const handleonChange = (e: any): void => {
        setValue(e.target.value);
    };

    const randomOrderStatus = (): OrderStatus => {
        const status: OrderStatus[] = ['SUCCESS', 'PENDING', 'CANCELED', 'DELIVERING'];
        return status[Math.floor(Math.random() * status.length)];
    };

    const priceShipping = (totalAmount > 1000000) ? 0 : totalAmount * 0.01;

    const handlePayment = async (): Promise<void> => {
        let paymentMethod: string;
        switch (value) {
            case 1:
                paymentMethod = "Thanh toán khi nhận hàng";
                break;
            case 2:
                paymentMethod = "Thanh toán bằng ví điện tử Momo";
                break;
            case 3:
                paymentMethod = "Thanh toán bằng ví BKPay";
                break;
            default:
                paymentMethod = "Phương thức thanh toán không hợp lệ";
        }

        if (data.length === 0) {
            alert('Không có sản phẩm nào được chọn');
            return;
        }
        else if (!address) {
            alert('Vui lòng nhập địa chỉ giao hàng');
        }
        else {
            try {
                const orderRequest: OrderRequest = {
                    cartItems: data.map(item => ({
                        productId: item.productId,
                        quantity: item.quantity
                    })),
                    shippingAddress: address,
                    paymentMethod: paymentMethod,
                    orderStatus: randomOrderStatus(),
                };

                const response = await axios.post(
                    `${process.env.REACT_APP_ORDER_MS_URL}/orders/create-order`,
                    orderRequest,
                    {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    }
                );

                if (response.status === 201) {
                    localStorage.setItem('address', address);
                    alert('Đơn hàng của bạn đã được ghi nhận');
                    if (paymentType === 'byCart') {
                        // dispatch(clearCart());
                    }
                    handleNavigate('/')();
                }
                else {
                    console.log('Đặt hàng thất bại');
                }
            } catch (error) {
                console.error('Đã xảy ra lỗi khi gửi request:', error);
            }
        }
    };

    return (
        <div>
            <WrapperRow>
                <WrapperCol>
                    <div>
                        <div className="list-item">
                            <WrapperTable
                                pagination={{ pageSize: 4 }}
                                dataSource={data.map((item, index) => ({
                                    ...item,
                                    key: index
                                }))}
                            >
                                <WrapperColumn
                                    title="Danh sách sản phẩm"
                                    dataIndex="productName"
                                    key="productId"
                                    width="70%"
                                    render={(text: string, record: any, index: number) => {
                                        const recordProductItem = record as ProductItem;

                                        return <div style={{ display: 'flex', position: 'relative' }}>
                                            <img src={recordProductItem.imageUrl} alt={recordProductItem.productName} style={{ marginRight: '5px', width: '80px', height: 'auto' }} />
                                            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                                                <span style={{ display: 'block' }}>{text}</span>
                                            </div>
                                        </div>;
                                    }}
                                />
                                <WrapperColumn
                                    title="Số lượng"
                                    dataIndex="quantity"
                                    key="productId"
                                    width="30%"
                                    render={(text: number) => (
                                        <span style={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}>{text}</span>
                                    )}
                                />
                            </WrapperTable>
                            <WrapperButton
                                onClick={handleNavigate('/shopping-cart/:id')}
                                icon={<ArrowLeftOutlined />}
                                size="large"
                                textButton="Quay lại giỏ hàng"
                                htmlType="submit"
                                styleButton={{ marginTop: '5px', width: '40%' }}
                            />
                        </div>
                        <div style={{ backgroundColor: 'white', border: '1px solid black', marginTop: '20px' }}>
                            <WrapperRowList>
                                <WrapperColList>Tổng phụ:</WrapperColList>
                                <WrapperColList>{formatPrice(totalAmount)}</WrapperColList>
                            </WrapperRowList>
                            <WrapperRowList>
                                <WrapperColList>Phí vận chuyển:</WrapperColList>
                                <WrapperColList>{formatPrice(priceShipping)}</WrapperColList>
                            </WrapperRowList>
                            <WrapperRowList>
                                <WrapperColList>Tổng cuối cùng:</WrapperColList>
                                <WrapperColList>{formatPrice(totalAmount + priceShipping)}</WrapperColList>
                            </WrapperRowList>
                        </div>
                    </div>
                </WrapperCol>
                <WrapperCol>
                    <WrapperForm
                        name="payment"
                        initialValues={{ remember: true }}
                        onFinish={handlePayment}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <WrapperTitle>Thông tin đặt hàng</WrapperTitle>
                        <WrapperInputAccount
                            size="large"
                            label="Tên người đặt hàng"
                            value={userInfor.Fullname}
                        />
                        <WrapperInputAccount
                            size="large"
                            label="Số điện thoại"
                            value={userInfor.PhoneNumber}
                        />
                        <WrapperInputAccount
                            size="large"
                            label="Email"
                            value={userInfor.Email}
                        />
                        <WrapperInputAccount
                            size="large"
                            label="Địa chỉ giao hàng"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                        <WrapperPaymentMethod>
                            <span style={{ fontSize: '20px', fontWeight: '500', color: '#008477' }}>Chọn phương thức thanh toán</span>
                            <div>
                                <Radio.Group onChange={handleonChange} value={value}>
                                    <Space direction="vertical">
                                        <WrapperRadio value={1}>Thanh toán khi nhận hàng</WrapperRadio>
                                        <WrapperRadio value={2}>Thanh toán bằng ví điện tử Momo</WrapperRadio>
                                        <WrapperRadio value={3}>Thanh toán bằng ví BKPay</WrapperRadio>
                                    </Space>
                                </Radio.Group>
                            </div>
                        </WrapperPaymentMethod>
                        <Form.Item>
                            <WrapperButton
                                size="large"
                                textButton="Thanh toán"
                                type="primary"
                                htmlType="submit"
                                styleButton={{ marginTop: '30px', height: 'fit-content', width: '100%' }}
                            />
                        </Form.Item>
                    </WrapperForm>
                </WrapperCol>
            </WrapperRow>
        </div>
    );
};

export default PaymentComponent;