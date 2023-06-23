import React from 'react'
import "./BreakfastM.css"
import Desayuno from '../atoms/Desayuno'
import platodf from '../../assets/breakfast.json'

const BreakfastM = () => {
  return (
    <div className='platosbreakfast-conteiner'>
        {
            platodf.map((desayunopt)=>{
                return <Desayuno desayunopt={desayunopt} key ={desayunopt.id}/>
            })
        }
    </div>
  )
}

export default BreakfastM