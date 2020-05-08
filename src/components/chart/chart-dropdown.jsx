import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import DropdownItem from './dropdown-item';

function chartDropdown({cart}) {
    return (
        <div className='dropdown'>
            <div className="dropdown__item">
                {cart.map(item=>{
                    return <DropdownItem  key={item.id} item={item}/>
                })}
            </div>
            <button  className="dropdown__button"><Link to='/basket'>Go to basket</Link></button>
        </div>
    )
}
const mapState=state=>{
    return{
        cart:state.cart.cart
    }
}

export default connect(mapState)(chartDropdown);
