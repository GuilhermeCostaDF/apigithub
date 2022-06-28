import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 4px;

    input {
        border: 1px solid #ccc;
        border-radius: 8px;
        width: 100%;
        height: 44px;
        padding: 8px;
    }

    button {
        background-color: #ccc;
        padding: 8px 16px;
        margin: 0 8px;
        border-radius: 8px;
        font-weight: bold;
    
    &:hover {
        background-color: #e3e3e3;
    }    
    
    }

`