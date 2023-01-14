import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {authSlice} from '../auth/authSlice';
import {cartSlice} from '../cart/cartSlice';
import {uiSlice} from '../ui/uiSlice'
import {productSlice} from '../produts/productSlice';


const AllActions = {
  ...authSlice.actions,
  ...cartSlice.actions,
  ...uiSlice.actions,
  ...productSlice.actions,
};

const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(AllActions, dispatch);
};

export default useActions;
