import React from 'react'

const TableHead: React.FC = () => {
  return (
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">ToDo</th>
        <th scope="col">Description</th>
        <th scope="col">Status</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
  )
}

export default TableHead
