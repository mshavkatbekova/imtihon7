import React from 'react'
import { useFetch } from '../hooks/useFetch'

function SingleProduct() {
  const { data: SingleProduct, isPending, error } = useFetch(
    'https://strapi-store-server.onrender.com/api/products/',
  )
  return (
    <div className="max-container">
      <ul>
        {SingleProduct &&
          SingleProduct.data.map((single) => {
            const data = single
            const { id, attributes } = single
            console.log(data)
            return (
              <li key={id}>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                  <figure>
                    <img
                      className="object-cover h-full max-w-4xl mb-11"
                      src={attributes.image}
                      alt="Movie"
                    />
                  </figure>
                  <div className="card-body justify-end">
                    <h2 className="card-title text-3xl">{attributes.title}</h2>
                    <p>{attributes.company}</p>
                    <p>${attributes.price}</p>
                    <p>{attributes.description}</p>
                    <p>Amount</p>
                    <select className="select select-bordered w-full max-w-xs">
                      <option disabled selected>
                        1
                      </option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                      <option>11</option>
                      <option>12</option>
                      <option>13</option>
                      <option>14</option>
                      <option>15</option>
                      <option>16</option>
                      <option>17</option>
                      <option>18</option>
                      <option>19</option>
                      <option>20</option>
                    </select>
                    <button className="btn btn-primary w-40 mt-5 text-white">
                      ADD TO BAG
                    </button>
                  </div>
                </div>
              </li>
            )
          })}
      </ul>
    </div>
  )
}

export default SingleProduct
