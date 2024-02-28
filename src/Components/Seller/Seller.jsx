import React from 'react'
import './seller.css'
import SellerProfile from './SellerProfile'

export default function Seller() {
  return (
    <section className='sellerComp'>
      <SellerProfile />
      <ul className='dataTime'>
        <li>Daily</li>
        <li className='weekly'>Weekly</li>
        <li>Monthly</li>
      </ul>
    </section>
  )
}
