import React from 'react';
import {Link} from 'react-router-dom';

function item({item}) {
    return (
        <Link to={item.linkUrl}> 
        <div className='item'>
                <img src={item.imageUrl} alt="item"/>
                <span className="item__title">{item.title}</span>

        </div>
        </Link>
    )
}

export default item
