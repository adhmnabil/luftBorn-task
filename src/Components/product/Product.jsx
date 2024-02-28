import React from 'react'
import './product.css'
export default function Product({category , price , desc , count}) {
  return (
    <section className='main-product'>
    <section className='product'>
       <div className='product-head'>
        <h2>{category}</h2>
        <ul className='menu'>
        <li></li>
        <li></li>
        <li></li>
        </ul>
        </div> 
        <section className='price-desc-cont'>
        <section className='price'>
            <p>{price}$</p>
        </section>
        <section className='desc-count'>
        <p>{desc}</p>
        <div className='count'>
            <span>In-store</span>
            <span>{count}</span>
        </div>
        </section>
        </section>
    </section>
    </section>
  )
}
