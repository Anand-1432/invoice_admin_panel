import React from 'react'
import { Link } from 'react-router-dom'
import './viewBrand.scss'

const ViewBrand = () => {

    const BrandArray = [
        {
            key: "35237282",
            brandName: "Phillips",
            number: "xxxxxxxx89",
            email: "xxxxxxxxx@gmail.com"
        },
        {
            key: "1216121",
            brandName: "Aqua",
            number: "xxxxxxxx75",
            email: "xxxxxxxxx@gmail.com"
        },
    ]

    return (
        <>
            <div className='brandView'>

                <div className='Centre'>
                    <div><Link to='/brands' className='btn btn-primary'>back</Link></div>
                    <p>All Brands</p>
                </div>

                <div className='tableCon table-responsive'>
                    <table>
                        <thead>
                            <tr>
                                <th>Brand Key</th>
                                <th>Brand Name</th>
                                <th>Support Number</th>
                                <th>Support Email</th>
                            </tr>
                        </thead>

                        <tbody>

                            {BrandArray.map((value, index) => {
                                return (
                                    <tr key={value.key}>
                                        <td>{value.key}</td>
                                        <td>{value.brandName}</td>
                                        <td>{value.number}</td>
                                        <td>{value.email}</td>
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

export default ViewBrand