import React, { useState, useEffect } from "react";
import { Row, Col, Image } from "antd";
import {
    WrapperSmallImage,
    WrapperColImage,
    WrapperProductDescription,
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
} from "./style";
import { StarFilled, PlusOutlined, MinusOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { formatPrice } from "@/lib/utils/formater";
import logo from "@/assets/images/slider/logo.png";
import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from "react-redux";
// import { RootState } from "../../redux/store";
// import { fetchProducts } from "../../redux/slice/productSlice";
// import { addToCart } from "../../redux/slice/shoppingCartSlice";
// import { setProduct } from "../../redux/slice/directPaymentSlice";

interface Product {
    productId: string;
    imageUrl: string;
    description: string;
    stockQuantity: number;
    soldQuantity: number;
    releaseDate: string;
    manufacture: string;
    price: number;
}

interface Props {
    productID: string;
}

const ProductDetailComponent: React.FC<Props> = ({ productID }) => {
    const username = localStorage.getItem("username");
    const router = useRouter();
    const dispatch = useDispatch();

    const handleNavigate = (path: string) => {
        return () => {
            router.push(path);
        };
    };

    // State for quantity product
    const [quantity, setQuantity] = useState<number>(1);
    const decreaseQuantity = () => {
        quantity > 1 && setQuantity(quantity - 1);
    };
    const increaseQuantity = (stockQuantity: number) => {
        quantity < stockQuantity && setQuantity(quantity + 1);
    };

    // State for selected product
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const handleProductClick = (product: Product) => {
        setSelectedProduct(product);
    };

    // const allProducts = useSelector((state: RootState) => state.products.data);
    const allProducts: any[] = [];

    // useEffect(() => {
    //     dispatch(fetchProducts());
    // }, [dispatch]);

    // useEffect(() => {
    //     const product = allProducts.products?.find(
    //         (item: Product) => item.productId === productID
    //     );
    //     if (product) {
    //         handleProductClick(product);
    //     }
    // }, [productID, allProducts]);

    const handleAddToCart = (product: Product, quantity: number) => {
        if (!username) {
            alert("Vui lòng đăng nhập để sử dụng giỏ hàng");
            handleNavigate("/sign-in")();
            return;
        } else {
            if (quantity > product.stockQuantity) {
                alert("Số lượng trong kho không đủ");
                return;
            } else {
                // dispatch(addToCart({ product, quantity }));
                alert("Thêm vào giỏ hàng thành công");
            }
        }
    };

    const handleNavigatePayment = (type: string, product: Product, quantity: number) => {
        if (!username) {
            alert("Vui lòng đăng nhập để mua hàng");
            handleNavigate("/sign-in")();
            return;
        } else {
            if (quantity > product.stockQuantity) {
                alert("Số lượng trong kho không đủ");
                return;
            } else {
                // dispatch(setProduct({ product, quantity }));
                // router.push("/payment", { state: { type } });
            }
        }
    };

    return (
        <Row style={{ padding: "16px", background: "white" }}>
            <Col span={10}>
                <WrapperBackButton
                    icon={<ArrowLeftOutlined />}
                    onClick={handleNavigate("/")}
                    size="large"
                    styleButton={{ borderRadius: "0" }}
                    textButton="Xem sản phẩm khác"
                />
                <Row style={{ width: "100%", alignItems: "center", justifyContent: "center" }}>
                    <Image
                        src={selectedProduct?.imageUrl}
                        alt="image-product"
                        preview={false}
                        style={{ height: "500px" }}
                    />
                </Row>
            </Col>
            <Col span={14} style={{ paddingLeft: "30px" }}>
                <img
                    src={logo.src}
                    alt="logo"
                    style={{ width: "90px", height: "20px", borderTopLeftRadius: "3px" }}
                />
                <WrapperProductDescription>
                    {selectedProduct?.description}
                </WrapperProductDescription>
                <span style={{ marginRight: "10px" }}>
                    <WrapperTextReport style={{ marginRight: "6px" }}>5.0</WrapperTextReport>
                    {[...Array(5)].map((_, index) => (
                        <StarFilled key={index} style={{ fontSize: "12px", color: "#ffad27" }} />
                    ))}
                </span>
                <WrapperTextReport>
                    Số lượng trong kho:{" "}
                    <span>
                        <WrapperContent>({selectedProduct?.stockQuantity})</WrapperContent>
                    </span>{" "}
                    | Đã bán: <WrapperContent>{selectedProduct?.soldQuantity}</WrapperContent>
                </WrapperTextReport>
                <div style={{ margin: "14px 0" }}>
                    <WrapperReleaseDate>
                        Ngày ra mắt: <WrapperContent>{selectedProduct?.releaseDate}</WrapperContent>
                    </WrapperReleaseDate>
                    <WrapperReleaseDate>
                        Nhà sản xuất: <WrapperContent>{selectedProduct?.manufacture}</WrapperContent>
                    </WrapperReleaseDate>
                </div>
                <WrapperProductPrice>
                    <WrapperProductPriceText>
                        {selectedProduct ? formatPrice(selectedProduct.price) : ""}
                    </WrapperProductPriceText>
                </WrapperProductPrice>
                <div style={{ margin: "15px", fontSize: "20px", fontWeight: "500" }}>Số lượng</div>
                <div style={{ display: "flex" }}>
                    <WrapperQuantityProduct>
                        <div style={{ display: "flex" }}>
                            <WrapperButtonQuantity
                                onClick={decreaseQuantity}
                                size="large"
                                styleButton={{ borderRadius: "3px", border: "1px solid #efefef" }}
                                textButton="-"
                            />
                            <WrapperInputQuantity value={quantity} size="large" />
                            <WrapperButtonQuantity
                                onClick={() => increaseQuantity(selectedProduct?.stockQuantity || 0)}
                                size="large"
                                styleButton={{ borderRadius: "3px", border: "1px solid #efefef" }}
                                textButton="+"
                            />
                        </div>
                    </WrapperQuantityProduct>
                    <WrapperButton>
                        <WrapperAddCartButton
                            onClick={() => selectedProduct && handleAddToCart(selectedProduct, quantity)}
                            size="large"
                            styleButton={{ borderRadius: "0" }}
                            textButton="Thêm vào giỏ hàng"
                        />
                        <WrapperBuyButton
                            onClick={() =>
                                selectedProduct && handleNavigatePayment("direct", selectedProduct, quantity)
                            }
                            size="large"
                            styleButton={{ borderRadius: "0" }}
                            textButton="Mua ngay"
                            type="primary"
                        />
                    </WrapperButton>
                </div>
            </Col>
        </Row>
    );
};

export default ProductDetailComponent;
