import React, { Component } from 'react'
import { connect } from 'react-redux'
import BasketItem from './basket-item';
import PaymentButton from '../stripe/payment-button';

export class basket extends Component {

    items=this.props.cart;
    itemsPrice=this.items.map(item=>{
        return item.price
    })
    total=this.itemsPrice.reduce((acc,num)=>{
        return acc+num
    },0)


    render() {
        return (
            <div className='basket'>
                <div className="basket__header">
                    <div className="basket__header__block"><span>product</span></div>
                    <div className="basket__header__block"><span>description</span></div>
                    <div className="basket__header__block"><span>quantity</span></div>
                    <div className="basket__header__block"><span>price</span></div>
                    <div className="basket__header__block"><span>remove</span></div>
                </div>
                {this.props.cart.length ?
                        this.props.cart.map(item=>{
                            return <BasketItem key={item.id} item={item}/>
                        })
                        
                : 'there is nothing at the basket yet'
            }
            <div className="basket__total">total:{this.total}$</div>
            {this.total !==0 ?
            <div className='basket__payment'>
            <PaymentButton total={this.total}/>
            <div style={{color:'red',fontSize:'16px'}}>Please use 4242 4242 4242 4242 for card number , EXP:08/21 and CVC:123</div>
            </div>:
            null }
            
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

    cart:state.cart.cart
    
})

const mapDispatchToProps =dispatch=> {
    return{
    
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(basket)
