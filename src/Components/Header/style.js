import styled from "styled-components";

const HeaderStyle  = styled.div`
    
`

const Bannertemplate  = styled.div`
    display: flex;
` 

const Main = styled.div`

`

const Title = styled.div`
    font-family: 'Cera Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #3D3D3D;

`
const Opener = styled.div`
    font-family: 'Cera Pro';
    font-style: normal;
    font-weight: 900;
    font-size: 70px;
    line-height: 70px;
    text-transform: uppercase;
    color: #3D3D3D;
    span{
        color:#46A358;
    }
`

const OpenerAbout = styled.div`
    font-family: 'Cera Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #727272;
    width: 580px;
`
const Button = styled.div`
    background: #46A358;
    width: 150px;
    height: 40px;
    border-radius: 6px;
`

const Right = styled.div`
    flex: 1;
`
const Left = styled.div`
    flex: 1;
    height: 600px;
    border: 2px solid red;
    padding: 65px 0;
    padding-left: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export {HeaderStyle,Bannertemplate,Title,Opener,OpenerAbout,Button}
export {Left,Right,Main}