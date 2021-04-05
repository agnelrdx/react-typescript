import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Provider } from '../context'
import Sidebar from '../components/Sidebar'
import AddList from './AddList'
import CompletedList from './CompletedList'

const Dashboard: React.FC = () => {
  return (
    <Provider>
      <div style={{ display: 'flex', alignItems: 'stretch', height: '100%' }}>
        <Sidebar />
        <div className="content">
          <Switch>
            <Route path="/dashboard/home" component={AddList} />
            <Route path="/dashboard/completed-list" component={CompletedList} />
          </Switch>
        </div>
      </div>
    </Provider>
  )
}

export default Dashboard
