import React from 'react'
import { Link } from 'react-router-dom'
import './viewInvoice.scss'

const ViewInvoice = () => {


    const InvoiceArray = [
        {
            key: "35237282",
            dop: "Phillips",
            warranty: "xxxxxxxx89",
            signature: "xxxxxxxx89",
            amount: "xxxxxxxx",
            image: "xxxxxxxxx@gmail.com",
            userKey: "xxxxxxx",
            productKey: "xxxxxxx",
            sellerKey: "xxxxxxx",
        },
        {
            key: "08238293",
            dop: "Phillips",
            warranty: "xxxxxxxx89",
            signature: "xxxxxxxx89",
            amount: "xxxxxxxx",
            image: "xxxxxxxxx@gmail.com",
            userKey: "xxxxxxx",
            productKey: "xxxxxxx",
            sellerKey: "xxxxxxx",
        },
    ]
    
    return (
        <>
            <div className='brandView' id='proTable'>
    
                <div className='Centre'>
                    <div><Link to='/invoice' className='btn btn-primary'>back</Link></div>
                    <p>All Invoices</p>
                </div>
    
                <div className='tableCon table-responsive'>
                    <table>
                        <thead>
                            <tr>
                                <th>Invoice Key</th>
                                <th>Date of Purchase</th>
                                <th>Warranty Period</th>
                                <th>Brand Signature</th>
                                <th>Amount</th>
                                <th>Invoice Image</th>
                                <th>User Key</th>
                                <th>Product Key</th>
                                <th>Seller Key</th>
                            </tr>
                        </thead>
    
                        <tbody>
    
                            {InvoiceArray.map((value, index) => {
                                return (
                                    <tr key={value.key}>
                                        <td>{value.key}</td>
                                        <td>{value.dop}</td>
                                        <td>{value.warranty}</td>
                                        <td>{value.signature}</td>
                                        <td>{value.amount}</td>
                                        <td>{value.image}</td>
                                        <td>{value.userKey}</td>
                                        <td>{value.productKey}</td>
                                        <td>{value.sellerKey}</td>
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

export default ViewInvoice