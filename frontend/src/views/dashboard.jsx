import React from 'react'
import Board from '../components/board'
import Control from '../components/control'

export default function Dashboard() {
    return <div className="board">
        <Control />
        <Board />
    </div>
}