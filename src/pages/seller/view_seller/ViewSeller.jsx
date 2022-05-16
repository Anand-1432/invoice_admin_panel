import React from 'react'
import './viewSeller.scss'
import { Link } from 'react-router-dom'

const ViewSeller = () => {
    const SellerArray = [
        {
            key: "35237282",
            sellerName: "Phillips",
            profile: "xxxxxxxx89",
            location: "xxxxxxxxx@gmail.com",
            sellingArray: "xxxxxxxxx@gmail.com"
        },
        {
            key: "95283863",
            sellerName: "Phillips",
            profile: "xxxxxxxx89",
            location: "xxxxxxxxx@gmail.com",
            sellingArray: "xxxxxxxxx@gmail.com"
        },
    ]

    return (
        <>
            <div className='brandView'>

                <div className='Centre'>
                    <div><Link to='/sellers' className='btn btn-primary'>back</Link></div>
                    <p>All Sellers</p>
                </div>

                <div className='tableCon table-responsive'>
                    <table>
                        <thead>
                            <tr>
                                <th>Seller Key</th>
                                <th>Seller Name</th>
                                <th>Profile Image</th>
                                <th>Location</th>
                                <th>Selling Brand Array</th>
                            </tr>
                        </thead>

                        <tbody>

                            {SellerArray.map((value, index) => {
                                return (
                                    <tr key={value.key}>
                                        <td>{value.key}</td>
                                        <td>{value.sellerName}</td>
                                        <td>{value.profile}</td>
                                        <td>{value.location}</td>
                                        <td>{value.sellingArray}</td>
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
export default ViewSeller