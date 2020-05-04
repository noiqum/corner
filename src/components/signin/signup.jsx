import React, { Component } from 'react';
import {auth} from '../../firebase/firebase.utils';
import {firestore} from '../../firebase/firebase.utils';
import {Redirect} from 'react-router-dom';

export class signup extends Component {


    state={
        name:'',
        email:'',
        password:'',
        error:null,
        signup:false,

    }

    handleChange=(e)=>{
        const {name,value}=e.target;
        this.setState({
            [name]:value
        })
    }

    signupHandle=()=>{
        // todo form validation add
        auth.createUserWithEmailAndPassword(this.state.email,this.state.password)
        .then(user=>{
            if(user !== null || user !== undefined){
                    const id=user.user.uid;
                    console.log(id)
                    firestore.collection('user').doc(id).set({
                        name:this.state.name,
                        email:this.state.email,
                        chart:[],
                        userId:id
                    })
                    this.setState({signup:true})
            }
        }).catch(err=>{
            this.setState({error:err})
        })
    }

    render() {
        return (
            <div className='signup'>

                <input  onChange={this.handleChange} required name='name' type="text" className="signup__name"/>
                <label htmlFor="name" className="signup__name__label">name</label>
                
                <input onChange={this.handleChange} required name='email' type="email" className="signup__email"/>
                <label htmlFor  ="email" className="signup__email__label">Email</label>

                <input onChange={this.handleChange} required type="password" name='password' className="signup__password"/>
                <label htmlFor="password" className="input__password__label">password</label>
            
                <button  onClick={this.signupHandle}  className="signup__submit">Sign up</button>
                {this.state.signup  && <Redirect to='/'/>}
            </div>
        )
    }
}

export default signup
