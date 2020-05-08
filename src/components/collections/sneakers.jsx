import React, { Component } from 'react';
import CollectionContainer from './collectionContainer';
import ShopData from '../data/shop-data';

export class sneakers extends Component {

    state={
        data:ShopData
    }

    render() {
        return (
            <div>
                <CollectionContainer collection={this.state.data[1].items}/>
            </div>
        )
    }
}

export default sneakers
