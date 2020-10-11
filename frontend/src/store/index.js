import { createStore } from 'redux'
import { ACTION_TYPE } from '../utils/constants'

import reducer from './reducer'
const store = new createStore(
    reducer,
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
