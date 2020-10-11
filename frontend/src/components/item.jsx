import React from 'react'
import './item.scss'
export default function Item({title, taskList, select}) {
    return <div className="item" data-testid="item">
        <h2>{title}</h2>
        <div className="task-list">
            {taskList.map((task,i) => {
                return <span onClick={() => select(task)} className="task" key={task.id}>{task.name}</span>
            })}
        </div>
    </div>
}