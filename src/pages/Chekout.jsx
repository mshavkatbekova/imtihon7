import React from 'react'
import { Link } from 'react-router-dom'

function Chekout() {
  return (
    <div className="max-container mt-24">
      <div>
        <h2 className="text-4xl font-medium mb-5">Place Your Order</h2>
        <hr />
      </div>
      <div className="flex gap-14 mb-16">
        <div>
          <h3 className="mt-7 mb-7 font-medium text-xl">
            Shipping Information
          </h3>
          <form>
            <label>
              <p className="mb-2">First Name</p>
              <input
                type="text"
                className="input input-bordered max-w-lg w-screen"
              />
            </label>
            <label>
              <p className="mt-7 mb-2">Address</p>
              <input
                type="text"
                className="input input-bordered w-full max-w-lg"
              />
            </label>
          </form>
          <Link
            className="btn btn-info max-w-lg w-screen mt-7 text-white"
            to="/"
          >
            Place Your Order
          </Link>
        </div>
        <div className="w-full max-w-lg mt-8 ">
          <div className="mb-2">
            <p>Subtotal</p>
          </div>
          <hr />
          <div className="my-2">
            <p>Shipping</p>
          </div>
          <hr />
          <div className="flex justify-between my-2">
            <p>Tax</p>
            <p>$500</p>
          </div>
          <hr />
          <div className="my-4">
            <p>Order Total</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chekout
