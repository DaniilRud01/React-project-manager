import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import Reducers from './data'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    data: Reducers
  })

export default createRootReducer
