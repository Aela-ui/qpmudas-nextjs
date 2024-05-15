import styled from "styled-components";
import { QualyH, ComfortaaP} from "../Typography";
import { albionText, estivaText} from "./textCultivar";
import Image from "next/image";
import { useState } from "react";

function getTitle(step){
    switch (step){
        case "albion": return "Albion";
        case "estiva": return "PRA Estiva";
        default:
            return "";
    }
}

function getText(step){
    switch (step){
        case "albion": return albionText;
        case "estiva": return estivaText;
        default:
            return "";
    }
}

function getImage(step){
    switch (step){
        case "albion": return "/images/albion.png";
        case "estiva": return "/images/estiva.png";
        default:
            return "";
    }
}

const Cultivate = () => {
    const [step, setStep] = useState("albion");
    const title = getTitle(step);
    const text = getText(step);
    const image = getImage(step);

    const handleClick = () => {
        setStep(step === "albion"?"estiva":"albion");
    }

    return(
        <>
            <StrongGreenLine/>
            <Header id="cultivate">
                <QualyH>Cultivares</QualyH>
                <GreenBox>
                    <TitleBox>
                        {title}
                    </TitleBox>
                <GreenLine/>
                    <TextBox>
                        <ComfortaaP>
                            {text}
                        </ComfortaaP>
                    </TextBox>
                </GreenBox>
                <ArrowButton onClick = {handleClick}>
                    <Image src="/images/arrow2.svg" alt="arrow" width={60} height={60} />
                </ArrowButton>

                <ImageWrapper>
                    <Image src={image}alt="imagem das custivares" layout="fill" />
                </ImageWrapper>
            </Header>
        </>
    )
}

export default Cultivate;

const Header = styled.div`
    color: #000000;
    align-items: center;
    text-align: center;
    justify-content: center;
    margin-top: -245px;

    @media (max-width: 940px) {
        margin-top: -180px;
    }

    @media (max-width: 387px) {
        margin-top: -90px;
    }

    @media (max-width: 320px) {
        margin-top: -30px;
    }
`;

const GreenBox = styled.div`
    box-sizing: border-box;
    transform: translateX(180px);
    background: #4FB340;
    box-shadow: 0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25), 0rem 1.5rem 2.375rem rgba(0, 0, 0, 0.14), 0rem 0.563rem 2.875rem rgba(0, 0, 0, 0.12);
    border-radius: 0.188rem;
    margin: auto;
    margin-top: 45px;
    width:50%;
    padding: 30px;
    max-width:527px;
    overflow:hidden;

    @media (max-width: 940px) {
        transform:translate(0px);
        width:90%;
        max-width:900px;
    }

    @media (max-width: 512px) {
        transform:translate(0px);
        width:90%;
        max-width:900px;
        padding:15px;
    }

    @media (max-width: 364px) {
        transform:translateY(-15px);
        width:90%;
        max-width:900px;
        padding:15px;
    }

`;

const StrongGreenLine = styled.span`
    transform: translateY(-290px);
    justify-content: center;
    display: flex;
    margin:auto;
    width: 1000px;
    border: 0.063rem solid #005400;
    border-radius: 0.120rem;

    @media (max-width: 975px) {
        display: none;
    }
`; 

const TitleBox = styled.p`
    font-family: 'Comfortaa';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 50px;
    letter-spacing: 0.05em;
    margin-bottom: 3%;

    color: #FFFFFF;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);

    @media (max-width: 975px) {
        margin-bottom: 0%;
    }
`;

const TextBox = styled.div`
    color:#FFFFFF;
    box-sizing: border-box;
    align-items: center;
    text-align: justify;
    justify-content: center;
    margin-top:9%;

    @media (max-width: 975px) {
        margin-top: 1%;
    }
`;

const ArrowButton = styled.button`
    transform: translate(480px, -251px);
    margin: 15px;
    background-color: transparent;
    border: none;
    cursor: pointer;

    @media (max-width: 975px) {
        transform:translate(449px, -251px);
    }

    @media (max-width: 942px) {
        transform:translate(439px, -251px);
    }

    @media (max-width: 940px) {
        transform:translate(245px, 75px);
    }

    @media (max-width: 600px) {
        transform:translate(225px, 75px);
    }

    @media (max-width: 512px) {
        transform:translate(175px, 45px);
    }

    @media (max-width: 460px) {
        transform:translate(145px, 45px);
    }

    @media (max-width: 364px) {
        transform:translate(136px, 45px);
        width:45px;
        height:45px;
    }

    @media (max-width: 320px) {
        transform:translate(115px, 45px);
        width:45px;
        height:45px;
    }
`;

const GreenLine = styled.span`
    position: absolute;
    margin:auto;
    left: 45.66%;
    right: 45.66%;
    border: 0.130rem solid #005400;
    border-radius: 0.125rem;

    @media (max-width: 940px) {
        display: none;
    } 
`; 

const ImageWrapper = styled.div`
    transform:translate(-260px,-522px);
    margin: auto;
    position: relative;
    width: 45%;
    max-width: 450px;
    height: 450px;
    max-height: 450px;
    border-radius: 25px;
    overflow:hidden;

    @media (max-width: 975px) {
        transform:translate(-236px,-522px);
    }

    @media (max-width: 942px) {
        transform:translate(-220px,-522px);
    }  

    @media (max-width: 940px) {
        transform:translateY(-145px);
        height:350px;
        width:70%;
    }

    @media (max-width: 512px) {
        transform:translateY(-121px);
        height:250px;
        width:60%;
    }

    @media (max-width: 420px) {
        transform:translateY(-121px);
        height:220px;
        width:70%;
    }
`;
