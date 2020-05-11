import React, { Component } from 'react';
import { connect } from 'react-redux';
import CollectionContainer from './collectionContainer';
import ShopData from '../data/shop-data';


export class mens extends Component {

    
    render() {
        return (
            <div>
                <CollectionContainer collection={this.props.storeData[2].items}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
        storeData:state.item.items
})



export default connect(mapStateToProps)(mens)
