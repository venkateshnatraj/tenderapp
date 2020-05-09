import React, { createContext, useReducer } from 'react'

const initialState = {
  masterData: {
    commodity: [],
    Tax: []
  },
  tenderDailyAuction: {
    tenderDate: new Date(),
    tenderNumber: '',
    sessionTime: '',
    intervalTime: '',
    commodity: '',
    dummyNumberFrom: '',
    dummyNumberTo: '',
    sessionNumber: '',
    inTime: '',
    outTime: '',
    bidRate: ''
  },
  dummyNumberEntry :{
    tenderNumber: '',
    sessionTime: '',
  }
}
const store = createContext(initialState)
const { Provider } = store

const reducer = (state, action) => {
  switch (action.type) {
    case 'setDailyAuctionData':
      const data = { ...state }
      data.tenderDailyAuction[action.payload.id] = action.payload.value
      return { ...state, ...data }
    case 'resetDailyAuctionData':
      const resetData = { ...state }
      resetData.tenderDailyAuction = { ...action.payload }
      return { ...state, ...resetData }
    case 'setMasterData':
        const master = { ...state }
        // console.log('action.payload' )
        // console.log(action.payload )
        master.masterData = { ...action.payload }
        return { ...state, ...master }
    case 'setDummyNumber':
      //console.log(action.payload);
      const dummy= { ...state }
      dummy.dummyNumberEntry[action.payload.id] = action.payload.value
      // Object.assign(state, dummy)
      // return state
      return { ...state, ...dummy }
    default:
      return state
  }
}



const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { store, StateProvider }
