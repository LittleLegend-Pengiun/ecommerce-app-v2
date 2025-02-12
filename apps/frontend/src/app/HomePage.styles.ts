import styled from "styled-components";
import { Col } from 'antd'

export const WrapperCategoryProduct = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    justify-content: flex-start;
    border-bottom:1px solid black;
    font-size: 24px;
    height: 44px;
`  
// export const WrapperButtonHover = styled(ButtonComponent)`
//     &:hover{
//         color: white;
//         background-color: #008874;
//         span {
//             color: white;
//         }
//     }
//     width:100%;
//     text-align:center;
// `
export const WrapperProducts = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    margin-top: 20px;
`
export const WrapperText = styled.h1`
    font-size: 30px;
    font-weight: 600;
    color: white;
    background-color: #008477;
    padding: 10px 20px;
    border-radius: 10px;
    border:2px solid #efefef;
    max-width: 800px;
`
export const WrapperColCategory = styled(Col)`
    width:25%;
    margin-right: 20px;
`
export const WrapperSlider = styled(Col)`
    width:75%;
`
// export const WrapperInputSearch = styled(InputComponent)`
//     width: 60%;
//     margin-top: 40px;
//     border-radius: 0;
//     border: 1px solid black;
//     height: 50px;
// `