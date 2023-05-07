import React from 'react'

import MainHeader from '../Components/Header/MainHeader'
import './Home.css'

import CartState from '../store/CartState'



export default function Home() {

  return (<>

    <CartState>

<MainHeader/>


</CartState>
<header>
        <h1>The Generics</h1>
        <button className="latest-album">Get Our Latest Albums</button>
        <button className="play-btn">►</button>
      </header>

      <section id="tours" class="container">
        <h2>TOURS</h2>
        <div>
          <div class="tour-item">
            <span class="tour-date">JUL16</span>
            <span class="tour-place">DETROIT, MI</span>
            <span class="tour-spec-place">DTE ENERGY MUSIC THEATRE</span>
            <button class="buy-btn">BUY TICKETS</button>
          </div>
          <div class="tour-item">
            <span class="tour-date">JUL19</span>
            <span class="tour-place">TORONTO,ON</span>
            <span class="tour-spec-place">BUDWEISER STAGE</span>
            <button class="buy-btn">BUY TICKETS</button>
          </div>
          <div class="tour-item">
            <span class="tour-date">JUL 22</span>
            <span class="tour-place"> BRISTOW, VA</span>
            <span class="tour-spec-place">JIGGY LUBE LIVE</span>
            <button class="buy-btn">BUY TICKETS</button>
          </div>
          <div class="tour-item">
            <span class="tour-date">JUL 29</span>
            <span class="tour-place">PHOENIX, AZ</span>
            <span class="tour-spec-place"> AK-CHIN PAVILION</span>
            <button class="buy-btn">BUY TICKETS</button>
          </div>
          <div class="tour-item">
            <span class="tour-date">AUG 2</span>
            <span class="tour-place">LAS VEGAS, NV</span>
            <span class="tour-spec-place">T-MOBILE ARENA</span>
            <button class="buy-btn">BUY TICKETS</button>
          </div>
          <div class="tour-item">
            <span class="tour-date">AUG 7</span>
            <span class="tour-place">CONCORD, CA</span>
            <span class="tour-spec-place"> CONCORD PAVILION</span>
            <button class="buy-btn">BUY TICKETS</button>
          </div>
        </div>
      </section>
      <footer>
        <div class="footer-title">The Generics</div>
        <div class="footer-icons">
          {/* <ul>
                <li><a href="https://www.youtube.com">
                    <img src="/img/6260efc8fc9a9002669d2f4ad9956cc0.jpg" alt="">
                </a></li>
                <li><a href="https://spotify.com">
                    <img src="/img/Spotify Logo.png" alt="">
                </a></li>
                <li><a href="https://facebook.com">
                    <img src="/img/Facebook Logo.png" alt="">
                </a></li>
            </ul> */}
        </div>
      </footer>
      </>
  );
}
