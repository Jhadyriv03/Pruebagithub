import React from 'react'
import "./BarraCategoria.css"
import All from "../../static/icons/tenedoreslogo.svg";
import Boton from './Boton';

const BarraCategoria = () => {
  return (
    <div className = 'barra-categoria'>
        <div className = 'barra-categoria-conteiner'>
            <div className = 'barra-categoria-fsamp'>
                <samp>All</samp>
                <Boton icono={All} type={"boton-all"}/>

            </div>

        </div>

    </div>
  )
}

export default BarraCategoria