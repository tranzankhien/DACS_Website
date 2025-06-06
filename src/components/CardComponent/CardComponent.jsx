import React from 'react'
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperImgStyle, WrapperPriceText, WrapperReporText } from './style'
import { StarFilled } from '@ant-design/icons'
import logo from '../../assets/images/logo.png'

const CardComponent = () => {
    return (
        <WrapperCardStyle
            hoverable
            style={{ width: 200 }}
            bodyStyle={{ padding: '10px' }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
            <WrapperImgStyle src={logo} alt='logo' />
            <StyleNameProduct>Iphone</StyleNameProduct>
            <WrapperReporText>
                <span style={{ marginRight: '4px' }}>
                    <span>4.55</span> <StarFilled style={{ fontSize: '10px', color: 'yellow' }} />
                </span>
                <span>| Đã bán 1000+</span>
            </WrapperReporText>
            <WrapperPriceText>
                1.000.000đ
                <WrapperDiscountText>-5%</WrapperDiscountText>
            </WrapperPriceText>
        </WrapperCardStyle>
    )
}

export default CardComponent