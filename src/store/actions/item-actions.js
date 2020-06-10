
import {firestore} from '../../firebase/firebase.utils';

export const getSelections=(selections)=>{
    return{
        type:'GET_SELECTIONS',
        selections:selections
    }
}

export const getItems =(data)=>{
    return{
        type:'GET_ITEMS',
        data:data
    }
}

export const getSectionsFromDB=()=>{
    return dispatch=>{
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
           dispatch(getSelections(arr))
           
       })
    }
}

export const getItemsFromDB=()=>{
    return dispatch=>{
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
                dispatch(getItems(itemsArr))
            })
        
    }
}