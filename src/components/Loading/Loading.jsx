import { useEffect } from "react"

const Loading = ()=>{
    useEffect(()=>{
        return ()=>{
            console.log('dismounting')
        }
        
    }) 
return (
    <h2>Cargando...</h2>
    ) 
}

export default Loading