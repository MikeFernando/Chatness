import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(75deg, rgb(20, 23, 33) 0%, rgb(20, 23, 33) 50%, rgba(20, 23, 33,0.8) 100%);
    display: table-cell;
    vertical-align: middle;
`;

export const FormCard = styled.form`
    width: 50%;
    max-width: 350px;
    padding: 0% 25% 0% 25%;
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
    padding: 32px 18px 12px 18px;
    width: calc(100% - 18px - 18px);
    margin-bottom: 12px;
`;

export const Button = styled.button`
    font-size: 16px;
    width: 100%;
    height: 60px;
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