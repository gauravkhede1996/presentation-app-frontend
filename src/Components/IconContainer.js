import React from 'react';
import CreateTwoToneIcon from '@mui/icons-material/CreateTwoTone';
import CropSquareTwoToneIcon from '@mui/icons-material/CropSquareTwoTone';
import CircleTwoToneIcon from '@mui/icons-material/CircleTwoTone';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import { IconButton } from '@mui/material';


function IconContainer(props) {
    const {setTool,color,setColor, setElements, elements, history, setHistory} = props;
    const changeTool = (toolName) => {
        setTool(toolName);
    }
    const handleClearCanvas = () => {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        ctx.fillRect = 'white';
        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height,
        )
        setElements([]);
    }
    const handleUndoButton = () => {
        console.log('clicked');
        setHistory((prevHistory) => [...prevHistory, elements[elements.length-1]]);
        setElements((prevElements) =>  prevElements.slice(0,prevElements.length-1));
    }
    const handleRedoButton = () => {
        setElements((prevElements) => [...prevElements, history[history.length-1]]);
        setHistory((prevHistory) => prevHistory.slice(0,prevHistory.length-1));
    }
    return (
        <div className='Icon-Container'>
                <IconButton onClick={() => changeTool('pencil')}> <CreateTwoToneIcon /></IconButton>
                <IconButton onClick={() => changeTool('rectangle')}> <CropSquareTwoToneIcon /></IconButton>
                <IconButton onClick={() => changeTool('circle')}> <CircleTwoToneIcon /></IconButton>
                <IconButton onClick={() => changeTool('line')}> <ArrowForwardTwoToneIcon /></IconButton>
                <input type="color" id="color" value={color} onChange={(e) => setColor(e.target.value)} ></input>
                <button type="submit"onClick={handleClearCanvas} id="clearCanvasButton"> Clear Canvas</button>
                <button type="submit" onClick={handleUndoButton} id="undoButton" disabled={elements.length === 0}>Undo </button>
                <button type="submit" onClick={handleRedoButton} id="redoButton" disabled={history.length < 1}>Redo </button>
            </div>
    );
}

export default IconContainer;
