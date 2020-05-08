import React from 'react'

function dropdownItem({item}) {
    return (
        <div className='dropdown-item'>
            <span>{item.name}</span>
            <div className="dropdown-item__pic"
            style={{backgroundImage:`url(${item.imageUrl})`}}
            ></div>
            <span>{`${item.price} $`}</span>
        </div>
    )
}

export default dropdownItem
