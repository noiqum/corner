import React, { Component } from 'react';
import CollectionContainer from './collectionContainer';
import ShopData from '../data/shop-data';

export class hats extends Component {

    state={
        data:ShopData
    }


    render() {
        return (
            <div>
                <CollectionContainer collection={this.state.data[0].items}/>
            </div>
        )
    }
}

export default hats
