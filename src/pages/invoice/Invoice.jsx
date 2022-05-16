import React from 'react'
import { Link } from 'react-router-dom'

const Invoice = () => {
    return (
        <>
            <div className='product'>
                <div className='dataSection'>
                    <h5>Invoice Section</h5>
                    <hr />

                    <Link to="/invoice/invoice_view" className='btn1'>View Invoices</Link>
                    <Link to="/invoice/invoice_add" className='btn1'>Add invoice</Link>
                    <Link to="/invoice/invoice_update" className='btn1'>Update/Delete invoice</Link>

                    <Link to='/' className='btn btn2'>back</Link>

                </div>
            </div>
        </>
    )
}

export default Invoice