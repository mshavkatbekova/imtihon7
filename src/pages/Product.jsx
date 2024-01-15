import React from 'react'
import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

function Product({ product }) {
  const { data: SingleProduct, isPending, error } = useFetch(
    'https://strapi-store-server.onrender.com/api/products/',
  )
  return (
    <div>
      <ul className="grid grid-cols-3 gap-8 text-center justify-between mt-20 mb-24">
        {product.data.map((p) => {
          const data = p
          const { id, attributes } = p
          console.log(data)
          return (
            <li key={id}>
              <Link to={`/products/${id}`}>
                <div className="card w-[360px] bg-base-100 flex shadow-xl">
                  <figure>
                    <img
                      className="w-[320px] h-52 rounded-xl object-cover"
                      src={attributes.image}
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title text-center">
                      {attributes.title}
                    </h2>
                    <p>${attributes.price}</p>
                  </div>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Product
