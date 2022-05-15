import React from 'react'
import {Link} from 'react-router-dom'
import './addProduct.scss';

const AddProduct = () => {
    return (
        <>

            <div className='container-fluid Add_pro'>
                <div className='row'>
                    <div className='col-md-3 col-xl-3 col-lg-3'></div>
                    <div className='col-md-6 col-xl-6 col-lg-6'>

                        <div className='add_form'>

                            <h2>Product  <Link className='btn btn3' to='/products'>back</Link></h2>
                            <hr />
                            <h5>Add New</h5>

                            <div className="form-group">
                                <label>Product Key :</label>
                                <input type="text" className="form-control" placeholder="Product Key" />
                            </div>
                            <div className="form-group">
                                <label>Seller Key :</label>
                                <input type="text" className="form-control" placeholder="Seller Key" />
                            </div>
                            <div className="form-group">
                                <label>Brand Key :</label>
                                <input type="text" className="form-control" placeholder="Brand Key" />
                            </div>
                            <div className="form-group">
                                <label>Product Name :</label>
                                <input type="text" className="form-control" placeholder="Product Name" />
                            </div>
                            <div className="form-group">
                                <label>Category :</label>
                                <input type="text" className="form-control" placeholder="Category" />
                            </div>
                            <div className="form-group">
                                <label f>Product Image :</label> <br />
                                <input type="file" className="form-control-file" i/>
                            </div>
                            <div className="form-group">
                                <label>Product Guide Key :</label>
                                <input type="text" className="form-control" placeholder="Product Guide Key" />
                            </div>
                            <div className="form-group">
                                <label>Product Rating :</label>
                                <input type="text" className="form-control" placeholder="Product Rating" />
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

export default AddProduct