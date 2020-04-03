import React from 'react'
import './Table.css'

export default function Table(props){
  return (
    <table className="table w-100">
      <thead>
        <tr>
          {
            props.headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {props.children}
      </tbody>
    </table>          
  )
}