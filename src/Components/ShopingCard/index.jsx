import React from 'react'
import { ShopingCardSt } from './style'
import { ShopMock } from '../../Mock/shopMock'
import PlantsInfo from '../PlanstInfo'


const ShopingCard = () => {
  return (
    <ShopingCardSt>
        {
            ShopMock.map((v)=>{
                return <PlantsInfo name={v.name} img={v.img[0].url}/>
            } 
            )
        }
    </ShopingCardSt>
  )
}

export default ShopingCard