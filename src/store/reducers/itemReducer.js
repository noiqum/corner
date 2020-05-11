const initial_state={
    selections:[],
    items:[]

}

 const itemReducer=(state=initial_state,action)=>{
    
        switch (action.type) {
            case 'GET_SELECTIONS':
                return{
                    ...state,
                    selections:action.selections
                };
            case 'GET_ITEMS':
                return{
                    ...state,
                    items:action.data
                }
            default:
                return state;
        }
    
}

export default itemReducer;