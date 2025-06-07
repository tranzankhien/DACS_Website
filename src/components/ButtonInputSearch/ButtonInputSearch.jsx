import React from 'react'
import { Button, Input } from 'antd'
import {
    SearchOutlined
} from '@ant-design/icons';

const ButtonInputSearch = (props) => {
    const { 
        size, placeholder, textButton, 
        bordered, backgroundColorInput = '#fff', 
        backgroundColorButton  = 'rgb(0, 71, 184)',
        colorButton = '#fff'} = props
    return (
        <div style={{ display: 'flex' }}>
            <Input
                size={size}
                placeholder={placeholder}
                bordered={bordered}
                style={{ backgroundColor: backgroundColorInput, borderRadius: 0 }} />
            <Button
                size={size}
                bordered={bordered}
                style={{ background: backgroundColorButton, border: !bordered && 'none', borderRadius: 0, fontSize: '14px' }}
                icon={<SearchOutlined style={{ color: colorButton }} />}
            > <span style={{ color: colorButton }}>{textButton}</span>
            </Button>
        </div>
    )
}

export default ButtonInputSearch