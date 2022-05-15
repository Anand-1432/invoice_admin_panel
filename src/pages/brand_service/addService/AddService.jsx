import React from 'react'
import { Link } from 'react-router-dom'

const AddService = () => {
    return (
        <>
            <div className='container-fluid Add_pro' id='brand'>
                <div className='row'>
                    <div className='col-md-3 col-xl-3 col-lg-3'></div>
                    <div className='col-md-6 col-xl-6 col-lg-6'>

                        <div className='add_form'>

                            <h2>Brand Service  <Link className='btn btn3' id='btn9' to='/brand_service'>back</Link></h2>
                            <hr />
                            <h5>Add New</h5>

                            <div className="form-group">
                                <label>Service Center Key :</label>
                                <input type="text" className="form-control" placeholder="Service Center Key" />
                            </div>
                            <div className="form-group">
                                <label>Brand Key :</label>
                                <input type="text" className="form-control" placeholder="Brand Key" />
                            </div>
                            <div className="form-group">
                                <label>Service Center Address :</label>
                                <input type="text" className="form-control" placeholder="Service Center Address" />
                            </div>
                            <div className="form-group">
                                <label>Location url :</label>
                                <input type="text" className="form-control" placeholder="Location url" />
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

export default AddService