import React from 'react';
import {connect} from 'react-redux';
import {addToCart} from '../../store/actions/cart-actions';

function collectionItem({item,addToCart}) {

    const style={'backgroundImage':`url(${item.imageUrl})`};

    return (
        <div className='collection-item'>
            <div className='collection-item__img' style={style}><span onClick={()=>addToCart(item)}>Add to cart</span></div>
            <div className="collection-item__label">
                <span>{item.name}</span><span>{item.price}</span>
                </div>
        </div>
    )
}
const mapDispatchToProps=dispatch=>{
    return{
        addToCart:(item)=>{dispatch(addToCart(item))}
    }
}
export default connect(null,mapDispatchToProps)(collectionItem);
