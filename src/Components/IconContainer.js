import React from 'react';
import CreateTwoToneIcon from '@mui/icons-material/CreateTwoTone';
import CropSquareTwoToneIcon from '@mui/icons-material/CropSquareTwoTone';
import CircleTwoToneIcon from '@mui/icons-material/CircleTwoTone';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import { IconButton } from '@mui/material';


function IconContainer(props) {
    const {setTool} = props;
    const changeTool = (toolName) => {
        setTool(toolName);
    }
    return (
        <div className='Icon-Container'>
                <IconButton onClick={() => changeTool('pencil')}> <CreateTwoToneIcon /></IconButton>
                <IconButton onClick={() => changeTool('rectangle')}> <CropSquareTwoToneIcon /></IconButton>
                <IconButton onClick={() => changeTool('circle')}> <CircleTwoToneIcon /></IconButton>
                <IconButton onClick={() => changeTool('arrow')}> <ArrowForwardTwoToneIcon /></IconButton>
            </div>
    );
}

export default IconContainer;
