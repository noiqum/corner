import React, { Component } from 'react';
import CollectionContainer from './collectionContainer';
import ShopData from '../data/shop-data';

export class jackets extends Component {

    state={
        data:ShopData
    }

    render() {
        return (
            <div>
                 <CollectionContainer collection={this.state.data[2].items}/>
            </div>
        )
    }
}

export default jackets
