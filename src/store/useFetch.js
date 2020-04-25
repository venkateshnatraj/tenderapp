import { useReducer, useEffect, useState } from 'react'
import 'whatwg-fetch'

const REQUEST_STARTED = 'REQUEST_STARTED'
const REQUEST_SUCCESSFUL = 'REQUEST_SUCCESSFUL'
const REQUEST_FAILED = 'REQUEST_FAILED'
const REQUEST_RESET = 'REQUEST_RESET'

const reducer = (state, action) => {
  // we check the type of each action and return an updated state object accordingly
  switch (action.type) {
    case REQUEST_STARTED:
      return {
        ...state,
        isLoading: true,
        message: 'Loading...'
      }
    case REQUEST_SUCCESSFUL:
      return {
        ...state,
        isLoading: false,
        error: null,
        data: action.data,
        message: 'Successful'
      }
    case REQUEST_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        message: 'Something went wrong'
      }
    case REQUEST_RESET:
      return {
        ...state,
        isLoading: false,
        data: null,
        error: null,
        message: ''
      }
    default:
      return state
  }
}

const useFetch = (url, action, data, isLoad) => {
  const [tenderState, dispatch] = useReducer(reducer, {
    isLoading: isLoad,
    data: null,
    error: null,
    message: null
  })
  const [requestData, setRequestData] = useState(data)
  useEffect(() => {
    const fetchData = async () => {
      if (tenderState.isLoading) {
        try {
          let options = {
            method: action,
            headers: {
              'Content-Type': 'application/json'
            }
            // mode: 'no-cors',
          }
          options =
            action === 'POST' ? { ...options, ...{ body: JSON.stringify(requestData) } } : options
          const response = await fetch(url, options)
          if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`)
          }
          data = await response.json()
          dispatch({ type: REQUEST_SUCCESSFUL, data })
        } catch (e) {
          dispatch({ type: REQUEST_FAILED, error: e.message })
        }
      }
    }
    fetchData()
    // eslint-disable-next-line
  },[tenderState.isLoading,tenderState.data,tenderState.error])

  const resetFetch = () => {
    dispatch({ type: REQUEST_RESET })
  }

  const startFetch = (input) => {
    setRequestData(input)
    dispatch({ type: REQUEST_STARTED })
  }

  return { tenderState, resetFetch, startFetch }
}

export default useFetch
