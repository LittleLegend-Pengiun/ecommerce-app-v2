import { styled } from 'styled-components'

export const WrapperCategoryItem = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    justify-content: flex-start;
    border-bottom:2px solid #efefef;
    font-size: 24px;
    height: 36px;
    margin-top: 14px;
    cursor:pointer;
    &:hover{
        color: #008874;
        font-weight: 500;
    }
`