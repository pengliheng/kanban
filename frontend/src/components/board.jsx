import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import Item from './item'
import './board.scss'
import { ACTION_TYPE } from '../utils/constants'
export default function Board() {
    const dispatch = useDispatch()
    const backlog = useSelector(state => state.task.content[0])
    const todo = useSelector(state => state.task.content[1])
    const ongoing = useSelector(state => state.task.content[2])
    const done = useSelector(state => state.task.content[3])
    function handleSelect(id) {
        dispatch({
            type: ACTION_TYPE.SELECT_TASK,
            payload: id
        })
    }
    return <div className="board" data-testid="board">
        <h1>kanban board</h1>
        <div className="item-container">
            <Item select={handleSelect} title="Backlog" taskList={backlog}></Item>
            <Item select={handleSelect} title="To Do" taskList={todo}></Item>
            <Item select={handleSelect} title="Ongoing" taskList={ongoing}></Item>
            <Item select={handleSelect} title="Done" taskList={done}></Item>
        </div>
    </div>
}