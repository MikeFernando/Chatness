import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    

    input[type='text']{
    font-size: 1rem !important;
    }

    @media screen and (-webkit-min-device-pixel-ratio:0) { 
        input:focus {
            font-size: 1rem !important;
        }
    }
`;