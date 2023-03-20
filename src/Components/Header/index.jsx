import React, { useState } from 'react'
import { Bannertemplate, Button, HeaderStyle, Left, Opener, OpenerAbout, Right, Title } from './style'
import { NavbarCorusel } from '../../Mock/navbarCorusel'

const Header = () => {
  const [banner,setBanner] = useState(NavbarCorusel[0])
  return (
    <HeaderStyle>
      <Bannertemplate>
        <Left>
          <Title>{banner.welcome}</Title>
          <Opener>{banner.title}</Opener>
          <OpenerAbout>{banner.desc}</OpenerAbout>
          <Button>{banner.button.name}</Button>
        </Left>
        <Right>
          
        </Right>
      </Bannertemplate>
    </HeaderStyle>
  )
}

export default Header