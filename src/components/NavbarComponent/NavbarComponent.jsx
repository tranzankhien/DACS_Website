import React from 'react'
import { WrapperContent, WrapperLableText, WrapperTextPrice, WrapperTextValue } from './style'
import { Checkbox, Rate } from 'antd';

const NavbarComponent = () => {
  const renderContent = (type, options) => {
    switch (type) {
      case 'text':
        return options.map((option) => {
          return (
            <WrapperTextValue>{option}</WrapperTextValue>
          )
        })

      case 'checkbox':
        return (
          <Checkbox.Group style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }} >
            {options.map((option) => {
              return (
                <Checkbox value={option.value}>{option.lable}</Checkbox>
              )
            })}
          </Checkbox.Group>
        )

      case 'star':
        return options.map((option) => {
          return (
            <div>
              <Rate style={{ fontSize: '12px', gap: '4px' }} disabled defaultValue={option} />
              <span> {` từ ${option} sao`} </span>
            </div>
          )
        })

      case 'price':
        return options.map((option) => {
          return (
            <WrapperTextPrice> {option} </WrapperTextPrice>
          )
        })
      default:
        return {}
    }
  }
  return (
    <div>
      <WrapperLableText>Lable</WrapperLableText>
      <WrapperContent>
        {renderContent('text', ['Tu lanh', 'TV', 'May Giat'])}
      </WrapperContent>
      <WrapperContent>
        {renderContent('checkbox', [
          { value: 'a', lable: 'A' },
          { value: 'b', lable: 'B' }
        ])}
      </WrapperContent>
      <WrapperContent>
        {renderContent('star', [3, 4, 5])}
      </WrapperContent>
      <WrapperContent>
        {renderContent('price', ['dưới 50.000', 'trên 60.000'])}
      </WrapperContent>
    </div>
  )
}

export default NavbarComponent