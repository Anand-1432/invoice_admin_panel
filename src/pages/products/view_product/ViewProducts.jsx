import React from 'react'
import { Link } from 'react-router-dom'
import './viewProducts.scss'

const ViewProducts = () => {

    const ProductArray = [
        {
            key: "35237282",
            productName: "Phillips",
            brandKey: "xxxxxxxx89",
            sellerKey: "xxxxxxxx89",
            category: "xxxxxxxxx@gmail.com",
            image: "xxxxxxxxx@gmail.com",
            guideKey: "xxxxxxxxx@gmail.com",
            rating: "xxxxxxxxx@gmail.com",
        },
        {
            key: "131311156",
            productName: "Aqua",
            brandKey: "xxxxxxxx89",
            sellerKey: "xxxxxxxx89",
            category: "xxxxxxxxx@gmail.com",
            image: "xxxxxxxxx@gmail.com",
            guideKey: "xxxxxxxxx@gmail.com",
            rating: "xxxxxxxxx@gmail.com",
        },
    ]

    return (
        <>
            <div className='brandView' id='proTable'>

                <div className='Centre'>
                    <div><Link to='/products' className='btn btn-primary'>back</Link></div>
                    <p>All Products</p>
                </div>

                <div className='tableCon table-responsive'>
                    <table>
                        <thead>
                            <tr>
                                <th>Product Key</th>
                                <th>Product Name</th>
                                <th>Brand Key</th>
                                <th>Seller Key</th>
                                <th>Category</th>
                                <th>Product Image</th>
                                <th>Product Guide Key</th>
                                <th>Product Rating</th>
                            </tr>
                        </thead>

                        <tbody>

                            {ProductArray.map((value, index) => {
                                return (
                                    <tr key={value.key}>
                                        <td>{value.key}</td>
                                        <td>{value.productName}</td>
                                        <td>{value.brandKey}</td>
                                        <td>{value.sellerKey}</td>
                                        <td>{value.category}</td>
                                        <td>{value.image}</td>
                                        <td>{value.guideKey}</td>
                                        <td>{value.rating}</td>
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


export default ViewProducts