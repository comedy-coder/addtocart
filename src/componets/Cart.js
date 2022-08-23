import React from 'react'
import { useState } from 'react';
const Cart = ({state,dispatch}) => {
    const {cart} = state;
    const [total,setTotal] = useState(0)
  return (
    <div className='cart' style={{
            display: 'flex',
            flexDirection: "column",
            alignItems : 'center',
            margin: 10,
            padding : 10,
            backgroundColor :"#ecece",
            width : '20%'
        }}>
        <b style={{fontSize: 30, alignSelf: "center",}}>Cart</b>
        <b style={{ alignSelf: "center",}}>Subtotal : ${total}</b>
        {cart.lenght > 0 ? (<></>) : (
            <div>Cart is empty </div>
        )}
        </div>
  )
}

export default Cart