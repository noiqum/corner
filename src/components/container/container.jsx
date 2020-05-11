import React, { Component } from 'react';
import Item from './item/item';
import {firestore} from '../../firebase/firebase.utils';
import {getSelections,getItems} from '../../store/actions/item-actions';
import {connect} from 'react-redux';


export class container extends Component {

    

    componentDidMount(){
        const ref=firestore.collection('sections');
         ref.onSnapshot( async snapshot=>{
           const arr= snapshot.docs.map(doc=>{
                const {title,linkUrl,imageUrl}=doc.data()
                
               return {
                   title:title,
                   linkUrl:encodeURI(linkUrl.toLowerCase()),
                   imageUrl:imageUrl
               }
            })
            this.props.getSelectionsFromDB(arr)
            
        })

        const itemsRef=firestore.collection('items');
        itemsRef.onSnapshot(async snapshotItem=>{
                const itemsArr=snapshotItem.docs.map(
                    doc=>{
                        const {items}=doc.data();
                        return{
                            items:items,
                            title:doc.id
                        }
                    }
                )
                this.props.getItemsFromDB(itemsArr)
            })
        
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
        getSelectionsFromDB:(selections)=>{dispatch(getSelections(selections))},
        getItemsFromDB:(data)=>{dispatch(getItems(data))}
    }
}
export default connect(mapState,mapDispatch)(container)
