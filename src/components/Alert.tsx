import React from 'react'

interface Props {
  type: string
  message: string
}

const Alert: React.FC<Props> = ({ type, message }) => {
  return (
    <div
      style={{ padding: '10px', margin: '0px' }}
      className={`alert ${type}`}
      role="alert">
      {message}
    </div>
  )
}

export default Alert
