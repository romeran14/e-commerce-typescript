import { FC } from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { CartProducts } from '../../../../store/cart/interface';
import useActions from '../../../../store/hooks/useActions';
import AddToCartBtn from './AddToCartBtn';
import RemoveFromCartBtn from './RemoveFromCartBtn';

const CartItem: FC<CartProducts> = ({ product: { price, thumbnail, title }, quantity, id }) => {
  const { deleteCartItem } = useActions();

  return (
    <div className='cart-item'>
      <div className='cart-item__pic'>
        <img src={thumbnail} alt={title} />
      </div>
      <div className='cart-item__info'>
        <div className='cart-item__title'>{title}</div>
        <div className='cart-item__price'>{price}$</div>
        <div className='cart-item__controls'>
          <div className='cart-item__count'>
            <RemoveFromCartBtn id={id}>-</RemoveFromCartBtn>
            <span>{quantity}</span>
            <AddToCartBtn id={id}>+</AddToCartBtn>
          </div>
          <div
            className='cart-item__delete'
            onClick={() => deleteCartItem(id)}
            onKeyDown={() => deleteCartItem(id)}
            role='button'
            tabIndex={0}
          >
            <DeleteOutlineIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
