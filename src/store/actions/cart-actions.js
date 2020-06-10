import { toastr } from "react-redux-toastr"



export const addToCart=(item)=>{
    return{
        type:'ADD_TO_CART',
        item:item

    }
}

export const addToCartWithMsg=item=>{
    return dispatch=>{
        toastr.success('success','item added to cart')
        return dispatch(addToCart(item))
    }

}

export const basketClick=()=>{
    return{
        type:'BASKET_CLICK',
        
    }
}

export const removeFromCart=(item)=>{
    return{
        type:'REMOVE_FROM_CART',
        item:item
    }
}

export const removeFromCartWithMsg=(item)=>{
    return dispatch=>{
        toastr.info('success','item removed !!!')
        return dispatch(removeFromCart(item))
    }
}