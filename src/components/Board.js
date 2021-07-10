import React from 'react'
import Square from './Square'

const style = {
    border: '4px solid darkblue',
    borderRadius: '10px',
    marginTop: '50px',
    width: '250px',
    height: '250px',
    margin: '0 auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
}

const Board = ({ onClick, squares }) => (
    <div style={style}>
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