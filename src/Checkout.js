import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal'
function Checkout() {

    const [{basket, user },dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/TVs/Nireeksh/BankOfferMay25/D23679665_IN_HETV_Citi_25th-May_Stripe_1500x80.jpg"
                    />

            <div>
            <h3> Hello {user?.email}</h3>
                <h2 className="checkout__title">
                    Your Shopping Basket
                </h2>
            {basket.map(item =>(

                <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                >

                </CheckoutProduct>
            ))}

            </div>
            </div>

            <div className="checkout__right"></div>
            <Subtotal />
        </div>
    )
}

export default Checkout
