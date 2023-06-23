import React from 'react'
import "./Platos.css"

export const Platos = (props) => {
    const platos = props.platos
    const handleClick =() =>{
        console.log("Platos")
    }
    return (
        <button onClick={handleClick} className='platos-conteiner'>
            <div className='plato-title'>{platos.name}</div>
            <div className='plato-image'>
                <img src ={platos.imgsrc} alt=" " />
            </div>
            
        </button>
    )
}

export default Platos
