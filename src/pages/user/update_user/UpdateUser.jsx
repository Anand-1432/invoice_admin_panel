import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UpdateUser = () => {
    const [user, setuser] = useState(false);

    const search = () => {
        document.getElementById("brand").style.height = "auto";
        setuser(true);
    }

    return (
        <>

            <div className='container-fluid Add_pro ' id='brand'>
                <div className='row'>
                    <div className='col-md-3 col-xl-3 col-lg-3'></div>
                    <div className='col-md-6 col-xl-6 col-lg-6'>

                        <div className='add_form'>

                            <h2>User  <Link className='btn btn3' to='/users'>back</Link></h2>
                            <hr />

                            <h5>Search User</h5>

                            <div>
                                <div className="form-group">
                                    <label>User Key :</label>
                                    <input type="text" className="form-control" placeholder="User Key" />
                                </div>
                                <button className='btn btn5 btn-primary' onClick={search}>Search</button>
                            </div>

                            {user ? <div>

                                <hr />
                                <h5>Update Details</h5>


                                <div className="form-group">
                                    <label>User Name :</label>
                                    <input type="text" className="form-control" placeholder="User Name" />
                                </div>
                                <div className="form-group">
                                    <label>Phone Number :</label>
                                    <input type="text" className="form-control" placeholder="Phone Number" />
                                </div>
                                <div className="form-group">
                                    <label>Email :</label>
                                    <input type="text" className="form-control" placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <label>Address :</label>
                                    <input type="text" className="form-control" placeholder="Address" />
                                </div>
                                <div className="form-group">
                                    <label>User Invoices Array :</label>
                                    <input type="text" className="form-control" placeholder="User Invoices Array" />
                                </div>
                                <div className="form-group">
                                    <label f>Profile Pic :</label> <br />
                                    <input type="file" className="form-control-file" i />
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

export default UpdateUser