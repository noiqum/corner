import userReducer from './userReducer';
import {combineReducers} from 'redux';
import cartReducer from './cartReducer';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer =combineReducers({
    user:userReducer,
    cart:cartReducer

})

const persistConfig={
    key:'root',
    storage,
    whitelist:['cart']
}

export default persistReducer(persistConfig,rootReducer);
