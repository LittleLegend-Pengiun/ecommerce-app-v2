import {styled} from "styled-components"
export const WrapperUl = styled.ul`
    list-style: none;
    padding: 0;
`
export const WrapperLi = styled.li`
    margin: 10px;
    font-size: 18px;
    font-weight: 400;
    cursor: pointer;
    &:hover{
        color:black;
        font-weight: bold;
    }
`;
export const WrapperLink = styled.div`
color:black;
white-space: nowrap;
cursor: pointer;
`;