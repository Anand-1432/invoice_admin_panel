import React from 'react'
import { Link } from 'react-router-dom'

const User = () => {
    return (
        <>
            <div className='product'>
                <div className='dataSection'>
                    <h5>User Section</h5>
                    <hr />

                    <Link to="/users/user_view" className='btn1'>View Users</Link>
                    <Link to="/users/user_add" className='btn1'>Add User</Link>
                    <Link to="/users/user_update" className='btn1'>Update/Delete User</Link>

                    <Link to='/' className='btn btn2'>back</Link>

                </div>
            </div>
        </>
    )
}

export default User