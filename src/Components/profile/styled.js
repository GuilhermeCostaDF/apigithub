import styled from 'styled-components';

export const Wrapper = styled.div `
    display: flex;
    align-items: flex-start;
`;

export const WrapperInfosUser = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 200px;
    margin-left: 8px;
    width: 30%;
    h1 {
        font-size: 32px;
        font-weight: bold;
    }

    h3{
        font-size: 18px;
    }

    h4{
        font-size: 16px;
    }
`;

export const WrapperStatusCount = styled.div `
    display: flex;
    align-items: center;
    text-align: center;
    div {
        margin-right: 30px;
    }

`;

export const WrapperUserName = styled.div `
    display: flex;
    align-items: center;
    margin-top: 8px;
    
    h3 {
        margin-right: 8px;
    }
    a {
        color: purple;
        font-weight: bold;
        font-size: 18px;
        text-decoration: none;
    }
`;

export const WrapperImg = styled.img `
    border-radius: 50%;
    width:200px;
    height: 200px;
    margin: 8px;
`;
