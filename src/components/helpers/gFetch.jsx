 let products = [
    {id: '1', categoria: 'velas', modelo: 'Vela de Soja 1', precio: '1000', stock: '15', img: '/vela1.jpg'},
    {id: '2', categoria: 'velas', modelo: 'Vela de Soja 2', precio: '1100', stock: '10', img: '/vela2.jpg'},
    {id: '3', categoria: 'difusores', modelo: 'Difusor 1', precio: '1200', stock: '8', img: '/difusor1.jpg'},
    {id: '4', categoria: 'difusores', modelo: 'Difusor 2', precio: '1300', stock: '5', img: '/difusor2.jpg'},
    {id: '5', categoria: 'lamparas', modelo: 'Lampara de Sal 1', precio: '1400', stock: '3', img: '/lampara1.jpg'},
    {id: '6', categoria: 'lamparas', modelo: 'Lampara de Sal 2', precio: '1500', stock: '2', img: '/lampara2.jpg'},
 ]
 const gFetch = () => {
    return new Promise( (resolve, reject)=>{
        //acciones 
        const condition = true
        if (condition) {    
            setTimeout(()=>{
                resolve(products)            
            }, 1500)
        } else {
            reject( 'Error' )        
        }
    } )
}

export default gFetch