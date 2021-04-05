import React, { useState, useContext } from 'react'
import ReactModal from '../components/ReactModal'
import { AppContext } from '../context'
import TableHead from '../components/TableHead'
import TableBody from '../components/TableBody'

const AddList: React.FC = () => {
  const [modal, setModal] = useState<boolean>(false)
  const { appData } = useContext(AppContext)

  const handleClick = () => setModal(!modal)

  return (
    <>
      <button className="btn mb-3 btn-primary" onClick={handleClick}>
        Add Todo
      </button>
      <ReactModal showModal={modal} setModal={handleClick} />
      <table className="table table-bordered">
        <TableHead />

        <tbody>
          {appData.toDo.filter(v => v.status === 'pending').length === 0 && (
            <tr>
              <td colSpan={5}>No records to show.</td>
            </tr>
          )}

          <TableBody filterParam="pending" showDoneBtn={true} />
        </tbody>
      </table>
    </>
  )
}

export default AddList
