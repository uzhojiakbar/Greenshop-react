import React, { useState } from 'react'
import { Bannertemplate, Button, CoruselNavigation, HeaderStyle, Left, Opener, OpenerAbout, Right, Title } from './style'
import { NavbarCorusel } from '../../Mock/navbarCorusel'

const Header = () => {
  const [banner, setBanner] = useState(0)
  const short = NavbarCorusel[banner]
  const AutoPlay = () => {
    setTimeout(() => {
      if (banner < NavbarCorusel[NavbarCorusel.length - 2].id) {
        setBanner(banner + 1)
      }
      else {
        setBanner(0)
      }
    }, 3000);
  }
  AutoPlay()
  return (
    <HeaderStyle>
      <Bannertemplate>
        <Left>
          <Title>{short.welcome}</Title>
          <Opener>{short.title}</Opener>
          <OpenerAbout>{short.desc}</OpenerAbout>
          <Button>{short.button.name}</Button>
        </Left>
        <Right>
          <img className='big pic' src={short.right.img} alt="" />
          <img className='small pic' src={short.right.img} alt="" />
        </Right>
      </Bannertemplate>
      <CoruselNavigation>
        {
          NavbarCorusel.map((v) =>
            <div
              key={v.id}
              onClick={() => setBanner(v.id - 1)}
              className={v.id === short.id ? 'active nav' : 'nav'}
            >
            </div>)
        }
      </CoruselNavigation>

    </HeaderStyle>
  )
}

export default Header