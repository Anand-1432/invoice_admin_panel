import React from 'react'
import { Link } from 'react-router-dom'

const Brand = () => {
    return (
        <>

            <div className='product'>
                <div className='dataSection'>
                    <h5>Brand Section</h5>
                    <hr />

                    <Link to="/brands/brand_view" className='btn1'>View Brands</Link>
                    <Link to="/brands/brand_add" className='btn1'>Add Brand</Link>
                    <Link to="/brands/brand_update" className='btn1'>Update/Delete Brand</Link>

                    <Link to='/' className='btn btn2'>back</Link>

                </div>
            </div>
        </>
    )
}

export default Brand