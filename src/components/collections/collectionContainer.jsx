import React from 'react';
import CollectionItem from './collectionItem';

function collectionContainer({collection}) {
    return (
        <div className='collection-container'>
            {
                collection.map(item=>{
                    return <CollectionItem  key={item.id} item={item}/>
                })
            }
            
        </div>
    )
}

export default collectionContainer
