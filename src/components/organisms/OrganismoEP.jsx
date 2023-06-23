import React from 'react'
import"./OrganismoEP.css"
import Boton from '../atoms/Boton'
import Molecula1 from '../molecules/molecula1'
import Cuadrado from '../../static/icons/cuadrado.svg'
import Redondo from '../../static/icons/redondo.svg'
const OrganismoEP = () => {
  return (
    <div className='organismo-conteiner'>
        <div className='contenedor-logo'>
            <div icono={Cuadrado} />
            <div icono={Redondo} />
        </div>
        <Molecula1/>
        <Boton type={"boton-add"} name_button={"Add"}/>

    </div>
  )
}

export default OrganismoEP