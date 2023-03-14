import styled from "styled-components";
import { ReactComponent as LogoBig } from '../../Assets/logo/Logo.svg'


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
        :hover{
            border-bottom: 3px solid #46A358;
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

export { NavbarStyle, Logo, ToHome, NavLinks, Options }