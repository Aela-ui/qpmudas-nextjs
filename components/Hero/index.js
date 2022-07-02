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

const Hero = () => {
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
        <header>            
                <Container id = "hero">
                    <div style={{
                        width: '100%',
                        maxWidth: '55%',
                        height: '55vh',
                        maxHeight:'327px',
                        position: 'relative',
                        borderRadius: '8%',
                        overflow: 'hidden'}}>
                            
                            <Image
                                src={images[currentIndex]} 
                                alt="vetor" 
                                layout='fill' 
                                objectFit='cover'
                            />
                    </div>

                    <div style={{
                        overflow: 'hidden',}}>

                        <Image 
                            src="/images/logobranco.svg" 
                            alt="logo branco"
                            height={90}
                            width={90} 
                            objectFit='cover'
                            
                        />
                    </div>

                    <Image src="/images/arrow.svg" onClick = {handleClick} alt="arrow"  width={30} height={30}/>
                    <Image src="/images/arrowReverse.svg" onClick = {handleClickReverse} alt="arrow reverse"  width={30} height={30}/>
                </Container>          
        </header>
    )
}

export default Hero;


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 20.5rem;

    background: #C02A27;

    @media (max-width: 965px) {
    flex-direction: column;
    }

`; 

