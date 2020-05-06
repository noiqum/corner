import React, { Component } from 'react';
import SearchIcon from '../icons/search-icon';
import MenuIcon from '../icons/menu-icon';
import CrossIcon from '../icons/cross-icon';
import '../../css/sass/navbar.scss';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from '../../store/actions/user-actions';
import Chart from '../chart/chart';
import ChartDropdown from '../chart/chart-dropdown';
import {basketClick} from '../../store/actions/cart-actions';



export class navbar extends Component {

    state={
        menuOpen:false,
        currentUser:null

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

  basketClickHandle=()=>{
      this.props.basketClick()
  }

  signoutHandle=()=>{
      auth.signOut().then(

        this.setState({currentUser:null})
      )
  }

  unSubscribeFromAuth=null

    componentDidMount(){
    

       this.unSubscribeFromAuth= auth.onAuthStateChanged(user=>{
            this.setState({
                currentUser:user
            })
            const userOn={};
            userOn.uid=user.uid;
            userOn.email=user.email;
            
            this.props.setCurrentUser(userOn);
        })

        
    }

    componentWillUnmount(){
        this.unSubscribeFromAuth();
    }

    render() {
        return (<div>
            <div className='navbar'>
                <div className="navbar__logo"><Link to='/'>corner</Link></div>
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
                    <div className="navbar__slide__links">
                    {this.state.currentUser === null 
                    ?
                    <Link className='navbar__slide__link' onClick={this.menuClick} to="/signin">Sign In</Link>
                    :
                    <Link className="navbar__slide__link" onClick={this.signoutHandle} to='/'>Sign out</Link>
                    }
                    <Link className='navbar__slide__link' onClick={this.menuClick} to='/shop'> Shop</Link>
                    <Link className='navbar__slide__link' onClick={this.menuClick} to='/contact'>Contact</Link>
                    {this.state.currentUser === null
                    ?
                    null
                    :
                    <Link className='navbar-lg__link' onClick={this.menuClick} to='/user'><Chart/></Link>}
                    </div>
                </div>
            </div>
            {/* larger screen version//////////////////////////////////////////////////////////////////////////////////// */}

            <div className="navbar-lg">
                <div className="navbar-lg__logo"><Link to='/'>corner</Link></div>
                <div className="navbar-lg__search">
                    <form action="" className="navbar-lg__search__form">
                        <input type="text" className="navbar-lg__search__form__input"/>
                        <button className="navbar-lg__search__button">
                            <SearchIcon/>
                        </button>
                    </form>
                </div>
                <div className="navbar-lg__links">
                    {this.state.currentUser === null
                     ?
                    <Link className='navbar-lg__link' onClick={this.menuClick} to="/signin">Sign In</Link>
                    :
                    <Link  to='/'className="navbar-lg__link" onClick={this.signoutHandle}>Sign out</Link>}
                    <Link className='navbar-lg__link' onClick={this.menuClick} to='/shop'> Shop</Link>
                    <Link className='navbar-lg__link' onClick={this.menuClick} to='/contact'>Contact</Link>
                    {this.state.currentUser === null
                    ?
                    null
                    :
                    <div className='navbar-lg__link' onClick={this.basketClickHandle}><Chart/></div>}
                </div>
                {this.props.basket && <ChartDropdown/>}
            </div>
            </div>
        )
    }
}

const mapState=state=>{

    return{
        currentUser:state.user.currentUser,
        basket:state.cart.basketClick
    }
}

const mapDispatch=dispatch=>{
    return{
        setCurrentUser:(user)=>dispatch(setCurrentUser(user)),
        basketClick:()=>dispatch(basketClick())
    }
}

export default  connect(mapState,mapDispatch)(navbar);
