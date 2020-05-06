import React from 'react';
import {Link} from 'react-router-dom';

function chartDropdown() {
    return (
        <div className='dropdown'>
            <div className="dropdown__item"></div>
            <button  className="dropdown__button"><Link to='/basket'>Go to basket</Link></button>
        </div>
    )
}

export default chartDropdown
