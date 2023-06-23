import React from 'react'
import "./Atomo1.css"

export const Atomo1 = () => {
  const infor = props.infor
  return (
    <div className='barrainfr-conteiner'>
      <div className='plato-title'>{infor.name}</div>
      <div className='plato-descripcion'>{infor.descp}</div>
      <div className='plato-precio'>{infor.price}</div>
    </div>
  )
}

export default Atomo1