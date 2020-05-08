import {addItemToCart,getTotal} from '../../components/chart/chart.utils';


const initial_state={

    cart:[],
    basketClick:false,
    totalItems:null


}


const cartReducer=(state=initial_state,action)=>{
          switch (action.type) {
              case 'ADD_TO_CART':
            return{
                ...state,
                cart:addItemToCart(state.cart,action.item),
            
            }
            case 'BASKET_CLICK':
                return{
                    ...state,
                    basketClick:!state.basketClick
                }
          
              default:
                 return state;
          }
}


export default cartReducer;