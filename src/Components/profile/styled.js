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
    height: auto;
    margin-left: 8px;
    width: 30%;
`;

export const WrapperStatusCount = styled.div `
    display: flex;
    align-items: center;
    width:70%;
    justify-content: space-between;
    
`;

export const WrapperUserName = styled.div `
    display: flex;
    align-items: center;
    h3 {
        margin-right: 8px;
    }
`;

export const WrapperImg = styled.img `
    border-radius: 50%;
    width:200px;
    height: 200px;
    margin: 8px;
`;
