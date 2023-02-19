import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img className='home_image'
            src='https://m.media-amazon.com/images/I/71N3Vmy5V4L._SX3000_.jpg' alt=''/>
        </div>

        <div className='home__row'>
            <Product  id="23443"
                      title = "Make Your Life A 10"
                      price = {29.99}
                      image="https://m.media-amazon.com/images/I/41JEb1b61zL._SX331_BO1,204,203,200_.jpg"
                      rating={5}/>

            <Product  id="23444"
                      title = "Precipice"
                      price = {29.99}
                      image="https://m.media-amazon.com/images/I/31G4ce-r84L._SX331_BO1,204,203,200_.jpg"
                      rating={5}/>
        </div>

        <div className='home__row'>
            <Product  id="23445"
                      title = "Doing Good Better: How Effective Altruism Can Help You Help Others"
                      price = {30.00}
                      image="https://m.media-amazon.com/images/I/51eJc8r9mDL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
                      rating={2}/>

            <Product  id="23446"
                      title = "Conflicts & War Failures of Global Leadership"
                      price = {29.99}
                      image="https://m.media-amazon.com/images/I/31MC1oaKPmL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
                      rating={5}/>
            
            <Product  id="23447"
                      title = "The Book of the Sun"
                      price = {45}
                      image="https://m.media-amazon.com/images/I/41aCcF9TNBL._SX331_BO1,204,203,200_.jpg"
                      rating={3}/>
            
        </div>

        <div className='home__row'>
            <Product  id="23448"
                      title = "POETIC PATH"
                      price = {29.99}
                      image="https://m.media-amazon.com/images/I/41E+IolzZHL._SX331_BO1,204,203,200_.jpg"
                      rating={5}/>
        </div>
    </div>
  )
}

export default Home
