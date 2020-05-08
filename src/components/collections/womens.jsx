import React, { Component } from 'react';
import { connect } from 'react-redux';
import CollectionContainer from './collectionContainer';
import ShopData from '../data/shop-data';

export class womens extends Component {

    state={
        data:ShopData
    }

    render() {
        return (
            <div>
                <CollectionContainer collection={this.state.data[3].items}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(womens)
