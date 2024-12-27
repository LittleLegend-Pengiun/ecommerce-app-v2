import { Row } from "antd";
import styled from "styled-components";
import Link from "next/link";

export const WrapperHeader = styled(Row)`
    background-color: #008874;
    padding: 10px 120px;
    align-items: center;
    gap: 16px;
    flex-wrap: nowrap;
    margin-bottom: 40px;
`;

interface WrapperTextHeaderProps {
    children: React.ReactNode;
}

export const WrapperTextHeader = styled.span<WrapperTextHeaderProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
`;

interface WrapperAccountHeaderProps {
    children: React.ReactNode;
}

export const WrapperAccountHeader = styled.div<WrapperAccountHeaderProps>`
    display: flex;
    align-items: center;
    color: white;
    gap: 10px;
    font-size: 14px;
    border-right: 2px solid white;
`;

interface WrapperTextHeaderSmallProps {
    children: React.ReactNode;
}

export const WrapperTextHeaderSmall = styled.span<WrapperTextHeaderSmallProps>`
    color: white;
    font-size: 18px;
    white-space: nowrap;
    margin-right: 5px;
    cursor: pointer;
    &:hover {
        color: white;
        font-weight: bold;
    }
`;

interface WrapperTextListAccountDropdownProps {
    children: React.ReactNode;
}

export const WrapperTextListAccountDropdown = styled.span<WrapperTextListAccountDropdownProps>`
    color: black;    
    font-size: 16px;
    white-space: nowrap;
    cursor: pointer;
    &:hover {
        color: black;
        font-weight: bold;
    }
`;

interface WrapperLinkProps {
    to: string;
    children: React.ReactNode;
}

export const WrapperLink = styled(Link) <WrapperLinkProps>`
    color: white;
    white-space: nowrap;
    cursor: pointer;
    &:hover {
        color: white;
        font-weight: bold;
    }
`;