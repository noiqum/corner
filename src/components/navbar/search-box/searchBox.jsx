import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchIcon from '../../icons/search-icon'


export class searchBox extends Component {

    state={
        items:['br','jj','kk'],
        suggestions:[]
    }

    

    render() {
        
      
        return (
            <div className="navbar-lg__search">
                    <form action="" className="navbar-lg__search__form">
                        <input type="text" className="navbar-lg__search__form__input"/>
                        <button className="navbar-lg__search__button">
                            <SearchIcon/>
                        </button>
                        {this.state.items.map((e,i)=>{
                            return <li key={i}>{e}</li>
                        })}
                    </form>
                </div>
        )
    }
}

const mapStateToProps = (state) => ({
    items:state.item.items
    
})

const mapDispatchToProps = dispatch=>{
    return{
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(searchBox)
