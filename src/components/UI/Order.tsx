import React from 'react'
import "../../style/order.css"
const Order = () => {
  return (
    <div className="table-container">
    <table>
        <thead>
            <tr>
                <th>Products</th>
                <th>Problem</th>
                <th>Date</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>#0123ABCD</strong></td>
                <td>Payment Error</td>
                <td>Sun, Feb 23 2025</td>
                <td className="status-processing">Processing</td>
            </tr>
            <tr>
                <td><strong>#0123ABCD</strong></td>
                <td>Defective Goods</td>
                <td>Sun, Feb 23 2025</td>
                <td className="status-processed">Processed</td>
            </tr>
            <tr>
                <td><strong>#0123ABCD</strong></td>
                <td>Complaints</td>
                <td>Sun, Feb 23 2025</td>
                <td className="status-cancelled">Cancelled</td>
            </tr>
        </tbody>
    </table>
</div>
  )
}

export default Order
