import styled from "styled-components";

const media = {
    mobile: '(max-width: 500px)',
    tablet: '(max-width: 768px)'
}

const HeaderStyle = styled.div`
    
`

const Bannertemplate = styled.div`
    display: flex;
    background: linear-gradient(97.77deg, rgba(245, 245, 245, 0.5) -23.46%, rgba(245, 245, 245, 0.5) 107.51%);
    height: 650px;
    @media ${media.mobile}{
        width: 450px;
        height: 250px;
        border: 2px solid red;
        background: linear-gradient(104.74deg, rgba(70, 163, 88, 0.2) 1.08%, rgba(70, 163, 88, 0.1) 99.23%);
        border-radius: 30px;
        margin: 0 auto;
    }
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
    @media ${media.mobile}{
        font-family: 'Cera Pro';
        font-style: normal;
        font-weight: 500;
        font-size: 11px;
        line-height: 16px;
        /* identical to box height, or 145% */

        text-transform: uppercase;

        color: #3D3D3D;
    }
`
const Opener = styled.div`
    font-family: 'Cera Pro';
    font-style: normal;
    font-weight: 900;
    font-size: 70px;
    text-transform: uppercase;
    color: #3D3D3D;
    span{
        color:#46A358;
    }
    @media ${media.mobile}{
        font-family: 'Cera Pro';
        font-style: normal;
        font-weight: 900;
        font-size: 24px;
        line-height: 29px;
        /* or 121% */

        text-transform: uppercase;

        color: #3D3D3D;
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
const Button = styled.button`
    background: #46A358;
    width: 150px;
    height: 40px;
    border-radius: 6px;
    font-family: 'Cera Pro';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    text-transform: uppercase;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 3px solid transparent;
    transition: .3s;
    :hover{
        background-color: white;
        border: 3px solid #46A358;
        color: #46A358;
    }
    margin-top: 100px;

    @media ${media.mobile}{
        margin: 0;
    }
`

const Left = styled.div`
    flex: 1;
    padding: 120px 0;
    padding-bottom: 140px;
    padding-left: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media ${media.mobile}{
        padding: 25px 20px;
        flex: 1;
    }
`

const Right = styled.div`
    flex: 1;
    display: flex;
    position: relative;
    .big{
        position: absolute;
        width: 600px;
        right: 10px;
        bottom: 40px;
    }
    .small{
        position: absolute;
        width: 250px;
        left: 20px;
        bottom: 75px;
    }

    @media ${media.mobile}{
        flex: 1;
        .pic{
            width: 100px;
            left: 0;
            top: 0;
        }
    }
`



const CoruselNavigation = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    margin: 10px 0;
    .nav{
        width:  10px;
        height: 10px;
        border-radius: 50%;
        background: rgba(70, 163, 88, 0.3);
        cursor: pointer;
    }
    .active{
        background: rgba(70, 163, 88, 1);
    }
`

export { HeaderStyle, Bannertemplate, Title, Opener, OpenerAbout, Button }
export { Left, Right, Main, CoruselNavigation }