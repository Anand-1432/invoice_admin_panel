import React from 'react'
import { Link } from 'react-router-dom'
import './product.scss'

const Product = () => {
  return (
    <>
        <div className='product'>
            <div className='dataSection'>
               <h5>Product Section</h5>
               <hr />

             <Link to="/" className='btn1'>View Products</Link>
             <Link to="/products/product_add" className='btn1'>Add Product</Link>
             <Link to="/products/product_update" className='btn1'>Update/Delete Product</Link>

             <Link to='/' className='btn btn2'>back</Link>

            </div>
        </div>
    </>
  )
}

export default Product