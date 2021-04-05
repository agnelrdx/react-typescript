import React from 'react'
import { useHistory } from 'react-router-dom'

const _404: React.FC = () => {
  const history = useHistory()

  const handleClick = () => history.push('/')

  return (
    <div className="text-center">
      <main className="form-signin _404">
        <h1 className="h3 mb-4 fw-normal">Page Not Found</h1>
        <button className="w-50 btn btn-primary" onClick={handleClick}>
          Go Home
        </button>
      </main>
    </div>
  )
}

export default _404
