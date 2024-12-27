import {styled} from "styled-components"
import ButtonComponent from "../ButtonComponent/ButtonComponent"
export const WrapperNotification = styled.span`
color:white;
font-size: 18px;
white-space: nowrap;
margin-left:5px;
cursor: pointer;
&:hover{
    color:white;
    font-weight: bold;
}
`;
export const WrapperConfirmButton = styled(ButtonComponent)`
    color:white;
    border-radius:0;
    width:fit-content;
    cursor:pointer
`;
