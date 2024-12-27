import { styled } from 'styled-components';
import { Row, Col, Form, Checkbox, Table, Radio } from 'antd';
import InputComponent from '../InputComponent/InputComponent';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import InputAccountComponent from '../InputAccountComponent/InputAccountComponent';
const { Column } = Table;
export const WrapperRow = styled(Row)`
    padding:10px;
    justify-content:space-between;
    h1{
        font-size:30px;
        font-weight:500;
    }
`
export const WrapperTitle = styled.h3`
    text-align:center;
    color:#008477;
    border:1px solid white;
    background-color:white;
    font-size:20px;
    font-weight:500;
`
export const WrapperCol = styled(Col)`
    width:50%;
    font-size:16px;
    font-weight:400;
`

export const WrapperForm = styled(Form)
    `
    background-color: #efefef;
    margin-left:60px;
    p {
        font-size: 18px;
        font-weight: 400;
        line-height: 24px;
        margin-bottom: 20px;
    }
`;
export const WrapperInputField = styled(InputComponent)`
    // margin-top: 20px;
    width: 100%;
    display: block; 
    border-radius: 0;
    height:50px;
`;

export const WrappperSaveInfor = styled(Checkbox)`
    // margin-top: 10px;
    input {
        margin-right: 5px;
        
    }
    label {
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
    }
    a {
        margin-left: 10px;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        color: black;
    
    }
`;
export const WrapperMoreAction = styled.div`
    display: flex;
    width: 50%;
    margin-top: 10px;
    gap: 30%;
`;
export const WrapperRowList = styled(Row)`
    justify-content:space-between;
    padding:10px;
`
export const WrapperColList = styled(Col)`
    font-size:18px;
    font-weight:400;
    display:block;
`

export const WrapperTable = styled(Table)`
    .ant-table {
        margin-top: 20px;
            .ant-table-thead 
            {
                .ant-table-cell 
                {
                    background-color: #008477;
                    font-weight: 600;
                    font-size: 18px;
                    color: #fff;
                }
            }
        .ant-table-tbody {
            .ant-table-row 
            {
                &:hover {
                background-color:#efefef;
                }
                height: 80px;
                font-size: 18px;
            }
        }
    }
`;
export const WrapperColumn = styled(Column)`
`;
export const WrapperPaymentMethod = styled.div`
display:'block';
margin-top:20px;
`
export const WrapperRadio = styled(Radio)`
margin-top:10px;
font-size:16px;
`
export const WrapperDiscountInput = styled(InputComponent)`
    width:50%;
    border-radius:0;
    height: fit-content;
`
export const WrapperButton = styled(ButtonComponent)
    `
    display: block;
    border-radius: 0;
    font-size: 16px;
    font-weight: 500;
`;
export const WrapperInputAccount = styled(InputAccountComponent)`
    border-radius: 0;
    padding:5px 12px;
`
