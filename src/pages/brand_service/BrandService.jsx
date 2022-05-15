import React from 'react'
import { Link } from 'react-router-dom'
import './service.scss'

const BrandService = () => {
    return (
        <>

            <div className='product'>
                <div className='dataSection'>
                    <h5>Brand Service Section</h5>
                    <hr />

                    <Link to="/" className='btn1'>View Service Center</Link>
                    <Link to="/brand_service/add_brand_service" className='btn1'>Add Service Center</Link>
                    <Link to="/brand_service/update_brand_service" className='btn1'>Update/Delete Service Center</Link>

                    <Link to='/' className='btn btn2'>back</Link>

                </div>
            </div>
        </>
    )
}

export default BrandService