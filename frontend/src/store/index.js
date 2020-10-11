import {createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'
import { ACTION_TYPE } from '../utils/constants'

import reducer from './reducer'
console.log(111)
const store = new createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(logger)
    )
)

store.dispatch({
    type: ACTION_TYPE.CREATE_TASK,
    payload: 'task 0'
})
store.dispatch({
    type: ACTION_TYPE.CREATE_TASK,
    payload: 'task 1'
})
store.dispatch({
    type: ACTION_TYPE.CREATE_TASK,
    payload: 'task 2'
})
store.dispatch({
    type: ACTION_TYPE.CREATE_TASK,
    payload: 'task 3'
})
store.dispatch({
    type: ACTION_TYPE.CREATE_TASK,
    payload: 'task 4'
})
store.dispatch({
    type: ACTION_TYPE.CREATE_TASK,
    payload: 'task 5'
})
store.dispatch({
    type: ACTION_TYPE.CREATE_TASK,
    payload: 'task 6'
})
store.dispatch({
    type: ACTION_TYPE.CREATE_TASK,
    payload: 'task 7'
})
store.dispatch({
    type: ACTION_TYPE.CREATE_TASK,
    payload: 'task 8'
})
store.dispatch({
    type: ACTION_TYPE.CREATE_TASK,
    payload: 'task 9'
})

export default store
