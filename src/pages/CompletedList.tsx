import React, { useContext } from 'react'
import { AppContext } from '../context'
import TableHead from '../components/TableHead'
import TableBody from '../components/TableBody'

const CompletedList: React.FC = () => {
  const { appData } = useContext(AppContext)

  return (
    <>
      <table className="table table-bordered">
        <TableHead />

        <tbody>
          {appData.toDo.filter(v => v.status === 'done').length === 0 && (
            <tr>
              <td colSpan={5}>No records to show.</td>
            </tr>
          )}

          <TableBody filterParam="done" showDoneBtn={false} />
        </tbody>
      </table>
    </>
  )
}

export default CompletedList
