import React,{useState,useEffect} from 'react'
import { Row, Col,Image } from 'antd'
import imageProductSmall_1 from '../../assets/images/detail/small-1.webp'
import imageProductSmall_2 from '../../assets/images/detail/small-2.webp'
import imageProductSmall_3 from '../../assets/images/detail/small-3.webp'
import imageProductSmall_4 from '../../assets/images/detail/small-4.webp'
import imageProductSmall_5 from '../../assets/images/detail/small-5.webp'
import imageColor_vang from '../../assets/images/detail/color-vang.webp'
import imageColor_xanh_duong from '../../assets/images/detail/color-xanh-duong.webp'
import imageColor_xanh_la from '../../assets/images/detail/color-xanh-la.webp'
import imageColor_xam from '../../assets/images/detail/color-xam.webp'
import { 
    WrapperSmallImage,
    WrapperColImage,
    WrapperProductDescription ,
    WrapperTextReport,
    WrapperProductPrice,
    WrapperProductPriceText,
    WrapperQuantityProduct,
    WrapperInputQuantity,
    WrapperButtonQuantity,
    WrapperButton,
    WrapperBuyButton,
    WrapperAddCartButton,
    WrapperReleaseDate,
    WrapperContent,
    WrapperBackButton,
} from './style'
import { StarFilled ,PlusOutlined,MinusOutlined,ArrowLeftOutlined } from '@ant-design/icons'
import {formatPrice} from '../../formater/formater'
import logo from '../../assets/images/slider/logo.png'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../redux/slice/productSlice';
import { addToCart } from '../../redux/slice/shoppingCartSlice';
import { setProduct } from '../../redux/slice/directPaymentSlice'

const ProductDetailComponent = ({productID}) => {
    const username = localStorage.getItem('username');
    const navigate = useNavigate();
    const handleNavigate = (path) => {
        return () => {
            navigate(path);
        }
    }
    //State for quantity product
    const [quantity, setQuantity] = useState(1)
    const decreaseQuantity = () => { quantity > 1 && setQuantity(quantity - 1)}
    const increaseQuantity = (stockQuantity) => { quantity < stockQuantity && setQuantity(quantity + 1)}
    //State for product
    const [seletedProduct, setSeletedProduct] = useState({})
    const handleProductClick = (product) => {
        setSeletedProduct(product);
    }
    const dispatch = useDispatch();
    const allProducts = useSelector(state => state.products.data);
    useEffect(() => {
      dispatch(fetchProducts());
    }, [dispatch]);
    useEffect(() => {
        const product = allProducts.products.find((item) => item.productId == productID);
        if (product) {
            handleProductClick(product);
        }
    }, [productID,allProducts]);
    const handleAddToCart = (product,quantity) => {
        if (!username) {
            alert('Vui lòng đăng nhập để sử dụng giỏ hàng');
            handleNavigate('/sign-in').call();

            return;
        }
        else
        {
            if (quantity > product.stockQuantity) {
                alert('Số lượng trong kho không đủ');
                return;
            }
            else
            {
                dispatch(addToCart({product:product,quantity:quantity}));
                alert('Thêm vào giỏ hàng thành công');
            }
        }
    }
    const handleNavigatePayment = (type,product,quantity) => {
        if (!username) {
            alert('Vui lòng đăng nhập để mua hàng');
            handleNavigate('/sign-in').call();
            return;
        }
        else 
        {
            if (quantity > product.stockQuantity) {
                alert('Số lượng trong kho không đủ');
                return;
            }
            else
            {
                dispatch(setProduct({product:product,quantity:quantity}));
                navigate('/payment',{state:{type:type}});
            }
            

        }
    }
  return (
    <Row style={{padding:'16px',background:'white'}}>
        <Col span={10}>
            <WrapperBackButton
                icon={<ArrowLeftOutlined/>}
                onClick={handleNavigate('/')}
                size="large" 
                styleButton={{borderRadius:'0'}}
                textButton="Xem sản phẩm khác"
            />
            <Row style={{width:'100%',alignItems:'center',justifyContent:'center'}}>
                <Image src={seletedProduct.imageUrl} alt="image-product" preview={false} style={{height:'500px'}}/>
            </Row>
            {/* <Row style={{paddingTop:'10px',justifyContent:'space-between'}}>
                <WrapperColImage span={4} style={{border:'2px solid #008477'}}> 
                    <WrapperSmallImage src={imageProductSmall_1} alt="image-product_small" preview={false}/> 
                </WrapperColImage>
                <WrapperColImage span={4}> 
                    <WrapperSmallImage src={imageProductSmall_2} alt="image-product_small" preview={false}/> 
                </WrapperColImage>
                <WrapperColImage span={4}> 
                    <WrapperSmallImage src={imageProductSmall_3} alt="image-product_small" preview={false}/> 
                </WrapperColImage>
                <WrapperColImage span={4}> 
                    <WrapperSmallImage src={imageProductSmall_4} alt="image-product_small" preview={false}/> 
                </WrapperColImage>
                <WrapperColImage span={4}> 
                    <WrapperSmallImage src={imageProductSmall_5} alt="image-product_small" preview={false}/> 
                </WrapperColImage>
            </Row> */}
        </Col>
        <Col span={14} style={{paddingLeft:'30px'}}>
            <img src={logo} alt="logo" preview="false"
                style={{width:'90px',height:'20px',borderTopLeftRadius:'3px'}}
            />
            <WrapperProductDescription>
                {seletedProduct.description}
            </WrapperProductDescription>
            <span style={{marginRight:'10px'}}>
            <WrapperTextReport style={{marginRight:'6px'}}>5.0</WrapperTextReport>
            <StarFilled style={{fontSize:'12px',color:'#ffad27'}}/>
            <StarFilled style={{fontSize:'12px',color:'#ffad27'}}/>
            <StarFilled style={{fontSize:'12px',color:'#ffad27'}}/>
            <StarFilled style={{fontSize:'12px',color:'#ffad27'}}/>
            <StarFilled style={{fontSize:'12px',color:'#ffad27'}}/>
            </span>
        <WrapperTextReport>Số lượng trong kho: <span><WrapperContent>({seletedProduct.stockQuantity})</WrapperContent></span> | Đã bán: <WrapperContent>{seletedProduct.soldQuantity}</WrapperContent></WrapperTextReport>
        <div style={{margin:'14px 0'}}>
            <WrapperReleaseDate>Ngày ra mắt: <WrapperContent>{seletedProduct.releaseDate}</WrapperContent></WrapperReleaseDate>
            <WrapperReleaseDate>Nhà sản xuất: <WrapperContent>{seletedProduct.manufacture}</WrapperContent></WrapperReleaseDate>
        </div>
            <WrapperProductPrice>
                <WrapperProductPriceText>{formatPrice(seletedProduct.price)}</WrapperProductPriceText>
            </WrapperProductPrice>
        <div> 
            {/* <span style={{fontSize:'18px'}}>Màu</span> */}
            {/* <Row style={{paddingTop:'10px',justifyContent:'space-between'}}>
                <WrapperColImage span={4} style={{border:'2px solid #008477'}}> 
                    <WrapperSmallImage src={imageColor_vang} alt="image-color" preview={false}/> 
                </WrapperColImage>
                <WrapperColImage span={4} style={{border:'1px solid #efefef'}}> 
                    <WrapperSmallImage src={imageColor_xanh_duong} alt="image-color" preview={false}/> 
                </WrapperColImage>
                <WrapperColImage span={4} style={{border:'1px solid #efefef'}}> 
                    <WrapperSmallImage src={imageColor_xanh_la} alt="image-color" preview={false}/> 
                </WrapperColImage>
                <WrapperColImage span={4} style={{border:'1px solid #efefef'}}> 
                    <WrapperSmallImage src={imageColor_xam} alt="image-color" preview={false}/> 
                </WrapperColImage>
            </Row> */}
        </div>
            <div style={{margin:'15px',fontSize:'20px',fontWeight:'500'}}>Số lượng</div>

            <div style={{display:'flex'}}>
                    <WrapperQuantityProduct>
                        <div style={{display:'flex'}}>
                            <WrapperButtonQuantity 
                                onClick={decreaseQuantity}                         
                                size="large"
                                styleButton={{borderRadius:'3px',border:'1px solid #efefef'}}
                                textButton={<MinusOutlined />}

                            />
                            <WrapperInputQuantity  value={quantity} size="large"/>
                            <WrapperButtonQuantity
                                onClick={()=>increaseQuantity(seletedProduct.stockQuantity)}
                                size="large"
                                styleButton={{borderRadius:'3px',border:'1px solid #efefef'}}
                                textButton={<PlusOutlined />}
                            />
                        </div>
                    </WrapperQuantityProduct>
                    <WrapperButton>
                            <WrapperAddCartButton
                                onClick={() => handleAddToCart(seletedProduct,quantity)}
                                size="large" 
                                styleButton={{borderRadius:'0'}}
                                textButton="Thêm vào giỏ hàng"
                            />
                            <WrapperBuyButton
                                onClick={()=>handleNavigatePayment('direct',seletedProduct,quantity)}
                                size="large" 
                                styleButton={{borderRadius:'0'}}
                                textButton="Mua ngay"
                                type="primary"
                            />
                    </WrapperButton>
            </div>
            <div>

            </div>
        </Col>
    </Row>
  )
}

export default ProductDetailComponent