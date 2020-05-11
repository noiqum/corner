import React, { Component } from 'react';
import CollectionContainer from './collectionContainer';
import {connect} from 'react-redux';

export class jackets extends Component {

    

    render() {
        return (
            <div>
                 <CollectionContainer collection={this.props.storeData[1].items}/>
            </div>
        )
    }
}
const mapState=state=>{
    return{
        storeData:state.item.items
    }
}

export default connect(mapState)(jackets)
