import { FC } from 'react';
import { Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import { Product } from '../../../../store/produts/interface';
import AddToCartBtn from '../../cart/components/AddToCartBtn';
import { useState } from 'react';

const ProductItem: FC<Product> = ({ id, title, price, rating, thumbnail }) =>{

  const [addToCartBtnState, setAddToCartBtnState] = useState(false)
  return (
    <div className='product-item'>
      <div className='product-pic'>
        <Link to={`/products/${String(id)}`}>
          <img src={thumbnail} alt={title} />
        </Link>
      </div>
      <div className='product-title'>
        <Link to={`/products/${String(id)}`}>{title}</Link>
      </div>
      <div className='product-price'>{price}$</div>
      <div className='product-info'>
        <div className='product-rating'>
          <StarIcon />
          {rating}
        </div>
        <div onClick={() => setAddToCartBtnState(true)} >
        <AddToCartBtn id={Number(id)}>{addToCartBtnState? 'Added to cart' : 'Add to Cart'}</AddToCartBtn>
        </div>
        
      </div>
    </div>
  );
} 

export default ProductItem;
