import styled from "styled-components";
import { ComfortaaP } from "../Typography";
import { QualyP } from "../Typography";

const AboutUs = () => {
    return(
        <Box>
            <BoxHeader>
                <QualyP>
                    Quem Somos
                </QualyP>
            </BoxHeader>
            <RedLine/>
            <BoxText>
                <ComfortaaP>
                    Somos uma das empresas da Incubadora Pulsar da Universidade Federal de Santa Maria (UFSM). Produzimos mudas de morango com tecnologia patenteada pela UFSM, entregamos aos produtores na época mais adequada para o plantio e disponibilizamos assessoria técnica aos clientes.
                </ComfortaaP>
            </BoxText>
        </Box>
    )
}

export default AboutUs;

const Box = styled.div`
    transform: translateY(-12px);
    width: 90%;
    box-shadow: 0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25), 0rem 1.5rem 2.375rem rgba(0, 0, 0, 0.14), 0rem 0.563rem 2.875rem rgba(0, 0, 0, 0.12);
    background:#FFD6A9;
    max-width: 1300px;
    box-sizing: border-box;
    margin: auto;
    align-items: center;
    text-align: justify;
    justify-content: center;
    border-radius: 0.188rem;
    padding: 45px;
`;

const BoxHeader = styled.div`
    color:#000;
    margin-left:35%;
    @media (max-width: 1000px) {
        margin-left:10%;
    } 
`;

const BoxText = styled.div`
    color:#000;
    padding:60px;
`;

const RedLine = styled.span`
    position: absolute;
    left: 46.66%;
    right: 46.66%;
    border: 0.130rem solid #C02A27;
    border-radius: 0.125rem;
    margin-top:30px;

    @media (max-width: 1120px) {
        display: none;
    } 
`; 