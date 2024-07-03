import React from 'react'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { Link } from 'react-router-dom';

function Payment() {
    const [{basket,user},dispatch]=useStateValue();
  return (
    <div className='payment'>
      <div className="payment_container">
        <h1>
            Checkout
            ( <Link to="/checkout">{basket?.length} items </Link>)
        </h1>
        <div className="payment_section">
            <div className="payment_title">
                <h3>Delivery Address</h3>
            </div>
            <div className="payment_Address">
                <p>{user?.email}</p>
                <p>123 React Lane</p>
                <p>Vaaransi, UttarPrades</p>
            </div>
        </div>

        <div className="payment_section">
            <div className="payment_title">
                <h3>Review items and delivery</h3>
            </div>
            <div className="payment_items">
                {basket.map(item=>(
                    <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        image={item.image}
                        rating={item.rating}
                    />
                ))}
            </div>
        </div>

        <div className="payment_section">
            <div className="payment_title">
                <h3>Payment Method</h3>
            </div>
            <div className='pyment_details'>

            </div>

        </div>
      </div>
    </div>
  )
}

export default Payment
