


export const addToCart=(item)=>{
    return{
        type:'ADD_TO_CART',
        item:item

    }
}

export const basketClick=()=>{
    return{
        type:'BASKET_CLICK',
        
    }
}