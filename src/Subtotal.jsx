import React from 'react'
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css"
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './Reducer';

function Subtotal() {
    const [{basket},dispatch]=useStateValue();
  return (
    <div className='subtotal'>
        <CurrencyFormat
            renderText={(value)=>(
                <>
                    <span>Subtotal ({basket?.length} items): <strong>{value}</strong></span>
                    <small className='subtotal_gift'>
                        <input type="checkbox" /> This order contains gift
                    </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
        />
        <button>Proceed to subtotal</button>
    </div>
  )
}

export default Subtotal
 