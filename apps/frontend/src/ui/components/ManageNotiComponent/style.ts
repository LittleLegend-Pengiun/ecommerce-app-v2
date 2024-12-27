import {styled} from "styled-components";
import {Row} from "antd";
import InputComponent from "../InputComponent/InputComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
export const WrapperNotification = styled(Row)`
    display:flex;
    align-items:center;
    justify-content:center;
    gap:5px;
    color:black;
    border:1px solid #efefef;
    background-color:${props => props.color};
    justify-content:space-between;
    width:100%;
    cursor:pointer;
`;
export const WrapperNotiText = styled.p
`
    color:${props => props.color};
    font-size:16px;
    font-weight:500;
    padding:5px 20px;
`;
export const WrapperViewOrderBtn = styled(ButtonComponent)
`
    background-color:#f0f0f0;
    color:black;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:0;
    margin-right:10px;
    padding:5px;
`;
export const WrapperFilterBtn = styled(ButtonComponent)
`
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:0;
    margin:10px;
    width:100px;
    height:30px;
`;
export const WrapperCheckBox = styled(InputComponent)
`
    border-radius:0;
    height:25px;
`;
export const WrapperPointNoti = styled.div
`
    display:flex;
    align-items:center;
    justify-content:center;
    gap:5px;
    color:white;
    background-color:blue;
    border-radius:50%;
    width:15px;
    height:15px;
    font-size:16px;
    cursor:pointer;
    margin-right:10px;
`;