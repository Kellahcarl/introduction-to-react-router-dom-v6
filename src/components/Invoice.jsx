import React from 'react'
import { useParams } from 'react-router-dom'
import { getInvoice} from '../data'

const Invoice = ( ) =>
{
    
    let params = useParams();
    let invoice = getInvoice( parseInt(params.invoiceId) )
    console.log( invoice );
    return (
        <div className="invoice">
            <h1>Invoice: <small>{ invoice.name }</small></h1>
            <span>{invoice.number}</span> <span>{invoice.name}</span> <br/>
            <span>{ invoice.due}</span> <span>{ invoice.amount}</span>
        </div>
    )
}

export default Invoice
