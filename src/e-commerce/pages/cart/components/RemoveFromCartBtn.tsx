import { FC } from 'react';
import useActions from '../../../../store/hooks/useActions';

interface RemoveFromCartBtnProps {
  id: number;
  children?: React.ReactNode;
}

const RemoveFromCartBtn: FC<RemoveFromCartBtnProps> = ({ id, children }) => {
  const { removeFromCartProduct } = useActions();

  return (
    <button
      type='button'
      className='remove-from-cart-btn'
      data-product-id={id}
      onClick={() => removeFromCartProduct(id)}
      onKeyDown={() => removeFromCartProduct(id)}
    >
      {children}
    </button>
  );
};

export default RemoveFromCartBtn;
