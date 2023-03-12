import styled from "styled-components";
import { ReactComponent as LogoBig } from '../../Assets/logo/logo.svg'

import { ReactComponent as search } from '../../Assets/icons/search.svg'
import { ReactComponent as shop } from '../../Assets/icons/shop.svg'
import { ReactComponent as logout } from '../../Assets/icons/logout.svg'

const NavbarStyle = styled.div`
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding-top: 15px;
`
const Logo = styled(LogoBig)`
    cursor: pointer;
`
const ToHome = styled.div`
`

const NavLinks = styled.div`
    display: flex;
    gap: 50px;
    .link{
        font-family: 'Source Code Pro', monospace;
        font-weight: 400;
        font-size: 16px;

        color: #3D3D3D;
        text-decoration: none;
        border-bottom: 3px solid transparent;
        padding-bottom: 15px;
    }
    .active{
        font-weight: 700;
        border-bottom: 3px solid #46A358;
    }
`
const Options = styled.div`
`

const SearchStyle = styled(search)`
`
const ShopStyle = styled(shop)`

`
const LogoutStyle = styled(logout)`
    && path{
        fill: black;
        background-color: white;
        font-size: 50px;
    }
`
export { NavbarStyle, Logo, ToHome, NavLinks, Options }
export { SearchStyle, ShopStyle, LogoutStyle }