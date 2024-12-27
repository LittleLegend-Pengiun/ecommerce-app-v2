import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SideBarAccountComponent from '../SideBarAccountComponent/SideBarAccountComponent';
import { Card, Divider, Row, Col, Image } from 'antd';
const { Meta } = Card;
import { formatPrice, reverveformatPrice } from '@/lib/utils/formater';
import { WrapperTextCol, WrapperTextDetail, WrapperColDetail, WrapperRowDetail } from './style';

// Define the types for the response data
interface Product {
    imageUrl: string;
    productName: string;
    price: number;
}

interface OrderDetail {
    product: Product;
    unitPrice: string;
    quantity: number;
}

interface Order {
    orderId: string;
    shippingAddress: string;
    orderDate: string;
    orderStatus: string;
}

interface OrderResponse {
    order: Order;
    details: OrderDetail[];
}

interface OrderedDetailComponentProps {
    orderId: string; // `orderId` is passed as a prop and should be typed as string
}

const OrderedDetailComponent: React.FC<OrderedDetailComponentProps> = ({ orderId }) => {
    const [orderdetail, setOrderdetail] = useState<OrderResponse | null>(null); // Typed as OrderResponse or null
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch data function
    const fetchData = async () => {
        try {
            const token = localStorage.getItem('token');
            const res = await axios.get(`${process.env.REACT_APP_ORDER_MS_URL}/orders?orderId=${orderId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
            setOrderdetail(res.data);
            setLoading(false);
        } catch (error: any) {
            setError(error.message);
            setLoading(false);
            console.error(error.message);
        }
    };

    useEffect(() => {
        fetchData();
    }, [orderId]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    // Calculate total price
    const total = orderdetail?.details.reduce(
        (total, detail) => total + reverveformatPrice(detail.unitPrice) * detail.quantity,
        0
    ) || 0;

    // Calculate shipping cost
    const shipping = total > 10000000 ? 0 : total * 0.01;

    return (
        <div style={{ display: 'flex' }}>
            <Col span={4}>
                <SideBarAccountComponent />
            </Col>
            <Col span={20} style={{ marginLeft: '20px' }}>
                <h2>Mã đơn hàng: {orderdetail?.order.orderId}</h2>
                <h2>Danh sách sản phẩm trong đơn hàng</h2>
                {orderdetail?.details.map((detail, index) => (
                    <div key={index} style={{ marginBottom: '20px' }}>
                        <Card>
                            <Meta
                                description={
                                    <div>
                                        <Row>
                                            <WrapperTextCol style={{ width: '15%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <Image width={100} height={100} src={detail.product.imageUrl} preview={false} />
                                            </WrapperTextCol>
                                            <WrapperTextCol style={{ width: '30%' }}>
                                                <p>
                                                    Tên sản phẩm: <WrapperTextDetail>{detail.product.productName}</WrapperTextDetail>
                                                </p>
                                            </WrapperTextCol>
                                            <WrapperTextCol style={{ width: '18%' }}>
                                                <p>
                                                    Giá: <WrapperTextDetail>{detail.product.price}</WrapperTextDetail>
                                                </p>
                                            </WrapperTextCol>
                                            <WrapperTextCol style={{ width: '12%' }}>
                                                <p>
                                                    Số lượng: <WrapperTextDetail>{detail.quantity}</WrapperTextDetail>
                                                </p>
                                            </WrapperTextCol>
                                            <WrapperTextCol style={{ width: '25%' }}>
                                                <p>
                                                    Tổng phụ: <WrapperTextDetail>{formatPrice(reverveformatPrice(detail.unitPrice) * detail.quantity)}</WrapperTextDetail>
                                                </p>
                                            </WrapperTextCol>
                                        </Row>
                                    </div>
                                }
                            />
                        </Card>
                        <Divider />
                    </div>
                ))}
                <div style={{ width: '100%', border: '1px solid black', padding: '10px', backgroundColor: 'white' }}>
                    <h2>Thông tin đơn hàng</h2>
                    <WrapperRowDetail>
                        <WrapperColDetail>Địa chỉ giao hàng:</WrapperColDetail>
                        <WrapperColDetail>{orderdetail?.order.shippingAddress}</WrapperColDetail>
                    </WrapperRowDetail>
                    <WrapperRowDetail>
                        <WrapperColDetail>Ngày đặt hàng:</WrapperColDetail>
                        <WrapperColDetail>{orderdetail?.order.orderDate}</WrapperColDetail>
                    </WrapperRowDetail>
                    <WrapperRowDetail>
                        <WrapperColDetail>Trạng thái đơn hàng:</WrapperColDetail>
                        <WrapperColDetail>{orderdetail?.order.orderStatus}</WrapperColDetail>
                    </WrapperRowDetail>
                    <WrapperRowDetail>
                        <WrapperColDetail>Phí vận chuyển:</WrapperColDetail>
                        <WrapperColDetail>{formatPrice(shipping)}</WrapperColDetail>
                    </WrapperRowDetail>
                    <WrapperRowDetail>
                        <WrapperColDetail>Tổng cộng:</WrapperColDetail>
                        <WrapperColDetail>{formatPrice(total - shipping)}</WrapperColDetail>
                    </WrapperRowDetail>
                    <WrapperRowDetail>
                        <WrapperColDetail>Phương thức thanh toán:</WrapperColDetail>
                        <WrapperColDetail>Thanh toán khi nhận hàng</WrapperColDetail>
                    </WrapperRowDetail>
                </div>
            </Col>
        </div>
    );
};

export default OrderedDetailComponent;