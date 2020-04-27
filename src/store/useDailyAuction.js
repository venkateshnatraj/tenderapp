import { useContext } from 'react'
import { store } from './store'

const useDailyAuctions = () => {
  const state = useContext(store)
  const { dispatch } = state

  const setDailyAuction = (value) => {
    dispatch({ type: 'setDailyAuctionData', payload: value })
  }
  const save = (value) => {
    dispatch({ type: 'RemoveIngredients', payload: value })
  }
  const resetDailyAuction = () => {
    dispatch({ type: 'resetDailyAuctionData', payload: resetData })
  }
  const setMasterData = (value) => {
    dispatch({ type: 'setMasterData', payload: value })
  }

  return { setDailyAuction, save, resetDailyAuction, setMasterData }
}

const resetData = {
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
}
export default useDailyAuctions
