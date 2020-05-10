import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

function paymentButon({total}) {

    const publisable_key='pk_test_XL7um4LT4QTJeGbr4EUGotXT00bk0xvFkK';
    const priceForStripe=total*100;
    const onToken=(token)=>{
        console.log(token)
        alert('thank you !!! payment was successful')
    }
    return (
        <StripeCheckout
        label='Pay Now'
        name='Corner E-Commerce'
        billingAddress
        shippingAddress
        description={`your total is ${total}$`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publisable_key}
        />
    )
}

export default paymentButon
