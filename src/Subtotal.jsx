import React from 'react'
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css"
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './Reducer';
import {useNavigate} from 'react-router-dom';

function Subtotal() {
    const navigate = useNavigate();
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
        <button onClick={e=>navigate('/payment')}>Proceed to subtotal</button>
    </div>
  )
}

export default Subtotal
 