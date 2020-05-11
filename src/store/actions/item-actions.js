
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