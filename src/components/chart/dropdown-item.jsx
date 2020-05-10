import React from 'react'

function dropdownItem({item}) {
    return (
        <div className='dropdown-item'>
            
            <div className="dropdown-item__pic"
            style={{backgroundImage:`url(${item.imageUrl})`}}
            ></div>
            <span>{item.name}</span>
            <span>{item.quantity} X {`${item.price} $`}</span>
        </div>
    )
}

export default dropdownItem
