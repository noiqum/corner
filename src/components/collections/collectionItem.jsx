import React from 'react';
import {connect} from 'react-redux';
import {addToCart,addToCartWithMsg} from '../../store/actions/cart-actions';
import {withRouter} from 'react-router-dom'

function collectionItem({item,addToCart,currentUser,history}) {

    const addBtnHandle=()=>{
        if(currentUser){
            addToCart(item)
        }
        else{
            history.push('/signin')
        }
    }
    const style={'backgroundImage':`url(${item.imageUrl})`};

    return (
        <div className='collection-item'>
            <div className='collection-item__img' style={style}><span onClick={addBtnHandle}>Add to cart</span></div>
            <div className="collection-item__label">
                <span>{item.name}</span><span>{item.price}</span>
                </div>
        </div>
    )
}
const mapDispatchToProps=dispatch=>{
    return{
        addToCart:(item)=>{dispatch(addToCartWithMsg(item))}
    }
}
const mapStateToProps=state=>{
    return{
        currentUser:state.user.currentUser
    }
}
export default withRouter( connect(mapStateToProps,mapDispatchToProps)(collectionItem));
