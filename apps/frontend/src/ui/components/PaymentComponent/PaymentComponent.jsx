import React,{useState,useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation,useNavigate } from 'react-router-dom';
import axios from 'axios';
import {formatPrice} from '../../formater/formater';
import { clearCart } from '../../redux/slice/shoppingCartSlice';
import { Radio, Space,Form } from 'antd';
import {ArrowLeftOutlined} from '@ant-design/icons';
import {
    WrapperRow,WrapperCol,WrapperForm,WrapperColumn,
    WrapperTable,WrapperRowList,WrapperColList,
    WrapperPaymentMethod,WrapperRadio,WrapperButton,
    WrapperInputAccount,WrapperTitle,
  } from './style'

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const PaymentComponent = () => {
    const oldAddress = localStorage.getItem('address');
    const [address,setAddress] = useState(oldAddress);
    const [userInfor,setUserInfor] = useState({});
    const [data,setData] = useState([]);
    const [value,setValue] = useState(1);
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const paymentType = location.state.type;
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    const itemByDirect = useSelector((state) => state.payment.item).map(
        (item) => ({...item, quantity: useSelector((state) => state.payment.quantity)})
        );
    const totalAmountByDirect = useSelector((state) => state.payment.amount);
    const totalAmountByCart = useSelector((state) => state.cart.totalAmount);
    const itemByCart = useSelector((state) => state.cart.cartItems);
    const totalAmount = (paymentType === 'direct') ? totalAmountByDirect : totalAmountByCart;
    const paymentItems = (paymentType === 'direct') ? itemByDirect : itemByCart;
    console.log('oldAddress',oldAddress);
    useEffect(() => {
        if (paymentItems.length > 0) {
            setData(paymentItems);
        }
    }, []);
    useEffect(() => {
        fetchUserInfor();
    },[]);
    const fetchUserInfor = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_AUTHEN_MS_URL}/user?username=${username}`, 
            {
              headers: 
              {
                'Authorization': `Bearer ${token}`
              },
            });
            setUserInfor(res.data.User_info);
          } catch (error) {
            console.log('error',error.response);
          }
        }
    const handleNavigate = (path)=> {
        return () => {
          navigate(path);
        }
      }
    
    const handleonChange = (e) => {
    setValue(e.target.value);
  };
    const randomOrderStatus = () => {
        const status = ['SUCCESS', 'PENDING', 'CANCELED','DELIVERING'];
        return status[Math.floor(Math.random() * status.length)];
    };
    const priceShipping = (totalAmount > 1000000) ? 0 : totalAmount*0.01;
    const handlePayment = async () => {
        let paymentMethod;
        switch (value) {
            case 1:
                paymentMethod = "Thanh toán khi nhận hàng";
                break;
            case 2:
                paymentMethod ="Thanh toán bằng ví điện tử Momo";
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
                const response = await axios.post(
                    `${process.env.REACT_APP_ORDER_MS_URL}/orders/create-order`, 
                    {
                        "cartItems": data.map(item => ({
                            "productId": item.productId,
                            "quantity": item.quantity
                        })),
                        "shippingAddress": address,
                        "paymentMethod": paymentMethod,
                        "orderStatus": randomOrderStatus(),
                    },
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
                        dispatch(clearCart());
                    }
                    handleNavigate('/').call();
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
                                dataSource={data.map((item,index)=>({
                                ...item,
                                key: index
                                }))
                                }
                            >
                                <WrapperColumn title="Danh sách sản phẩm" dataIndex="productName" key="productId" width="70%"
                                render={(text, record) => (
                                <div style={{ display: 'flex', position: 'relative' }}>
                                    <img src={record.imageUrl} alt={record.productName} style={{ marginRight: '5px', width: '80px', height: 'auto' }} />
                                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                                        <span style={{ display: 'block' }}>{text}</span>
                                    </div>
                                </div>
                            )}
                                />  
                                <WrapperColumn title="Số lượng" dataIndex="quantity" key="productId" width="30%"
                                render={(text) => (
                                    <span style={{textAlign:'center',display:'flex',justifyContent:'center'}}
                                    >{text}</span>
                                )}
                                />
                            </WrapperTable>
                                <WrapperButton
                                    onClick={handleNavigate('/shopping-cart/:id')}
                                    icon={<ArrowLeftOutlined />}
                                    size="large"
                                    textButton="Quay lại giỏ hàng"
                                    htmlType="submit"
                                    styleButton={{marginTop:'5px',width:'40%'}}
                                ></WrapperButton>
                        </div>
                        <div style={{backgroundColor:'white',border:'1px solid black',marginTop:'20px'}}>
                            <WrapperRowList>
                                <WrapperColList>
                                Tổng phụ:
                                </WrapperColList>
                                <WrapperColList>
                                {formatPrice(totalAmount)}
                                </WrapperColList>
                            </WrapperRowList>

                            <WrapperRowList>
                                <WrapperColList>
                                Phí vận chuyển:
                                </WrapperColList>
                                <WrapperColList>
                                {formatPrice(priceShipping)}
                                </WrapperColList>
                            </WrapperRowList>
                            <WrapperRowList>
                                <WrapperColList>
                                Tổng cuối cùng:
                                </WrapperColList>
                                <WrapperColList>
                                {formatPrice(totalAmount+priceShipping)}
                                </WrapperColList>
                            </WrapperRowList>
                        </div>
                    </div>
            </WrapperCol>
            <WrapperCol>
                <WrapperForm 
                        name="payment"
                        initialValues=
                        {{
                            remember: true,
                        }}
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
                            <span style={{fontSize:'20px',fontWeight:'500',color:'#008477'}}>Chọn phương thức thanh toán</span>
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
                    styleButton={{marginTop:'30px',height:'fit-content',width:'100%'}}
                >
                </WrapperButton>
                </Form.Item>
                </WrapperForm>
                
            </WrapperCol>
        </WrapperRow>
                   
    </div>
  )
}

export default PaymentComponent