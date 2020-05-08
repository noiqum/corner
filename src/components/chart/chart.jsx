import React from 'react';
import {ReactComponent as ShoppingBag} from '../../css/images/SVG/bag.svg';
import {connect} from 'react-redux';

function chart({cart}) {
     let itemquantities=cart.map(elm=>{
        return elm.quantity
    })
    const getsum=(total,num)=>{
        return total+num;
    }

    let totalQuantity=itemquantities.reduce(getsum,0);
    return (
        <div className='chart'>
            <ShoppingBag/>
    <span className='item-count'>{totalQuantity !== 0 ? totalQuantity : 0}</span>
        </div>
    )
}
const mapState=state=>{
    return{
        cart:state.cart.cart
    }
}

export default connect(mapState)(chart)
