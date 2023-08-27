import Screen from './Screen';
import IconContainer from './IconContainer';
import CommentsAndUsersContainer from './CommentsAndUsersContainer';
import './MainStyles.css'
import React, { useState } from 'react';

function MainComponent(props) {
    const [elements, setElements ] = useState([]);
    const [tool, setTool] = useState('pencil');
    const [drawing,setDrawing] = useState(false);
    const [color,setColor] = useState('black');
    const [history,setHistory] = useState([]);
    return (
        <div className='main-component'>
                Main Component
                <Screen elements={elements} setElements={setElements} tool={tool} setTool={setTool} drawing={drawing} setDrawing={setDrawing} color={color} setColor={setColor}/>
                <IconContainer setTool={setTool} color={color} setColor={setColor} setElements={setElements} elements={elements} history={history} setHistory={setHistory}/>
                <CommentsAndUsersContainer />
            </div>
    );
}

export default MainComponent;