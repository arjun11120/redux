import React from 'react'
import products from '../../api/product.json'
import { useSelector} from 'react-redux';
import CartButtons from './CartButtons';

import "./ProductList.css";

const ProductList = () =>{
    const { cartList} = useSelector(state => state.cart);
    console.log(cartList);
    return (
    <section className='container'>
        {products?.map((product,key)=>(
            <div className='product-container' key={key}>
                <img src={product?.image} alt=''/>
                <h1>{product?.title}</h1>
               <CartButtons product={product}/>
            </div>
        ))}

    </section>
  )
}

export default ProductList
