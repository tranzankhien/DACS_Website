import { Card } from "antd";
import styled from "styled-components";

export const WrapperCardStyle = styled(Card)`
    border: none;
    & img {
        height: 200px;
        width: 200px !important;
    }
    position: relative;
    .ant-card-cover {
        margin-top: 0 !important;
        margin-inline-start: 0 !important;
        margin-inline-end: 0 !important;
    }
`

export const WrapperImgStyle = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
    height: 200px;
`

export const StyleNameProduct = styled.div`
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    color: rgb(56, 56, 61);
`
    
export const WrapperReporText = styled.div`
    font-size: 11px;
    color: rgb(128, 128, 137);
    display: flex;
    align-items: center;
    margin: 6px 0 0;
`

export const WrapperPriceText = styled.div`
    color: rgb(237, 8, 12);
    font-size: 16px;
    font-weight: 500;
`

export const WrapperDiscountText = styled.span`
    color: rgb(237, 8, 12);
    font-size: 10px;
    font-weight: 500;
`