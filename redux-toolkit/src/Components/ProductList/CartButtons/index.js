import React, { useMemo } from 'react'
import BeforeCart from './BeforeCart'
import AfterCart from './AfterCart';
import { useSelector } from 'react-redux';

function CartButtons({product}) {
    const { cartList} = useSelector(state => state.cart);

    const cartCount = useMemo(()=>{ //usememo use only for example ...there is no need of usememo
        return cartList.find(item => item?.id === product?.id)?.count;
    },[cartList]);

    // const cartCount = cartList.find(item => item?.id === product?.id)?.count; //without useMemo
  return (
    <>
        {cartCount > 0 ? (
        <AfterCart  productID={product?.id} cartCount={cartCount}/>
        ) : (
        <BeforeCart product={product}/>
        )} 
    </>
  )
}

export default CartButtons
