import styled from "styled-components"

const RedCont = styled.div`
background-color:${props=>props.cl};
color:${props=>props.text_cl}
`;

const HeadSize = styled.h1`
    font-size: 50px;
`;

export default function ImgCard({
    img="/dogstare.png",
    bg="red",
    tcl="#FFF",
    children=null,
}){
    
    
    return <RedCont cl={bg} text_cl={tcl}>
        {children}
        <img src={img}></img>
        <HeadSize>This is a cat</HeadSize>
        

    </RedCont>
}