import styled from 'styled-components'
import Image from 'next/image';
import { QualyH } from "../Typography";
import { ComfortaaP } from "../Typography";

const Production = () => {
    return(
        <Header>
            <QualyH id="production">
                Produção de Mudas
            </QualyH>

            <GreenBox>
                <ProductText>
                    <ComfortaaP>São produzidas mudas de morango com torrão em laboratório de cultura de tecidos, com tecnologia patenteada pela UFSM e com a utilização das mais avançadas técnicas de manejo da produção, é a forma mais efetiva para promover e difundir inovações no agronegócio.</ComfortaaP>
                </ProductText>  
            </GreenBox>

            <ImageWrapper>
                <Image src="/images/producao.png" alt="vetor" layout="fill" />
            </ImageWrapper>
        </Header>   
    );
}

export default Production;

const Header = styled.div`
    color: #000000;
    align-items: center;
    text-align: center;
    justify-content: center;
    margin-top: 120px;
`;

const GreenBox = styled.div`
    box-sizing: border-box;
    transform: translateX(-190px);
    background: #4FB340;
    box-shadow: 0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25), 0rem 1.5rem 2.375rem rgba(0, 0, 0, 0.14), 0rem 0.563rem 2.875rem rgba(0, 0, 0, 0.12);
    border-radius: 0.188rem;
    margin: auto;
    width:60%;
    padding-bottom: 30px;
    padding-top: 30px;
    padding-left: 30px;
    padding-right: 60px;
    max-width:600px;
    margin-top: 60px;
    overflow:hidden; 
   
    @media (max-width: 975px) {
       padding:30px;
       transform: translateX(0px);
       margin-top:27%;
    }  

    @media (max-width: 942px) {
       padding:30px;
       transform: translateY(3%);
       margin-top:27%;
    }  

    @media (max-width: 854px) {
       padding:30px;
       transform: translateY(3%);
       margin-top:33%;  
       width:90%;
    }  

    @media (max-width: 728px) {
       padding:30px;
       transform: translateY(3%);
       margin-top:39%;
       width:90%;
    } 

    @media (max-width: 682px) {
       padding:30px;
       transform: translateY(3%);
       margin-top:41%;
       width:90%;
    } 

    @media (max-width: 655px) {
       padding:30px;
       transform: translateY(3%);
       margin-top:41%;
       width:90%;
    } 

    @media (max-width: 550px) {
       padding:30px;
       transform: translateY(12%);
       margin-top:42%;
       width:90%;
    } 

    @media (max-width: 545px) {
       padding:15px;
       transform: translateY(-6%);
       margin-top:56%;
       width:90%;
    } 

    @media (max-width: 532px) {
       padding:15px;
       transform: translateY(9%);
       margin-top:52%;
       width:90%;
    } 

    @media (max-width: 452px) {
       padding:15px;
       transform: translateY(18%);
       margin-top:39%;
       width:90%;
    } 

    @media (max-width: 421px) {
       padding:15px;
       transform: translateY(18%);
       margin-top:45%;
       width:90%;
    }

    @media (max-width: 403px) {
       padding:6px;
       transform: translateY(15%);
       margin-top:55%;
       width:90%;
    }


    @media (max-width: 387px) {
       padding:9px;
       transform: translateY(25%);
       margin-top:45%;
       width:90%;
    }

    @media (max-width: 320px) {
       padding:6px;
       transform: translateY(39%);
       margin-top:24%;
       width:90%;
    }

    @media (max-width: 280px) {
       padding:3px;
       transform: translateY(37%);
       margin-top:33%;
       width:90%;
    }
`;

const ProductText = styled.div`
    box-sizing: border-box;
    align-items: center;
    text-align: justify;
    justify-content: center;
    color:white;
`;

const ImageWrapper = styled.div`
    transform:translate(275px,-330px);
    margin: auto;
    position: relative;
    width: 45%;
    max-width: 500px;
    height: 350px;
    max-height: 450px;
    border-radius: 25px;
    overflow:hidden;


    @media (max-width: 975px) {
        height:300px;
        transform: translate(0px, -190%);
    } 

    @media (max-width: 452px) {
       width:90%;
    } 

    @media (max-width: 550px) {
       width:90%;
    } 

    @media (max-width: 545px) {
       width:90%;
    } 

    @media (max-width: 655px) {
       width:80%;
    } 

    @media (max-width: 682px) {
       width:80%;
    } 

    @media (max-width: 728px) {
       width:80%;
    } 

`;