import styled from "styled-components";

export const Container = styled.div`
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;

    width: 100vw;
    height: 100vh;
    background: linear-gradient(75deg, rgb(20, 23, 33) 0%, rgb(20, 23, 33) 50%, rgba(20, 23, 33,0.8) 100%);
`;

export const FormCard = styled.form`
    max-width: 375px;
    width: 100%;
    padding: 100px 0;

    @media(max-width: 768px) {
        svg {
            width: 200px !important;
        }
    }
`;

export const FormTitle = styled.div`
    font-size: 18px;
    font-family: 'Avenir', sans-serif;
    letter-spacing: 0.5px;
    color: #afafaf;
    padding-bottom: 18px;

    @media (max-width: 768px) {
        font-size: 14px;
    }
`;

export const Auth = styled.div`
    position: relative;
    display: inline-block;
    width: 100%;
    padding-bottom: 12px;
`;

export const AuthLabel = styled.div`
    position: absolute;
    top: 8px;
    left: 18px;
    font-size: 14px;
    color: rgb(175, 175, 175);
    font-family: 'Avenir', sans-serif;
    width: 100px;
`;

export const Input = styled.input`
    background-color: #3e404b;
    color: white;
    font-family: 'Avenir', sans-serif;
    outline: none;
    border: none;
    border-radius: 8px;
    padding: 22px 18px 12px 18px;
    width: 100%;
    margin-bottom: 12px;
    font-size: 1rem;
`;

export const Button = styled.button`
    font-size: 16px;
    width: 100%;
    height: 48px;
    color: white;
    background-color: rgb(56, 133, 150);
    border: none;
    outline: none;
    border-radius: 8px;
    font-family: 'Avenir', sans-serif;
    cursor: pointer;
    transition: all .44s ease;
    -webkit-transition: all .44s ease;
    -moz-transition: all .44s ease;
`;