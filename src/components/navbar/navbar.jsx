import React, { Component } from 'react';
import SearchIcon from '../icons/search-icon';
import MenuIcon from '../icons/menu-icon';
import CrossIcon from '../icons/cross-icon';
import '../../css/sass/navbar.scss';


export class navbar extends Component {

    state={
        menuOpen:false

    }
    
  menuClick=()=>{
      const menuIcon=document.getElementById('menu-icon');
      const crossIcon=document.getElementById('cross-icon');
      const navbarSlide=document.getElementById('navbar__slide');
      
      if(!this.state.menuOpen){
          menuIcon.classList.add("trans");
          crossIcon.classList.add("trans-back");
          navbarSlide.classList.add('collapse');
          this.setState({
              menuOpen:true
          })
      }
      if(this.state.menuOpen){
          menuIcon.classList.remove("trans");
          crossIcon.classList.remove("trans-back");
          navbarSlide.classList.remove('collapse');
          this.setState({
              menuOpen:false
          })
      }
      
  }


    render() {
        return (
            <div className='navbar'>
                <div className="navbar__logo">Corner</div>
                <div className="navbar__search">
                    <form action="">
                    <input type="text" className="navbar__search__input"/>
                    <button className="navbar__search__button">
                        <SearchIcon/>
                    </button>
                    </form>
                </div>
                <div className="navbar__hamburger" onClick={this.menuClick}>
                   <input name='menu' type="checkbox" className="navbar__hamburger__checkbox"/>
                   <label htmlFor="menu" className="navbar__hamburger__label">
                       <MenuIcon/><CrossIcon/>
                   </label>
                </div>
                <div  id='navbar__slide'className="navbar__slide">
                    
                </div>
            </div>
        )
    }
}

export default navbar;
