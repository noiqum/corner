import React from 'react';
import {ReactComponent as ShoppingBag} from '../../css/images/SVG/bag.svg'

function chart() {
    return (
        <div className='chart'>
            <ShoppingBag/>
            <span className='item-count'>11</span>
        </div>
    )
}

export default chart
