import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Navigations } from '../../Utils/navigations'
import { DestkopNavStyle, InputM, Logo, MobileNav, NavbarStyle, NavLinks, Options, Searchnav, ToHome } from './styled'

const Navbar = () => {
  const [searchnav, setSearchnav] = useState(false)
  return (
    <>
      <NavbarStyle>
        <ToHome>
          <Logo />
        </ToHome>
        <NavLinks>
          {
            Navigations.map((v) => v.show && v.public && (
              <NavLink
              className={({ isActive }) => isActive ? 'active link' : 'link'}
              to={v.path}
            >
              {v.name}
            </NavLink>
            )
            )
          }
        </NavLinks>
        <Options>
          <div className="search">
            {
              searchnav
                ?
                <div className='search-inp'>
                  <i onClick={() => setSearchnav(!searchnav)} className="icon-nav iconsearch fa-solid fa-x"></i>
                  <input placeholder='Search Plants' className='inp' type="text" />
                </div>
                :
                <i onClick={() => setSearchnav(!searchnav)} className="icon-nav fa-solid fa-magnifying-glass"></i>
            }
          </div>
          <div className="cart">
            <i className="icon-nav fa-solid fa-cart-shopping"></i>
          </div>
          <div className="login">
            <i className="icon-nav fa-solid fa-right-to-bracket"></i>
            Login
          </div>
        </Options>
      </NavbarStyle>
      <DestkopNavStyle>
        <MobileNav>
          <InputM>
            <i className="icon-nav fa-solid fa-magnifying-glass"></i>
            <input className='input' type="text" placeholder='Find your plants' />
          </InputM>
          <Searchnav>
            <i className="fa-solid fa-filter"></i>
          </Searchnav>
        </MobileNav>
      </DestkopNavStyle>
    </>

  )
}

export default Navbar