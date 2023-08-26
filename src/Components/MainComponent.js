import Screen from './Screen';
import IconContainer from './IconContainer';
import CommentsAndUsersContainer from './CommentsAndUsersContainer';
import './MainStyles.css'
import React, { useState } from 'react';

function MainComponent(props) {
    const [elements, setElements ] = useState([]);
    const [tool, setTool] = useState('pencil');
    const [drawing,setDrawing] = useState(false);
    return (
        <div className='main-component'>
                Main Component
                <Screen elements={elements} setElements={setElements} tool={tool} setTool={setTool} drawing={drawing} setDrawing={setDrawing} />
                <IconContainer setTool={setTool}/>
                <CommentsAndUsersContainer />
            </div>
    );
}

export default MainComponent;