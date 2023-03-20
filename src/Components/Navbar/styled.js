import styled from "styled-components";
import { ReactComponent as LogoBig } from '../../Assets/logo/Logo.svg'

const media = {
    mobile: '(max-width: 500px)',
    tablet: '(max-width: 768px)'
}

const NavbarStyle = styled.div`
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding-top: 15px;
    @media ${media.tablet}{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    @media ${media.mobile}{
        display: none;
    }
`
const Logo = styled(LogoBig)`
    cursor: pointer;
    @media ${media.tablet}{
        width: 120px;
    }
`
const ToHome = styled.div`
`
const NavLinks = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
    @media ${media.tablet}{
        gap: 25px;
    }
    .link{
        font-family: 'Source Code Pro', monospace;
        font-weight: 400;
        font-size: 16px;
        vertical-align: middle;
        color: #3D3D3D;
        text-decoration: none;
        border-bottom: 3px solid transparent;
        padding-bottom: 15px;
        :hover{
            border-bottom: 3px solid #46A358;
        }
        @media ${media.tablet}{
            font-size: 14px;
            padding-bottom: 5px;
        }
    }
    .active{
        font-weight: 700;
        border-bottom: 3px solid #46A358;
    }
    
`
const Options = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
    *{
        cursor: pointer;
    }
    .icon-nav{
        font-size: 18px;
    }

    @media ${media.tablet}{
        .icon-nav{
            font-size: 15px;
        }
    }

    .icon-nav:hover{
        color: gray;
    }
    .cart{
        position: relative;
    }
    .cart::after{
        content: '6';
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2px;
        font-size: 14px;
        position: absolute;
        bottom: 8px;
        left: 15px;
        width: 12px;
        height:12px;
        background: #46A358;
        border-radius: 50%;
        border: 3px solid #FFFFFF;

        font-family: sans-serif;
        font-size: 12px;
        color: #FFFFFF;
    }
    .login{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 7px;
        background: #46A358;
        border-radius: 6px;
        padding: 5px 10px;
        color: white;
        font-family: 'Source Code Pro', monospace;
        border: 3px solid transparent;
        cursor: pointer;

        -webkit-touch-callout: none; // iOS Safari
        -webkit-user-select: none; // Safari
        -khtml-user-select: none; // Konqueror HTML
        -moz-user-select: none; // Old versions of Firefox
        -ms-user-select: none; // Internet Explorer/Edge
        user-select: none;
        :hover{
            background-color: transparent;
            color: #46A358;
            border: 3px solid #46A358;
        }
    }
    @media ${media.tablet}{
        .login{
            padding: 4px 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 4px;
            font-size: 14px;
        }
    }
    .search-inp{
        position: relative;
        display: flex;
        align-items: center;
        .iconsearch{
            position: absolute;
            font-size: 15px;
            right: 7px;
            cursor: pointer;
            z-index: 99;
        }
        .inp{
            position: absolute;
            right: 0;
            box-sizing: border-box;
            padding: 5px;
            padding-right: 20px;
            cursor: text !important;
            outline: none;
            border-radius: 5px;
            z-index: 97;    
            font-family: 'Source Code Pro', monospace;
            letter-spacing: 1px;
            text-transform: capitalize;
            -webkit-touch-callout: none; // iOS Safari
            -webkit-user-select: none; // Safari
            -khtml-user-select: none; // Konqueror HTML
            -moz-user-select: none; // Old versions of Firefox
            -ms-user-select: none; // Internet Explorer/Edge
            user-select: none;
        }
    }
`

const DestkopNavStyle = styled.div`
    display: none;
    @media ${media.mobile}{
        display: flex;
    }
`

const MobileNav = styled.div`
    width: 100%;
    margin: 25px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const InputM = styled.div`
    position: relative;
    width: 300px;
    height: 60px;
    background: #F8F8F8;
    border-radius: 10px;
    display: flex;
    align-items: center;
    .icon-nav{
        position: relative;
        left: 10px;
        font-size: 18px;
        color: #A5A5A5;
    }
    .input{
        position: absolute;
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        font-family: 'Source Code Pro', monospace;
        font-weight: 400;
        font-size: 18px;
        color: #A5A5A5;
        padding: 15px;
        background-color: transparent;
        padding: 15px;
        padding-left: 40px;
        border-radius: 10px;
        ::placeholder{
            font-size: 18px;
            color: #A5A5A5;
        }
    }
`

const Searchnav = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    background: linear-gradient(137.05deg, rgba(70, 163, 88, 0.45) -24.6%, #46A358 100%);
    box-shadow: 0px 10px 20px rgba(70, 163, 88, 0.3);
    border-radius: 14px;

    width: 60px;
    height: 60px;

    color: white;
    font-size: 22px;
    transition: all .3s;
    :hover{
        background: linear-gradient(70deg, rgba(70, 163, 88, 0.45) -24.6%, #46A358 100%);
    }
    :active{
        background: linear-gradient(70deg, rgba(70, 163, 88, 0.45) -24.6%, #46A358 100%);
    }
`

export { Searchnav, InputM, DestkopNavStyle, MobileNav, NavbarStyle, Logo, ToHome, NavLinks, Options }