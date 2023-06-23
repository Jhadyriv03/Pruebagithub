import React from 'react'
import "./Desayuno.css"

export const Desayuno = (props) => {
    const desayunopt = props.desayunopt
    function handleClick() {
        console.log("Desayuno")
    }
    return (
    <button onClick={handleClick} className='desayuno-conteiner'>
        <div className='desayuno-title'>{desayunopt.nombre1}</div>
        <div className='desayuno-image'>
            <img src={desayunopt.imagen1} alt=''/>

        </div>
    </button>
  )
}

export default Desayuno