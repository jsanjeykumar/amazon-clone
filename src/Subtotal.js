import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './context/StateProvider'
import { getBasketTotal } from './context/reducer'
import { useHistory } from 'react-router-dom'

function Subtotal () {
  const history = useHistory()
  const [{ basket }, dispatch] = useStateValue()
  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className='subtotal__gift'>
              <input type='checkbox' /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType='text'
        thousandSeparator
        prefix='$'
      />
      <button onClick={e => history.push('/payment')}>Proceed to checkout</button>
    </div>
  )
}

export default Subtotal
