import React from 'react'
import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import Product from './Product'
function Products() {
  const { data: product, isPending, error } = useFetch(
    'https://strapi-store-server.onrender.com/api/products',
  )
  return (
    <div className="max-container mt-24">
      <div className="flex justify-between mb-16">
        <div>
          <p>Search Product</p>
          <input
            type="text"
            className="input input-bordered w-60 rounded input-sm"
          />
        </div>
        <div>
          <p>Search Category</p>
          <select className="select select-bordered select-sm py-0 w-60">
            <option disabled selected>
              all
            </option>
            <option>Tables</option>
            <option>Chairs</option>
            <option>Kids</option>
            <option>Sofas</option>
            <option>Beds</option>
          </select>
        </div>
        <div>
          <p>Search Company</p>
          <select className="select select-bordered select-sm py-0 w-60">
            <option disabled selected>
              all
            </option>
            <option>Modenza</option>
            <option>Luxora</option>
            <option>Artifex</option>
            <option>Comfora</option>
            <option>Homestead</option>
          </select>
        </div>
        <div>
          <p>Sort By</p>
          <select className="select select-bordered select-sm py-0 w-60">
            <option disabled selected>
              a-z
            </option>
            <option>z-a</option>
            <option>high</option>
            <option>low</option>
          </select>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <p>Select Price</p>
          <input
            type="range"
            min={0}
            max="100"
            defaultValue="100"
            className="range range-info w-60"
          />
        </div>
        <div className="text-center">
          <p className="w-60">Free Shipping</p>
          <input
            type="checkbox"
            onChange="checked"
            className="checkbox checkbox-info"
          />
        </div>
        <div>
          <Link className="btn-active btn-info rounded-md py-1 px-24 w-60 text-white">
            Search
          </Link>
        </div>
        <div>
          <button className="btn-active btn-secondary rounded-md py-1 px-16 w-60 text-white">
            Reset
          </button>
        </div>
      </div>

      {product && <Product product={product} />}
    </div>
  )
}

export default Products
