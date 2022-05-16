import React from 'react'
import { Link } from 'react-router-dom'

const ProductGuide = () => {
  return (
    <>
      <div className='product'>
        <div className='dataSection'>
          <h5>Product Guide Section</h5>
          <hr />

          <Link to="/product_guide/add_product_guide" className='btn1'>Add Product Guide</Link>
          <Link to="/product_guide/update_product_guide" className='btn1'>Update/Delete Product Guide</Link>

          <Link to='/' className='btn btn2'>back</Link>

        </div>
      </div>
    </>
  )
}

export default ProductGuide