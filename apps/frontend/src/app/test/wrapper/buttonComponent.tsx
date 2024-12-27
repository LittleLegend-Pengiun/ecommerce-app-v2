'use client';

import styled from 'styled-components';
import ButtonComponent from '@/ui/components/ButtonComponent/ButtonComponent';

export const WrapperButton = styled(ButtonComponent)`
    border-radius: 0px;
    font-size: 20px;
    width: 10vw;
    height:10vh;
    min-width: 200px;
    text-align: center;

    color: white;
    background-color: black;
    border: 1px solid white;
    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`;
