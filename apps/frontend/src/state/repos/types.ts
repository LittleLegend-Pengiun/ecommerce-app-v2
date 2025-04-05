// Cart

type Product = {
  id: number;
  productName: string;
  description: string;
  price: number;
  imageUrl: string;
  quantity: number;
  manufacturer: string;
  releaseDate: string;
  soldQuantity: number;
  categoryList: Category[];
};

type Category = {
  id: number;
  name: string;
};

type CartItem = Product & {
  cartQuantity: number;
};

type Cart = CartItem[];

type User = {
  isLogin: boolean;
  fullname: string;
  email: string;
}