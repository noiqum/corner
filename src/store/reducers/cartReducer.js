const initial_state={

    cart:[],
    basketClick:false


}


const cartReducer=(state=initial_state,action)=>{
          switch (action.type) {
              case 'ADD_TO_CART':
            return{
                ...state,
                ...state.cart,
                ...state.cart.push(action.item)
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