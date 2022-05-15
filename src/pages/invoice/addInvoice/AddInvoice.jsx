import React from 'react'
import { Link } from 'react-router-dom'

const AddInvoice = () => {
    return (
        <>
            <div className='container-fluid Add_pro'>
                <div className='row'>
                    <div className='col-md-3 col-xl-3 col-lg-3'></div>
                    <div className='col-md-6 col-xl-6 col-lg-6'>

                        <div className='add_form'>

                            <h2>Invoice  <Link className='btn btn3' to='/invoice'>back</Link></h2>
                            <hr />
                            <h5>Add New</h5>

                            <div className="form-group">
                                <label>Invoice Key :</label>
                                <input type="text" className="form-control" placeholder="Invoice Key" />
                            </div>
                            <div className="form-group">
                                <label>Date Of Purchase :</label>
                                <input type="text" className="form-control" placeholder="Date Of Purchase" />
                            </div>
                            <div className="form-group">
                                <label>Warranty Period :</label>
                                <input type="text" className="form-control" placeholder="Warranty Period" />
                            </div>
                            <div className="form-group">
                                <label>Brand Signature :</label>
                                <input type="text" className="form-control" placeholder="Brand Signature" />
                            </div>
                            <div className="form-group">
                                <label>Amount :</label>
                                <input type="text" className="form-control" placeholder="Amount" />
                            </div>
                            <div className="form-group">
                                <label f>Invoice Image :</label> <br />
                                <input type="file" className="form-control-file" i />
                            </div>
                            <div className="form-group">
                                <label>User Key :</label>
                                <input type="text" className="form-control" placeholder="User Key" />
                            </div>
                            <div className="form-group">
                                <label>Product Key :</label>
                                <input type="text" className="form-control" placeholder="Product Key" />
                            </div>
                            <div className="form-group">
                                <label>Seller Key :</label>
                                <input type="text" className="form-control" placeholder="Seller Key" />
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

export default AddInvoice