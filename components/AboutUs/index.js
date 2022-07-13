import styled from "styled-components";
import { QualyH } from "../Typography";
import { ComfortaaP } from "../Typography";


function AboutUs() {
    return (
        <Box>
            <AboutUsTitle>
                 <QualyH>Quem Somos</QualyH>
            </AboutUsTitle>
            <RedLine />
            <AboutUsText>
                <ComfortaaP>Somos uma das empresas da Incubadora Pulsar da Universidade Federal de Santa Maria (UFSM). Produzimos mudas de morango com tecnologia patenteada pela UFSM, entregamos aos produtores na época mais adequada para o plantio e disponibilizamos assessoria técnica aos clientes.</ComfortaaP>        
            </AboutUsText>
        </Box>
    );
}

export default AboutUs;


const Box = styled.div`
    box-sizing: border-box;
    transform: translateY(-12px);
    background: #FFD6A9;
    box-shadow: 0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25), 0rem 1.5rem 2.375rem rgba(0, 0, 0, 0.14), 0rem 0.563rem 2.875rem rgba(0, 0, 0, 0.12);
    border-radius: 0.188rem;
    width: 90%;
    margin: auto;
    padding: 90px;
    max-width:1300px;

    @media (max-width: 975px) {
       padding:30px
    } 
`;

const AboutUsTitle = styled.div`
    color: #000000;
    align-items: center;
    text-align: center;
    justify-content: center;
`;

const AboutUsText = styled.div`
    color: #2D2828;
    align-items: center;
    text-align: justify;
    justify-content: center;
    margin-top: 6%;
`;

const RedLine = styled.span`
    position: absolute;
    margin-top:3%;
    left: 46.66%;
    right: 46.66%;
    border: 0.130rem solid #C02A27;
    border-radius: 0.125rem;

    @media (max-width: 775px) {
        display: none;
    } 
`; 