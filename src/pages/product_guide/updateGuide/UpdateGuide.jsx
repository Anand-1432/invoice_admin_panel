import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './updateGuide.scss'

const UpdateGuide = () => {

    const [guide, setguide] = useState(false);

    const search = () => {
        document.getElementById("guide").style.height = "auto";
        setguide(true);
    }

    return (
        <>

            <div className='container-fluid Add_pro ' id='guide'>
                <div className='row'>
                    <div className='col-md-3 col-xl-3 col-lg-3'></div>
                    <div className='col-md-6 col-xl-6 col-lg-6'>

                        <div className='add_form'>

                            <h2>Product Guide  <Link className='btn btn3' id='btn10' to='/product_guide'>back</Link></h2>
                            <hr />

                            <h5>Search Guide</h5>

                            <div>
                                <div className="form-group">
                                    <label>Product Guide Key :</label>
                                    <input type="text" className="form-control" placeholder="Product Guide Key" />
                                </div>
                                <button className='btn btn5 btn-primary' onClick={search}>Search</button>
                            </div>

                            {guide ? <div>

                                <hr />
                                <h5>Update Details</h5>

                                <div className="form-group">
                                    <label>Image url :</label>
                                    <input type="text" className="form-control" placeholder="Image url" />
                                </div>
                                <div className="form-group">
                                    <label>Video url :</label>
                                    <input type="text" className="form-control" placeholder="Video url" />
                                </div>
                                <div className="form-group">
                                    <label>Doc :</label>
                                    <input type="text" className="form-control" placeholder="Doc" />
                                </div>
                                <div className="form-group">
                                    <label>Web Link :</label>
                                    <input type="text" className="form-control" placeholder="Web Link" />
                                </div>
                                <button className='btn btn4'>Update</button>
                                <button className='btn del btn-dark'>Delete</button>

                            </div> : null}

                        </div>

                    </div>
                    <div className='col-md-3 col-xl-3 col-lg-3'></div>
                </div>
            </div>
        </>
    )
}

export default UpdateGuide