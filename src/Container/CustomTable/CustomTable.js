import React from 'react'
import { Table } from 'react-bootstrap'
export default function CustomTable(props) {
  const info = props.info
  return (
    <div className="CustomTable">
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Payment Date</th>
            <th>Payment Type</th>
            <th>Payment Currency</th>
            <th>Payment Amount</th>
            <th>Payment Status</th>
            <th>From Account No</th>
            <th>From Account Name</th>
            <th>To Account No</th>
            <th>To Account Name</th>
          </tr>
        </thead>
        <tbody>
          {info &&
            info.map((info, index) => {
              return (
                <tr key={info.fromAccount.accountNumber}>
                  <td>{index + 1}</td>
                  <td>{info.paymentDate}</td>
                  <td>{info.paymentType}</td>
                  <td>{info.paymentCurrency}</td>
                  <td>{info.paymentAmount}</td>
                  <td>
                    {(info.paymentStatus === 'P' && 'Pending') ||
                      (info.paymentStatus === 'A' && 'Approved') ||
                      (info.paymentStatus === 'C' && 'Cancelled')}
                  </td>
                  <td>{info.toAccaunt.accountNumber}</td>
                  <td>{info.toAccaunt.accountName}</td>
                  <td>{info.fromAccount.accountNumber}</td>
                  <td>{info.fromAccount.accountName}</td>
                </tr>
              )
            })}
        </tbody>
      </Table>
    </div>
  )
}
