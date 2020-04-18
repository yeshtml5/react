/*
import React, {useContext, useState} from 'react'
import {Context} from 'context'

const store = useContext(Context)

 */
import React, {useState, createContext} from 'react'
//context
const Context = createContext()
const {Provider} = Context
//
const GlobalProvider = (props) => {
  //state
  const [state, setState] = useState({title: '현재타이틀', someInfo: 'info'})
  //---------------------------------------------------------------------
  const action = {
    /**
     * @title 상태관리
     * @param object JSON
     */
    updateState: (obj) => {
      setState((state) => ({...state, ...obj}))
    }
  }
  //---------------------------------------------------------------------
  const value = {
    state,
    action
  }
  return <Provider value={value}>{props.children}</Provider>
}
export {Context, GlobalProvider}
