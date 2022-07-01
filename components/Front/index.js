import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import styled from 'styled-components'

const images = [
    '/images/banner_1.webp', 
    '/images/banner2.webp', 
    '/images/banner3.webp', 
    '/images/banner4.webp', 
    '/images/banner5.webp'
];

const Capa = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            if(currentIndex === images.length - 1) {
                setCurrentIndex(0);
            } 
            else {
                 setCurrentIndex(currentIndex + 1);
            }
        }, 4000)
        return () => clearInterval(intervalId);
    }, [currentIndex])

    const handleClick = () => {
        if(currentIndex === images.length - 1) {
            setCurrentIndex(0);
        } 
        else {
             setCurrentIndex(currentIndex + 1);
        }
    }

    const handleClickReverse = () => {
        if(currentIndex === 0) {
            setCurrentIndex(images.length - 1);
        } 
        else {
             setCurrentIndex(currentIndex - 1);
        }
    }
    
    return(
        <div>
            <Menu>
                <Container id = "capa">
                    <Image src={images[currentIndex]} alt="vetor" width={250} height={250}/>
                    <Image src="/images/logobranco.svg" alt="logo branco" width={30} height={30}/>
                    <Image src="/images/arrow.svg" onClick = {handleClick} alt="arrow"  width={30} height={30}/>
                    <Image src="/images/arrowReverse.svg" onClick = {handleClickReverse} alt="arrow reverse"  width={30} height={30}/>
                </Container>
            </Menu>
        </div>
    )
}

export default Capa;

const Menu = styled.div `
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(0rem);
    width: 100%;
    height: 20.5rem;
    top: 182.125rem;

    background: #C02A27;

    @media (max-width: 965px) {
    flex-direction: column;
    }
`; 