import React, { createContext, useState } from 'react'

export interface ITodo {
  id: number
  title: string
  description: string
  status: string
}

export interface IContext {
  toDo: ITodo[]
}

const defaultState: IContext = { toDo: [] }

type UpdateType = React.Dispatch<React.SetStateAction<IContext>>

const defaultUpdate: UpdateType = () => defaultState

interface Props {
  children: React.ReactNode
}

export const AppContext = createContext({
  appData: defaultState,
  setAppData: defaultUpdate
})

export const Provider = ({ children }: Props): JSX.Element => {
  const [appData, setAppData] = useState(defaultState)

  return (
    <AppContext.Provider value={{ appData, setAppData }}>
      {children}
    </AppContext.Provider>
  )
}
