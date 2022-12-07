import React, {useEffect, useState} from "react";

export const ViewPort = ()=>{
    const[height, setHeight] = useState(0)
    const[width, setWidth] = useState(0)

    useEffect(()=>{
        window.addEventListener('mousemove', resizeHandler)//manualmente

        return ()=>{
            console.log('');
            window.removeEventListener('mousemove', resizeHandler)//manualmente
            
        }
    })

    function resizeHandler(e){
        console.log(e);
        setHeight(e.clientX)
        setWidth(e.clientY)
    }

    return (
        <div>
            {width}x{height}
        </div>
    )
}