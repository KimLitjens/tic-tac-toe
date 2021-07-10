import React from 'react'
import Square from './Square'

const Board = ({ onClick, squares }) => (
    <div>
        <Square value="1" onClick={() => onClick("something")} />
        <Square value="2" onClick={() => onClick("something")} />
        <Square value="3" onClick={() => onClick("something")} />
        <Square value="4" onClick={() => onClick("something")} />
        <Square value="5" onClick={() => onClick("something")} />
        <Square value="6" onClick={() => onClick("something")} />
        <Square value="7" onClick={() => onClick("something")} />
        <Square value="8" onClick={() => onClick("something")} />
        <Square value="9" onClick={() => onClick("something")} />
    </div>
)

export default Board