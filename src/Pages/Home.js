import React from 'react'
import Header from '../components/Header/Header';
import Productslist from '../components/Products/ProductsList';
import CartState from '../store/CartState'


export default function Home() {
  return (
    <CartState>

    <Header/>
    <Productslist/>
    </CartState>
  )
}