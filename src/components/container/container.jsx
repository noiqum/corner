import React, { Component } from 'react';
import Sections from '../data/sections';
import Item from './item/item';


export class container extends Component {

    state={
        sections:Sections
    }

   
    render() {
        return (
            <div className='container'>
                <div className="container-mobile">
                    {this.state.sections.map(
                        item=>{
                           return <Item key={item.id} item={item}/>
                        }
                    )}
                </div>
                <div className="container-lg">
                {this.state.sections.map(
                        item=>{
                           return <Item key={item.id} item={item}/>
                        }
                    )}
                </div>
            </div>
        )
    }
}

export default container
