// 
import React,{useEffect, useLayoutEffect, useRef, useState} from 'react';
import rough from 'roughjs/bundled/rough.esm';

const generator = rough.generator();
function createElement(x1,y1,x2,y2) {
    const roughElement = generator.line(x1,y1,x2,y2);
    return { x1, y1,x2, y2, roughElement};
}
const Screen= (props) => {
    const canvasRef = useRef(null);
    const ctxRef = useRef(null);
    const {elements, setElements, tool,setTool, drawing, setDrawing} = props;
    useEffect( ()=> {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        ctxRef.current = ctx;
    }, [elements]);

    useLayoutEffect( ()=> {
        const canvas = document.getElementById('canvas');
        canvas.height = window.innerHeight*2;
        canvas.width = window.innerWidth*2;
        const roughCanvas = rough.canvas(canvas);
        console.log("layout")
        if( tool === 'pencil') {
        elements.forEach((element) => {
            roughCanvas.linearPath(element.path)
        })
        }
    }, [elements])

    const handleMouseDown = (e) => {
        setDrawing(true);
        const { offsetX, offsetY} = e.nativeEvent;
        // console.log(offsetX, offsetY);
        if( tool === 'pencil') {
        setElements((prevElements) => [...prevElements, {
            type: 'pencil',
            offsetX,
            offsetY,path: [[offsetX,offsetY]],
            stroke: 'black',
        }])
        }
    }
    const handleMouseUp = () => {
        setDrawing(false);
    }
    const handleMouseMove = (e) => {
        if (!drawing) return;
        const { offsetX, offsetY} = e.nativeEvent;
        const { path } = elements[elements.length-1];
        const newPath = [...path, [offsetX,offsetY]];
        if ( tool === 'pencil') {
        setElements((prevElements) => 
            prevElements.map((ele, index) => {
                if( index === elements.length-1) {
                    return {
                        ...ele,
                        path: newPath,
                    }
                } else {
                    return ele;
                }
            })
        )
        }
        // console.log(elements);
    }
    return (
        <div className='Main-Screen'>
           
            <canvas id='canvas' onMouseDown={handleMouseDown} onMouseUp={ handleMouseUp} onMouseMove= {handleMouseMove }>Canvas</canvas>
        </div>
    );
}

export default Screen;