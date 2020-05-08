import React from 'react';
import Hats from './hats';
import Jackets from './jackets';
import Sneakers from './sneakers';
import Mens from './mens';
import Womens from './womens';
import {Redirect} from 'react-router-dom'
function collection(props) {

     const path=props.location.pathname;

    return (
        <div>
          {path === '/shop/hats' ? <Hats/> :
          path === '/shop/jackets' ? <Jackets/>:
          path === '/shop/sneakers' ? <Sneakers/>:
          path === '/shop/mens' ? <Mens/> :
          path === '/shop/womens' ? <Womens/>:
          <Redirect to='/'/>
          }
        </div>
    )
}

export default collection
