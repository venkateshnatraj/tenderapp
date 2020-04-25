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

  return { setDailyAuction, save, resetDailyAuction }
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
