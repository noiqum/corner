import React from 'react'
import {connect} from 'react-redux';
import {removeFromCartWithMsg} from '../../store/actions/cart-actions';

function basketItem({item,removeItem}) {
    return (
        <div className='basket-item'>
            <div className="basket-item__part img" style={{backgroundImage:`url(${item.imageUrl})`}}></div>
            <div className="basket-item__part">{item.name}</div>
            <div className="basket-item__part">{item.quantity}</div>
            <div className="basket-item__part">{item.price}$</div>
            <div onClick={()=>{removeItem(item)}} className="basket-item__part">&#10005;</div>
        </div>
    )
}

const mapDispatch=dispatch=>{
    return{
        removeItem:(item)=>{dispatch(removeFromCartWithMsg(item))}
    }
}

export default connect(null,mapDispatch)(basketItem)
