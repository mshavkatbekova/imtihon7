import React from 'react'
import { Link } from 'react-router-dom'

function FeaturedProduct({ products }) {
  return (
    <div>
      <ul className="flex text-center justify-between mt-20 mb-24">
        {products.data.map((prod) => {
          const data = prod
          const { id, attributes } = prod
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

export default FeaturedProduct
