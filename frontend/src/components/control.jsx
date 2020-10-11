import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { ACTION_TYPE } from '../utils/constants'
import './control.scss'

export default function Control() {
    const dispatch = useDispatch()
    const [taskName, setTaskName] = useState('')
    const selectName = useSelector(state => state.task.select ? state.task.select.name : '')
    const selectId = useSelector(state => state.task.select ? state.task.select.id : '')
    function handleCreateTask() {
        if (!taskName) return
        dispatch({
            type: ACTION_TYPE.CREATE_TASK,
            payload: taskName
        })
        setTaskName('')
    }
    function handleDeleteTask() {
        if (!selectId) {
            alert('You should select task before delete!')
            return
        }
        dispatch({
            type: ACTION_TYPE.DELETE_TASK,
            payload: selectId
        })
        dispatch({
            type: ACTION_TYPE.SELECT_TASK,
            payload: null
        })
    }
    function handleInputValueChange(e) {
        setTaskName(e.target.value)
    }
    function handleMoveBackTask(e) {
        dispatch({
            type: ACTION_TYPE.MOVE_BACK_TASK,
            payload: selectId
        })
    }
    function handleMoveForwardTask() {
        dispatch({
            type: ACTION_TYPE.MOVE_FORWARD_TASK,
            payload: selectId
        })
    }
    return <div className="control" data-testid="control">
        <h1>Controls</h1>
        <div className="create">
            <input value={taskName} onChange={handleInputValueChange} placeholder="New task name" type="text"/>
            <button onClick={handleCreateTask}>Create</button>
        </div>
        <div className="edit">
            <input data-testid="selectInput" onChange={()=>{}} value={selectName} placeholder="Click on an existing task" type="text" />
            <button onClick={handleMoveBackTask}>Move back</button>
            <button onClick={handleMoveForwardTask}>Move forward</button>
            <button onClick={handleDeleteTask}>Delete</button>
        </div>
    </div>
}