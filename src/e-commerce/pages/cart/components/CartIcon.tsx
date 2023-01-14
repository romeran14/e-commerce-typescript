import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useCartProductsSelector } from '../../../../store/cart/cartSlice';

const CartICon = () => {
  const products = useCartProductsSelector();

  return (
    <span className='cart-icon'>
      <ShoppingCartOutlinedIcon />
      <span className='cart-products-count'>{products.length}</span>
    </span>
  );
};

export default CartICon;
