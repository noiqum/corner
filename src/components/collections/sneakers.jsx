import React, { Component } from 'react';
import CollectionContainer from './collectionContainer';
import {connect} from 'react-redux';

export class sneakers extends Component {

    

    render() {
        return (
            <div>
                <CollectionContainer collection={this.props.storeData[3].items}/>
            </div>
        )
    }
}
const mapState=state=>{
    return{
        storeData:state.item.items
    }
}

export default connect(mapState)(sneakers)
