import React, { useState, useContext } from 'react'
import Modal from 'react-modal'
import { AppContext } from '../context'
import Alert from './Alert'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

interface Props {
  showModal: boolean
  setModal: () => void
}

interface IForm {
  title: string
  description: string
}

const ReactModal: React.FC<Props> = ({ showModal, setModal }) => {
  const [form, setForm] = useState<IForm>({ title: '', description: '' })
  const [alert, setAlert] = useState<boolean>(false)
  const { appData, setAppData } = useContext(AppContext)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = () => {
    if (form.title === '' || form.description === '') {
      return setAlert(true)
    }

    setAppData({
      toDo: [
        ...appData.toDo,
        { id: (Math.random() * 10000) | 0, ...form, status: 'pending' }
      ]
    })
    setAlert(false)
    setModal()
  }

  return (
    <Modal isOpen={showModal} style={customStyles} contentLabel="Add Todo">
      <h4>Add ToDo</h4>
      <div className="form">
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            onChange={handleChange}
            name="title"
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <input
            onChange={handleChange}
            name="description"
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <button className="btn btn-primary" onClick={handleSubmit}>
            Add
          </button>
          <button className="btn btn-primary" onClick={setModal}>
            Close
          </button>
        </div>

        {alert && (
          <Alert type="alert-danger" message="Please enter valid details!!" />
        )}
      </div>
    </Modal>
  )
}

export default ReactModal
