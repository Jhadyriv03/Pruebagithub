import React from 'react'
import "./OrganismoPI.css"
import Moleculacategoria from '../molecules/Moleculacategoria'
import Moleculaplatos from '../molecules/Moleculaplatos'
import CategoriaAll from './CategoriaAll'
import CategoriaBreakfast from './CategoriaBreakfast'
import CategoriaLauch from './CategoriaLauch'
import CategoriaDinner from './CategoriaDinner'
import CategoriaDrinks from './CategoriaDrinks'

export const OrganismoPI = () => {
  return (
    <div className='organismopi-conteiner'>
      <CategoriaAll/>
      <CategoriaBreakfast/>
      {/* <CategoriaLauch/>
      <CategoriaDinner/>
      <CategoriaDrinks/> */}
    </div>
  )
}

export default OrganismoPI
