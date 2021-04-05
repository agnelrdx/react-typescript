import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import img from '../assets/logo.png'
import Alert from '../components/Alert'

interface ILogin {
  email: string
  password: string
}

const Home: React.FC = () => {
  const history = useHistory()
  const [login, setLogin] = useState<ILogin>({ email: '', password: '' })
  const [alert, setAlert] = useState<boolean>(false)

  const handleSubmit = (e: React.BaseSyntheticEvent) => {
    e.preventDefault()
    if (
      process.env.REACT_APP_VALID_USERNAME !== login.email ||
      process.env.REACT_APP_VALID_PASSWORD !== login.password
    ) {
      return setAlert(true)
    }

    history.push('/dashboard/home')
  }

  const handleChange = (e: React.BaseSyntheticEvent) =>
    setLogin({ ...login, [e.target.name]: e.target.value })

  return (
    <div className="text-center">
      <main className="form-signin">
        <form onSubmit={handleSubmit}>
          <img className="mb-4" src={img} alt="Logo" width="70" height="70" />
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input
              type="email"
              name="email"
              className="form-control"
              value={login.email}
              placeholder="Enter Email"
              onChange={handleChange}
            />
            <label>Email address</label>
          </div>

          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              value={login.password}
              name="password"
              placeholder="Enter Password"
              onChange={handleChange}
            />
            <label>Password</label>
          </div>

          <button className="w-100 mb-3 btn btn-lg btn-primary" type="submit">
            Sign in
          </button>

          {alert && (
            <Alert
              type="alert-danger"
              message="Please enter valid credentials!!"
            />
          )}

          <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
        </form>
      </main>
    </div>
  )
}

export default Home
