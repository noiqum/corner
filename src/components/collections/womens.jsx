import React, { Component } from 'react';
import { connect } from 'react-redux';
import CollectionContainer from './collectionContainer';


export class womens extends Component {

    

    render() {
        return (
            <div>
                <CollectionContainer collection={this.props.storeData[4].items }/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    storeData:state.item.items
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(womens)
