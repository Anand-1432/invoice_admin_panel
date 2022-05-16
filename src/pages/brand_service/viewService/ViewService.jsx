import React from 'react'
import { Link } from 'react-router-dom'
import './viewService.scss'

const ViewService = () => {

    const ServiceArray = [
        {
            key: "35237282",
            brandKey: "181386",
            address: "xxxxxxxx89",
            location: "xxxxxxxxx@gmail.com"
        },
        {
            key: "85237863",
            brandKey: "121614",
            address: "xxxxxxxx89",
            location: "xxxxxxxxx@gmail.com"
        },
    ]

    return (
        <>
            <div className='brandView'>

                <div className='Centre'>
                    <div><Link to='/brand_service' className='btn btn-primary'>back</Link></div>
                    <p>Service Centers</p>
                </div>

                <div className='tableCon table-responsive'>
                    <table>
                        <thead>
                            <tr>
                                <th>Service Center Key</th>
                                <th>Brand Key</th>
                                <th>Service Center Address</th>
                                <th>Location url</th>
                            </tr>
                        </thead>

                        <tbody>

                            {ServiceArray.map((value, index) => {
                                return (
                                    <tr key={value.key}>
                                        <td>{value.key}</td>
                                        <td>{value.brandKey}</td>
                                        <td>{value.address}</td>
                                        <td>{value.location}</td>
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
export default ViewService