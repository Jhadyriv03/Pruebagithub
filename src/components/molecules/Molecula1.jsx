import React from 'react'
import "./Molecula1.css"
import Atomo1 from '../atoms/Atomo1'
import pinfo from '../../assets/PlatosInfo.json'
const Molecula1 = () => {
  return (
    <div className='moleculainfo-conteiner'>
        {
            pinfo.map((infor)=>{
                return <Atomo1 infor={infor} key={infor.id}/>
            })
        }
    </div>
  )
}

export default Molecula1