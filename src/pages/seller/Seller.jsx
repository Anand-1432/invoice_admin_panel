import React from 'react'
import { Link } from 'react-router-dom'

const Seller = () => {
    return (
        <>

            <div className='product'>
                <div className='dataSection'>
                    <h5>Seller Section</h5>
                    <hr />

                    <Link to="/" className='btn1'>View Sellers</Link>
                    <Link to="/sellers/seller_add" className='btn1'>Add Seller</Link>
                    <Link to="/sellers/seller_update" className='btn1'>Update/Delete Seller</Link>

                    <Link to='/' className='btn btn2'>back</Link>

                </div>
            </div>
        </>
    )
}

export default Seller