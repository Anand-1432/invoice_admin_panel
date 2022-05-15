import React from 'react'
import { Link } from 'react-router-dom'
import './addBrand.scss'

const AddBrand = () => {
    return (
        <>
            <div className='container-fluid Add_pro' id='brand'>
                <div className='row'>
                    <div className='col-md-3 col-xl-3 col-lg-3'></div>
                    <div className='col-md-6 col-xl-6 col-lg-6'>

                        <div className='add_form'>

                            <h2>Brand  <Link className='btn btn3' to='/brands'>back</Link></h2>
                            <hr />
                            <h5>Add New</h5>

                            <div className="form-group">
                                <label>Brand Key :</label>
                                <input type="text" className="form-control" placeholder="Product Key" />
                            </div>
                            <div className="form-group">
                                <label>Brand Name :</label>
                                <input type="text" className="form-control" placeholder="Brand Name" />
                            </div>
                            <div className="form-group">
                                <label>Support Number :</label>
                                <input type="text" className="form-control" placeholder="Support Number" />
                            </div>
                            <div className="form-group">
                                <label>Support Email :</label>
                                <input type="text" className="form-control" placeholder="Support Email" />
                            </div>
                           
                            <button className='btn btn4'>Submit</button>

                        </div>

                    </div>
                    <div className='col-md-3 col-xl-3 col-lg-3'></div>
                </div>
            </div>
        </>
    )
}

export default AddBrand