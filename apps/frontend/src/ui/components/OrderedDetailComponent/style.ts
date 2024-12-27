import { styled } from "styled-components";
import { Row, Col } from "antd";
import { WrapperRow } from '../PaymentComponent/style';
export const WrapperTextCol = styled(Col)`
    font-size:18px;
    //color: #008477;
    padding: 5px;
`
export const WrapperTextDetail = styled.span`
    font-size:18px;
    color: #008477;
`
export const WrapperColDetail = styled(Col)`
    font-size:18px;
    font-weight: 400;
`
export const WrapperRowDetail = styled(Row)`
    padding:10px;
    justify-content:space-between;
    border-bottom:1px solid #efefef;
`