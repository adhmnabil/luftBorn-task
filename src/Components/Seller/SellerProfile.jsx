import React from 'react'
import './sellerProfile.css'

export default function SellerProfile() {
  return (
    <section className='sellerProfile'>
        <div className='img'>
        <img src="/Bitmap.png" alt="seller" />
        </div>
        <section className='reportsPart'>
        <p>Report For</p>
        <div className='spans'>
        <span>Best</span>
        <span>Sales</span>
        </div>
        </section>
    </section>
  )
}
