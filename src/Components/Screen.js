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
    const {elements, setElements, tool,setTool, drawing, setDrawing,color} = props;
    useEffect( ()=> {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        ctxRef.current = ctx;
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
    },[]);

    useEffect(()=> {
        ctxRef.current.strokeStyle =color;
    }, [color]);

    useLayoutEffect( ()=> {
        const canvas = document.getElementById('canvas');
        canvas.height = window.innerHeight*2;
        canvas.width = window.innerWidth*2;
        const roughCanvas = rough.canvas(canvas);
        console.log("layout")
        elements.forEach((element) => {
            if( element.type === 'pencil') {
                roughCanvas.linearPath(element.path,{
                    stroke:element.stroke,
                    strokeWidth:5,
                    roughness:0,
                })
            }
            else if ( element.type === 'line') {
                roughCanvas.draw(generator.line(element.offsetX, element.offsetY, element.width, element.height,{
                    stroke:element.stroke,
                    strokeWidth:5,
                    roughness:0,
                }));
            }
            else if ( element.type === 'rectangle') {
                roughCanvas.draw(generator.rectangle(element.offsetX, element.offsetY, element.width, element.height,{
                    stroke:element.stroke,
                    strokeWidth:5,
                    roughness:0,
                }));
            }
        })
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
            stroke: color,
        }])
        }
        else if (tool === 'line') {
            setElements((prevElements) => [...prevElements, {
                type: 'line',
                offsetX,
                offsetY,
                width: offsetX,
                height: offsetY,
                stroke: color,
            }])
        }
        else if ( tool === 'rectangle') {
            setElements((prevElements) => [...prevElements, {
                type: 'rectangle',
                offsetX,
                offsetY,
                width: 0,
                height: 0,
                stroke: color,
            }])
        }
    }
    const handleMouseUp = () => {
        setDrawing(false);
    }
    const handleMouseMove = (e) => {
        if (!drawing) return;
        const { offsetX, offsetY} = e.nativeEvent;
        if ( tool === 'pencil') {
            const { path } = elements[elements.length-1];
            const newPath = [...path, [offsetX,offsetY]];
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
        else if( tool === 'line') {
            setElements((prevElements) => 
            prevElements.map((ele, index) => {
                if( index === elements.length-1) {
                    return {
                        ...ele,
                        width:offsetX,
                        height: offsetY,
                    }
                } else {
                    return ele;
                }
            })
        )
        }
        else if( tool === 'rectangle') {
            setElements((prevElements) => 
            prevElements.map((ele, index) => {
                if( index === elements.length-1) {
                    return {
                        ...ele,
                        offsetX: ele.offsetX,
                        offsetY: ele.offsetY,
                        width:offsetX - ele.offsetX,
                        height: offsetY - ele.offsetY,
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