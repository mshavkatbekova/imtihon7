import React from 'react'
import { Link } from 'react-router-dom'
import carousel1 from '../images/carousel1.webp'
import carousel2 from '../images/carousel2.webp'
import carousel3 from '../images/carousel3.webp'
import carousel4 from '../images/carousel4.webp'
import FeaturedProduct from './FeaturedProduct'
import { useFetch } from '../hooks/useFetch'

function Home() {
  const { data: products, isPending, error } = useFetch(
    'https://strapi-store-server.onrender.com/api/products?featured=true',
  )
  return (
    <>
      <div className="max-container flex">
        <div className="flex mt-24 mb-24 justify-between gap-60">
          <div>
            <h1 className="font-bold text-6xl mb-8 ">
              We are changing the way people shop
            </h1>
            <p className="mb-7 text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              repellat explicabo enim soluta temporibus asperiores aut obcaecati
              perferendis porro nobis.
            </p>
            <Link className="btn btn-info text-white" to="/products">
              Our Products
            </Link>
          </div>
          <div className="carousel carousel-center max-w-md h-[446px] w-full p-4 space-x-4 bg-neutral rounded-box ">
            <div className="carousel-item">
              <img src={carousel1} className="rounded-box" />
            </div>
            <div className="carousel-item">
              <img src={carousel2} className="rounded-box" />
            </div>
            <div className="carousel-item">
              <img src={carousel3} className="rounded-box" />
            </div>
            <div className="carousel-item">
              <img src={carousel4} className="rounded-box" />
            </div>
          </div>
        </div>
      </div>
      <div className="max-container">
        <h2 className="text-3xl font-medium mb-4">Featured Products</h2>
        <hr className="mb-9" />

        {products && <FeaturedProduct products={products} />}
      </div>
    </>
  )
}

export default Home
