import React from 'react'
import { Link } from 'react-router-dom'
import './addSeller.scss'

const AddSeller = () => {
    return (
        <>
            <div className='container-fluid Add_pro' id='seller'>
                <div className='row'>
                    <div className='col-md-3 col-xl-3 col-lg-3'></div>
                    <div className='col-md-6 col-xl-6 col-lg-6'>

                        <div className='add_form'>

                            <h2>Seller  <Link className='btn btn3' to='/sellers'>back</Link></h2>
                            <hr />
                            <h5>Add New</h5>

                            <div className="form-group">
                                <label>Seller Key :</label>
                                <input type="text" className="form-control" placeholder="Seller Key" />
                            </div>
                            <div className="form-group">
                                <label>Seller Name :</label>
                                <input type="text" className="form-control" placeholder="Seller Name" />
                            </div>
                            <div className="form-group">
                                <label f>Profile Image :</label> <br />
                                <input type="file" className="form-control-file" id />
                            </div>
                            <div className="form-group">
                                <label>Location :</label>
                                <input type="text" className="form-control" placeholder="Location" />
                            </div>
                            <div className="form-group">
                                <label>Selling Brand Array :</label>
                                <input type="text" className="form-control" placeholder="Selling Brand Array" />
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

export default AddSeller