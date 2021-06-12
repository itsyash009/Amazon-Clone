import React from 'react'
import "./Home.css"
import Product from './Product'
function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
            className="home__image"
            />
            <div className="home__row">
            <Product 
                id="1"
                title ="Mi Smart Band 5 – India’s No. 1 Fitness Band"
                price ={2599}
                image="https://images-na.ssl-images-amazon.com/images/I/719ZywAmvOL._SL1500_.jpg"
                rating ={5}
            />
            <Product
            id="2"
            title="All-new Echo Dot (4th Gen) | #1 smart speaker brand in India with Alexa"
            price={3899}
            image="https://images-na.ssl-images-amazon.com/images/I/61Z5bOhKKAL._SL1000_.jpg"
            rating ={4}
             />
            </div>
            <div className="home__row">
            <Product 
                id="3"
            title="Armani Exchange Chronograph Men's Watch (Black Dial)"
            price={15495}
            image="https://images-na.ssl-images-amazon.com/images/I/81NGNzug1wL._UL1500_.jpg"
            rating ={3}
            />
            <Product 
                id="4"
            title="Adidas Men's Jest M Running Shoe(for men)"
            price={2299}
            image="https://images-na.ssl-images-amazon.com/images/I/81NKoiFz1uL._UL1500_.jpg"
            rating ={4}
            />
            <Product 
                id="5"
            title="Allen Solly Men's Solid Slim Fit Casual Shirt"
            price={1399}
            image="https://images-na.ssl-images-amazon.com/images/I/81R6FKlNmpL._UL1500_.jpg"
            rating ={5}
            />
            </div>
            <div className="home__row">
                <Product
                id="6"
            title="New Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 512GB SSD) - Space Grey (Latest Model)"
            price={135790.00}
            image="https://images-na.ssl-images-amazon.com/images/I/71an9eiBxpL._SL1500_.jpg"
            rating ={5} />
                
      
            </div>
            </div>
        </div>
    )
}

export default Home
