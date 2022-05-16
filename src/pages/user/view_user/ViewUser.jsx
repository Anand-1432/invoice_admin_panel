import React from 'react'
import { Link } from 'react-router-dom'
import './viewUser.scss'

const ViewUser = () => {
    const UserArray = [
        {
            key: "989272622",
            userName: "Aqua",
            phone: "xxxxxxxx89",
            email: "xxxxxxxx89",
            address: "xxxxxxxxx@gmail.com",
            invoiceArray: "xxxxxxxxx@gmail.com",
            profilePic: "xxxxxxxxx@gmail.com",
        },
        {
            key: "131311156",
            userName: "Aqua",
            phone: "xxxxxxxx89",
            email: "xxxxxxxx89",
            address: "xxxxxxxxx@gmail.com",
            invoiceArray: "xxxxxxxxx@gmail.com",
            profilePic: "xxxxxxxxx@gmail.com",
        },
    ]

    return (
        <>
            <div className='brandView' id='proTable'>

                <div className='Centre'>
                    <div><Link to='/users' className='btn btn-primary'>back</Link></div>
                    <p>All Users</p>
                </div>

                <div className='tableCon table-responsive'>
                    <table>
                        <thead>
                            <tr>
                                <th>User Key</th>
                                <th>User Name</th>
                                <th>Phone Number</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>User Invoices Array</th>
                                <th>Profile Pic</th>
                                
                            </tr>
                        </thead>

                        <tbody>

                            {UserArray.map((value, index) => {
                                return (
                                    <tr key={value.key}>
                                        <td>{value.key}</td>
                                        <td>{value.userName}</td>
                                        <td>{value.phone}</td>
                                        <td>{value.email}</td>
                                        <td>{value.address}</td>
                                        <td>{value.invoiceArray}</td>
                                        <td>{value.profilePic}</td>
                                    </tr>
                                );
                            })}

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ViewUser