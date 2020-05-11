import userReducer from './userReducer';
import {combineReducers} from 'redux';
import cartReducer from './cartReducer';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import itemReducer from './itemReducer';

const rootReducer =combineReducers({
    user:userReducer,
    cart:cartReducer,
    item:itemReducer

})

const persistConfig={
    key:'root',
    storage,
    whitelist:['cart']
}

export default persistReducer(persistConfig,rootReducer);
