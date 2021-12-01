import React from 'react'
import { Link } from 'react-router-dom'
import {getInvoices} from '../data'

const Invoices = () =>
{
    let invoices = getInvoices();
    return (
        <div className="invoices">
            <h1>My Invoices</h1>
            {invoices.map(invoice=>(
                <Link to={`/invoices/${invoice.number}`} invoice={invoice} key={invoice.number}>{ invoice.name }</Link>
           ) )}        
            

        </div>
    )
}

export default Invoices
