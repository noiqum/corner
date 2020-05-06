import React from 'react';
import {connect} from 'react-redux';

function user({user}) {
    
    return (

        <div>
            {user.email}
            {user.uid}
        </div>
    )
}

const mapState=state=>{
    return{
        user:state.user.currentUser
    }
}


export default connect(mapState)(user);
