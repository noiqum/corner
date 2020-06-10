import userReducer from './userReducer';
import {combineReducers} from 'redux';
import cartReducer from './cartReducer';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import itemReducer from './itemReducer';
import {reducer as toastrReducer} from 'react-redux-toastr';

const rootReducer =combineReducers({
    user:userReducer,
    cart:cartReducer,
    item:itemReducer,
    toastr:toastrReducer

})

const persistConfig={
    key:'root',
    storage,
    whitelist:['cart','item']
}

export default persistReducer(persistConfig,rootReducer);
