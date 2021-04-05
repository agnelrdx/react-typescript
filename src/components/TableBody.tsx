import React, { useContext } from 'react'
import { AppContext, ITodo } from '../context'

interface Props {
  showDoneBtn: boolean
  filterParam: string
}

const TableBody: React.FC<Props> = ({ showDoneBtn, filterParam }) => {
  const { appData, setAppData } = useContext(AppContext)

  const handleDelete = (id: number) => {
    const updatedList = appData.toDo.filter(v => v.id !== id)
    setAppData({ toDo: updatedList })
  }

  const handleDone = (id: number) => {
    const updatedList = appData.toDo.filter(v => v.id !== id)
    const doneList = appData.toDo.find(v => v.id === id)
    setAppData({
      toDo: [...updatedList, { ...doneList, status: 'done' }] as ITodo[]
    })
  }

  return (
    <>
      {appData.toDo
        .filter(v => v.status === filterParam)
        .map((v, k: number) => (
          <tr key={k}>
            <td>{v.id}</td>
            <td>{v.title}</td>
            <td>{v.description}</td>
            <td>{v.status}</td>
            <td>
              {showDoneBtn && (
                <button
                  style={{ marginRight: '10px' }}
                  className="btn btn-sm btn-success"
                  onClick={() => handleDone(v.id)}>
                  Done
                </button>
              )}
              <button
                className="btn btn-sm btn-danger"
                onClick={() => handleDelete(v.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
    </>
  )
}

export default TableBody
