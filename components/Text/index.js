import styled from "styled-components";

export default function Text({children, color}){
    return(
        <Paragrafo color={color}>
            {children}
        </Paragrafo>
    )
}


const Paragrafo = styled.p`
    color:${(props) => props.color};
    font-family: 'Comfortaa', cursive;
`;