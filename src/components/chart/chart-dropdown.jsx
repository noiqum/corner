import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
import DropdownItem from './dropdown-item';
import {basketClick} from '../../store/actions/cart-actions';

function chartDropdown({cart,history,close}) {
    const basketHandle=()=>{
        history.push('/basket');
        close();
    }

    return (
        <div className='dropdown'>
            <div className="dropdown__item">
                {cart.map(item=>{
                    return <DropdownItem  key={item.id} item={item}/>
                })}
            </div>
            
            <button onClick={basketHandle} className="dropdown__button">go to basket</button>
        </div>
    )
}
const mapState=state=>{
    return{
        cart:state.cart.cart
    }
}
const mapDispatch=dispatch=>{
    return{
        close:()=>{dispatch(basketClick())}
    }
}

export default withRouter(connect(mapState,mapDispatch)(chartDropdown));
