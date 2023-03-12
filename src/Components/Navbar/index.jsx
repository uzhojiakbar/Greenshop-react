import React from 'react'
import { Navigate, NavLink, Route } from 'react-router-dom'
import { Navigations } from '../../Utils/navigations'
import { Logo, NavbarStyle, NavLinks, Options, ToHome , SearchStyle,ShopStyle,LogoutStyle} from './styled'


const Navbar = () => {
  return (
    <NavbarStyle>
      <ToHome>
        <Logo onClick={() => Navigate(<Route path='./home' />)} />
      </ToHome>
      <NavLinks>
        {
          Navigations.map((v) => <NavLink
            className={({isActive})=>isActive ? 'active link' : 'link'}
            to={v.path}
          >
            {v.name}
          </NavLink>
          )
        }
      </NavLinks>
      <Options>
        <SearchStyle/>
        <ShopStyle/>
        <LogoutStyle/>
      </Options>
    </NavbarStyle>
  )
}

export default Navbar