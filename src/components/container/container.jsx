import React, { Component } from 'react';
import Item from './item/item';
import {getSectionsFromDB,getItemsFromDB} from '../../store/actions/item-actions';
import {connect} from 'react-redux';


export class container extends Component {

    

    componentDidMount(){
       
        this.props.getSelectionsFromDB();
        this.props.getItemsFromDB();
       
    }
   
    render() {
        return (
            <div className='container'>
                <div className="container-mobile">
                    {this.props.selections === null ? 
                    <div>spinner</div>:
                    this.props.selections.map(
                        item=>{
                           return <Item key={item.id} item={item}/>
                        }
                    )}
                </div>
                <div className="container-lg">
                    {this.props.selections === null ? 
                    <div> spinner...</div>:
                    this.props.selections.map(
                        item=>{
                           return <Item key={item.id} item={item}/>
                        }
                    )}
                </div>
            </div>
        )
    }
}
const mapState=(state)=>{
   return{
       selections:state.item.selections,
       items:state.item.items
   }
}
const mapDispatch=dispatch=>{
    return{
        getSelectionsFromDB:()=>{dispatch(getSectionsFromDB())},
        getItemsFromDB:()=>{dispatch(getItemsFromDB())}
    }
}
export default connect(mapState,mapDispatch)(container)
