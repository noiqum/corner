import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export class signin extends Component {
    render() {
        return (
            <div className='signin'>
                
                <input  required type="email" name="email" className="signin__email"/>
                <label htmlFor="email" className="signin__email__label">email</label>

                
                <input required type="password" name='password' className="signin__password"/>
                <label htmlFor="password" className="signin__password__label">password</label>

                <div className="signin__buttons">
                    <Link className='signin__buttons-register' to='/signup'>Register ?</Link>
                    <button className="signin__buttons-submit">Sign in</button>
                </div>
                
            </div>
        )
    }
}

export default signin
