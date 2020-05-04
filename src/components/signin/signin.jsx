import React, { Component } from 'react';
import {Link ,Redirect} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';


export class signin extends Component {

    state={
        email:'',
        password:'',
        signin:false,
        error:null
    }

    handleChange=(e)=>{
        const {name,value}=e.target;
        this.setState({
            [name]:value
        })
    }

    signHandle=()=>{
        //todo:form validation add//////////////////
        auth.signInWithEmailAndPassword(this.state.email,this.state.password).then(
          user => {
              if(user !== null || user !== undefined){
                  this.setState({signin:true})
              }else{
                  return null;
              }
          }
        )
        .catch(err=>
            this.setState({error:err}))
    }

    render() {
        return (
            <div className='signin'>
                
                <input  onChange={this.handleChange} required type="email" name="email" className="signin__email"/>
                <label htmlFor="email" className="signin__email__label">email</label>

                
                <input onChange={this.handleChange} required type="password" name='password' className="signin__password"/>
                <label htmlFor="password" className="signin__password__label">password</label>

                <div className="signin__buttons">
                    <Link className='signin__buttons-register' to='/signup'>Register ?</Link>
                    <button onClick={this.signHandle} className="signin__buttons-submit">Sign in</button>
                </div>
                {this.state.signin && <Redirect to='/'/>}
            </div>
        )
    }
}

export default signin
