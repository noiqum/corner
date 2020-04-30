import React from 'react'

function container(props) {
    return (
        <div className='container'>
            {props.children}
        </div>
    )
}

export default container;
