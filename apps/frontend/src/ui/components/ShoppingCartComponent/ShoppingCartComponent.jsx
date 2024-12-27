import React,{useState,useEffect} from 'react'
import { Table} from 'antd';
import {formatPrice} from '../../formater/formater';
import {ArrowLeftOutlined} from '@ant-design/icons';
import { 
    WrapperTable,
    WrapperColumn,
    WrapperInput,
    WrapperButton,
    WrapperRow,
    WrapperCol,
    WrapperDeleteOutlined,
} from './style'
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { updateQuantity } from '../../redux/slice/shoppingCartSlice';
import { removeFromCart } from '../../redux/slice/shoppingCartSlice';


const ShoppingCartComponent = () => {
  const navigate = useNavigate();
  
  const handleNavigate = (path)=> {
    return () => {
      navigate(path);
    }
  }
  const dispatch = useDispatch();
  //get infor from redux
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const handleNavigatePayment = (type) => {

    if (totalQuantity === 0) {
      alert('Giỏ hàng của bạn đang trống');
      return;
    }

    navigate('/payment',{state:{type:type}});

  }
  //state
  const [data, setData] = useState(cartItems);
  const [amount, setamount] = useState(totalAmount);
  useEffect(() => {
    const updatedCartItems = cartItems.map(item => ({
        ...item,
        subtotal: item.price * item.quantity
    }));
    setData(updatedCartItems);
    const newTotalAmount = updatedCartItems.reduce((total, item) => total + item.subtotal, 0);
    setamount(newTotalAmount);
}, [cartItems, totalAmount]);
//function delete item from cart
    const handleDelete = (key) => {
      const deletedItem = data.find(item => item.productId === key);
      dispatch(removeFromCart({product:deletedItem,quantity:deletedItem.quantity}));
      const newData = data.filter(item => item.productId !== key);
      setData(newData);
      dispatch(updateQuantity(newData));
      const newTotalAmount = newData.reduce((total, item) => total + (item.price * item.quantity), 0);
      setamount(newTotalAmount);
    };
    const showDeleteConfirmation = (productId) => {
      if (window.confirm('Bạn có chắc chắn muốn xóa sản phẩm này khỏi giỏ hàng?')) {
        handleDelete(productId);
      }
    };
  //function update cart when change quantity
    const handleQuantityChange = (key, newQuantity) => 
    {
      const dataIndex = data.findIndex(item => item.productId === key);
      if (dataIndex === -1 || isNaN(newQuantity) || newQuantity < 0) {
          return;
      }
      if (parseInt(newQuantity, 10) === 0) {
        showDeleteConfirmation(key);
          return;
      }
      const stockQuantity = data[dataIndex].stockQuantity;
      if (parseInt(newQuantity, 10) > stockQuantity ) {
          alert('Số lượng sản phẩm không được vượt quá số lượng trong kho. \nSố lượng trong kho hiện tại là ' + stockQuantity);
          return;
      }

        const updatedProduct = { ...data[dataIndex], quantity: parseInt(newQuantity, 10) };
        const newData = [...data];
        newData[dataIndex] = updatedProduct;  
        setData(newData);
        dispatch(updateQuantity(newData));
        const newSubtotal = updatedProduct.price * updatedProduct.quantity;
        newData[dataIndex].subtotal = newSubtotal;

        const newTotalAmount = newData.reduce((total, item) => total + (item.price * item.quantity), 0);
        setamount(newTotalAmount);
  };
    const shippingFee = (amount > 1000000) ? 0 : amount*0.01;
    return (  
        <div>
          <WrapperTable 
            pagination={{ pageSize: 4 }}
            dataSource={data.map((item,index)=>({
              ...item,
              key: index
            }))
            }
          >
            <WrapperColumn title="Sản phẩm" dataIndex="productName" key="1" width="40%"
            render={(text, record) => (
              <div style={{ display: 'flex', position: 'relative' }}>
                  <img src={record.imageUrl} alt={record.product} style={{ marginRight: '5px', width: '80px', height: 'auto' }} />
                  <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                      <span style={{ display: 'block' }}>{text}</span>
                  </div>
              </div>
          )}
            />
            <WrapperColumn title="Giá" dataIndex="price" key="2" width="20%"
              render={(text) => 
                (formatPrice(text))
                }
            />
            <WrapperColumn 
                title="Số lượng" 
                dataIndex="quantity" 
                key="3"
                width="20%"
                render={(text, record) => (
                    <WrapperInput
                        type="number" 
                        value={text} 
                        onChange={(e) => handleQuantityChange(record.productId, e.target.value)} 
                    />
                )}
            />   
            <WrapperColumn title="Tổng" dataIndex="subtotal" key="4" width="20%"
             render={(text,record) => 
              (<div style={{display:'flex',justifyContent:'space-between'}}>
                {formatPrice(text)}
                <WrapperDeleteOutlined
                onClick={() => showDeleteConfirmation(record.productId)}
                />
              </div>)
              }
            />
        </WrapperTable>
          <div style={{display:'flex',justifyContent:'space-between',marginTop:'10px'}}>
              <div>
                  <WrapperButton
                  onClick={handleNavigate('/')}
                  icon={<ArrowLeftOutlined />}
                  size="large"
                  textButton="Tiếp tục mua sắm"
                  />
              </div>
              <div style={{display:'flex'}}>
                <WrapperButton
                onClick={() => handleNavigatePayment('byCart')}

                size="large"
                textButton="Đến trang thanh toán"
                type="primary"
                htmlType="submit"
                styleButton={{display:'block'}}
              />
              </div>
          </div>
          <div style={{display:'flex',marginTop:'20px',justifyContent:'space-between'}}>
            <div></div>
            <div style={{width:'50%',border:'1px solid black'}}>
              <div style={{backgroundColor:'white'}}>
                    <h1 style={{margin:0,padding:'10px',color:'#008477',fontSize:'20px'}}>Tổng tiền trong giỏ hàng</h1>
                    <WrapperRow>
                      <WrapperCol>
                        Tổng phụ:
                      </WrapperCol>
                      <WrapperCol>
                      {formatPrice(amount)}
                      </WrapperCol>
                      </WrapperRow>
                      <WrapperRow>
                      <WrapperCol>
                        Phí vận chuyển:
                      </WrapperCol>
                      <WrapperCol>
                        {formatPrice(shippingFee)}
                      </WrapperCol>
                    </WrapperRow> 
                    <WrapperRow>
                    <WrapperCol>
                      Tổng cuối cùng:
                    </WrapperCol>
                    <WrapperCol>
                    {formatPrice(amount+shippingFee)}
                    </WrapperCol>
                    </WrapperRow>
              </div>
            </div>
          </div>
        </div>
    );
};
export default ShoppingCartComponent
